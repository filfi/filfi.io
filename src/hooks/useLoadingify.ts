import { useState } from 'react';

import { sleep } from '@/utils/utils';
import { catchify } from '@/utils/hackify';

export type Handler<R = any, P extends unknown[] = any> = (
  ...args: P
) => Promise<R>;
export type Options = {
  loadingDelay?: number;
};

export default function useLoadingify<R = any, P extends unknown[] = any>(
  handler: Handler<R, P>,
  options?: Options,
) {
  const [loading, setLoading] = useState(false);

  const run = async (...args: P) => {
    setLoading(true);

    const [e, res] = await catchify(handler)(...args);

    if (options?.loadingDelay) {
      await sleep(options.loadingDelay);
    }

    setLoading(false);

    if (e) throw e;

    return res;
  };

  return { loading, run };
}
