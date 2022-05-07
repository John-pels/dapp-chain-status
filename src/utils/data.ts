import { chainNetworkTypes } from "@src/store/types";

export const isArrayNotEmpty = (array: Array<any>) => {
  if (Array.isArray(array) && array.length > 0) {
    return true;
  }

  return false;
};

export const filterChains = (data: Array<chainNetworkTypes>) => {
  const result = data.filter(
    (chain) =>
      chain?.tokenDecimals?.length > 0 && chain?.tokenSymbols?.length > 0
  );
  return result;
};
