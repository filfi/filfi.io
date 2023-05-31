export function isDef<V>(val: V | null | undefined): val is V {
  return val !== null && val !== undefined;
}

export function isFn(val: unknown): val is () => void {
  return typeof val === 'function';
}

export function isStr(val: unknown): val is string {
  return typeof val === 'string';
}

export async function sleep(delay = 200) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise<void>((resolve) => setTimeout(resolve, delay));
}
