import {extend} from 'umi-request'
import {message} from "@@/plugin-request/ui";
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials:'include'
});

/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if (res.code === 40001 || res.code === 40000){
    message.error(res.description)
  }
  return  res.data;

});
export default request


