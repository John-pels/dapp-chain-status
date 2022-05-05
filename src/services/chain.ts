import RequestConfig from ".";
import { API_ROUTES } from "./routes";

class ChainService extends RequestConfig {
  constructor() {
    super();
  }

  getAllChains = async () => {
    return await this.api.get(API_ROUTES.GET_ALL_CHAIN_NETWORKS);
  };
}

const chainService = new ChainService();

export { chainService };
