import RequestConfig from ".";
import { API_ROUTES } from "./routes";

class ChainService extends RequestConfig {
  constructor() {
    super();
  }

  getAllChains = async () => {
    return await this.api.get(API_ROUTES.GET_ALL_CHAIN_NETWORKS);
  };

  getNetworkStatus = async (name: string) => {
    return await this.api.get(`${API_ROUTES.GET_NETWORK_STATUS}/${name}`);
  };
}

const chainService = new ChainService();

export { chainService };
