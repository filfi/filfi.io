import Modal from '@/components/Modal';
import type { AlertOptions } from '@/components/Modal';

export type CatchedResult<E extends Error, R = any> = [E, null] | [null, R];

export function catchify<E extends Error, R = any, P extends unknown[] = any>(
  handler: (...args: P) => Promise<R>,
) {
  return async (...args: P): Promise<CatchedResult<E, R>> => {
    try {
      const res = await handler(...args);

      return [null, res];
    } catch (e) {
      return [e as E, null];
    }
  };
}

export function toastify<E extends Error, R = any, P extends unknown[] = any>(
  handler: (...args: P) => Promise<R>,
  options?: AlertOptions & { slient?: boolean },
) {
  return async (...args: P) => {
    const [e, res] = await catchify<E, R, P>(handler)(...args);

    if (e) {
      if (!options?.slient) {
        const content = (e as any).data?.message ?? e.message;

        Modal.alert({
          content,
          icon: 'warn',
          title: '操作失败',
          ...options,
        });
      }

      throw e;
    }

    return res;
  };
}
