import { useState } from 'react';
import { useMount } from 'ahooks';

export type IService<R = any, P extends any[] = any> = (...args: P) => Promise<API.PagingRes<R>>;

export type IOptions = {
  defaultPage?: number;
  pageSize?: number;
  manual?: boolean;
};

export default function usePagination<R = any, P extends any[] = any>(
  service: IService<R, P>,
  options?: IOptions,
) {
  const opts = Object.assign(
    {
      defaultPage: 1,
      pageSize: 10,
    },
    options,
  );
  const [data, setData] = useState<R[]>();
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState<P>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(opts.defaultPage);
  const [pageSize, setPageSize] = useState(opts.pageSize);

  const request = async (...args: P) => {
    setParams(args);
    setLoading(true);
    setError(undefined);
    // const [p] = args;
    // setPage(p.page);
    // setPageSize(p.pageSize);

    try {
      let data: any = await service(...args);

      if (`${data.code}` === '0') {
        data = data.data;
      }

      setData(data.list);
      setTotal(data.total ?? 0);
      setPage(args[0].page);
      setPageSize(args[0].pageSize);
    } catch (e: any) {
      setError(e);
    }

    setLoading(false);
  };

  const run = (...args: P) => {
    const [p, ...other] = args;
    return request(...([{ page, pageSize, ...p }, ...other] as P));
  };

  const refresh = () => {
    const p = params ?? ([] as unknown as P);
    return run(...p);
  };

  const changePage = (page: number) => {
    const [p, ...other] = params ?? [];
    return run(...([{ ...p, page }, ...other] as P));
  };

  const changePageSize = (pageSize: number) => {
    const [p, ...other] = params ?? [];
    return run(...([{ ...p, pageSize }, ...other] as P));
  };

  useMount(() => {
    if (!opts.manual) {
      run(...([{ pageSize, page }] as P));
    }
  });

  return {
    page,
    pageSize,
    data,
    total,
    error,
    params,
    loading,
    run,
    refresh,
    changePage,
    changePageSize,
  };
}
