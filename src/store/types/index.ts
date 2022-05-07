export enum ChainStatusTypes {
  GET_ALL_NETWORK_CHAIN_REQUEST = "GET_ALL_NETWORK_CHAIN_REQUEST",
  GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS = "GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS",
}

export interface chainState {
  allchainNetworks: Array<chainNetworkTypes>;
}

export type chainNetworkTypes = {
  ss58Format: number;
  tokenDecimals: Array<number>;
  tokenSymbols: Array<string>;
  connected: boolean;
  icon: string;
  name: string;
  node: string;
};

export interface getAllChainAction {
  type: ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST_SUCCESS;
  payload: Array<chainNetworkTypes>;
}

export type chainActions = getAllChainAction;
