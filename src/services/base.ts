import axios, { AxiosError, type AxiosInstance } from "axios";
import { createDiscreteApi } from "naive-ui";

const { message } = createDiscreteApi(["message"]);

export default class BaseService {
  instance: AxiosInstance = null as any;

  constructor() {
    this.instance = axios.create({
      // baseURL: Config.SERVER,
      baseURL: "http://110.42.253.75:40092",
      timeout: 10000,
      headers: {
        token: localStorage.getItem("token") || "",
      },
    });
    this.instance.interceptors.request.use((x: any) => {
      x.meta = x.meta || {};
      x.meta.timer = new Date().getTime();
      return x;
    });
    this.instance.interceptors.response.use(
      (x) => {
        return x;
      },
      (error: AxiosError) => {
        const status = error.response?.status;
        console.log("Error: ", error.code);
        if (error.code === AxiosError.ERR_NETWORK) {
          // 服务器没开，手机没网络 ...
          message.error("无法连接服务器");
        } else if (error.code === AxiosError.ECONNABORTED) {
          // navigationRef.navigate('NetError');
          // 服务器连接超时，用户取消 ...
          message.error("服务器连接超时");
        } else if (
          error.code === AxiosError.ERR_BAD_REQUEST ||
          error.code == AxiosError.ERR_BAD_RESPONSE
        ) {
          // Request: 状态码错误 -> 4xx
          // Response: 状态码错误 -> 5xx
          message.error("服务器开小差了");
        }
        return Promise.reject(error);
      },
    );
  }
}
