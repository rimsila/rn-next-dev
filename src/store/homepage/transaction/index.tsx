import { useCreation, usePersistFn, useRequest, useSetState } from 'ahooks';
import React from 'react';
import { createContext } from 'use-context-selector';

// * ----- initialState --------

type IOtherState = Partial<{
  loadingGetProducts: boolean;
  productsData: any;
}>;

const initialState = {
  counter: 1,
};

type Action = Partial<{
  insCounter: () => void;
  runGetProductsData: () => void;
  refreshGetProducts: () => void;
}>;

// * ----- ctx and TranProvider --------
export const tranCtx = createContext<[typeof initialState & IOtherState, Action]>([initialState, {}]);

export const TranProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useSetState<typeof initialState>({
    ...initialState,
  });

  const insCounter = usePersistFn(() => {
    setState(prev => ({
      counter: prev.counter + 1,
    }));
  });

  // * ------------ getProducts --------------
  const {
    data: productsDataApi,
    loading: loadingGetProducts,
    run: runGetProductsData,
    refresh: refreshGetProducts,
  } = useRequest('https://gorest.co.in/public-api/products', {
    manual: true,
  });

  //   optimize state
  const productsData = useCreation(() => productsDataApi, [productsDataApi]);

  // console.log('productsDataApi', productsDataApi);

  return (
    <tranCtx.Provider
      value={[
        { ...state, productsData, loadingGetProducts },
        { insCounter, runGetProductsData, refreshGetProducts },
      ]}
    >
      {children}
    </tranCtx.Provider>
  );
};
