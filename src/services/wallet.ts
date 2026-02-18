import type { PaginationProps } from "@/constants/types";
import BaseService from "./base";

export default class WalletService extends BaseService {
  constructor() {
    super();
  }

  async selectFirstAndLastWallet() {
    let result = await this.instance.get("/wallets/first-and-last", {});
    return result.data;
  }

  async selectWallets(params: PaginationProps) {
    let result = await this.instance.get("/wallets", { params });
    return result.data;
  }
}
