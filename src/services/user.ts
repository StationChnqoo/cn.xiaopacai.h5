import BaseService from "./base";

export default class UserService extends BaseService {
  constructor() {
    super();
  }

  async login(params: { mobile: string; password: string }) {
    let result = await this.instance.get("/public/login", {
      params,
    });
    return result.data;
  }

  async selectUser() {
    let result = await this.instance.get("/users/me");
    return result.data;
  }
}
