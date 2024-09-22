import Axios, {AxiosHeaderValue, AxiosInstance} from 'axios';
import _ from 'lodash-es';

export type TokenType = 'ACCESS' | string;
export type TokenStatus = 'SUCCESS' | string;

export type GlobalToken = {
  token_info: {
    token: string;
    token_type: TokenType;
  };
  status: TokenStatus;
};

export const MAIN_SERVER_BASE_URL = 'http://api.rosedays.org';

const axiosInstance = Axios.create({
  baseURL: MAIN_SERVER_BASE_URL,
});

abstract class AbstractAPIService<T> {
  readonly apiClient: T;
  constructor(_apiClient: T) {
    this.apiClient = _apiClient;
  }

  abstract Get(params: any): any;
  abstract Post(params: any): any;
  abstract Put(params: any): any;
  abstract Delete(params: any): any;
}

export class APIServiceConstructor<T extends AxiosInstance> extends AbstractAPIService<T> {
  override Get = this.apiClient.get;
  override Post = this.apiClient.post;
  override Put = this.apiClient.put;
  override Delete = this.apiClient.delete;

  public updateRequestGlobalHeaderConfig(header: {[key: string]: AxiosHeaderValue}) {
    const prev = _.cloneDeep(this.apiClient.defaults.headers);
    this.apiClient.defaults.headers = _.merge(prev, header);
  }

  public setDefaultAuthorizationHeader(token: GlobalToken) {
    this.updateRequestGlobalHeaderConfig({
      Authorization: `${this.parseTokenType(token.token_info.token_type)} ${token.token_info.token}`,
    });
  }

  private parseTokenType(tokenType: TokenType): TokenType {
    return tokenType === 'bearer' || tokenType === 'ACCESS' ? 'Bearer' : tokenType;
  }

  public createFormData(datas: {key: string; value: any}[]): FormData {
    const formData = new FormData();

    datas.forEach(item => {
      formData.append(item.key, item.value);
    });
    return formData;
  }

  postForm = this.apiClient.postForm;
}

const API = new APIServiceConstructor(axiosInstance);

export default API;
