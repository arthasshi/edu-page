import axios from 'axios';
import Bus from './bus';
// import store from '../store';
const fetch = axios.create({
  // baseURL: '',
  timeout: 20000,
  withCredentials: true
});

// 请求拦截器
fetch.interceptors.request.use(config => {
  if (localStorage.accessToken) {
    config.headers.common['accessToken'] = localStorage.accessToken;
  }
  return config;
}, erro => Promise.reject(erro));
// 响应拦截器
fetch.interceptors.response.use((response) => {
  const { status, data } = response;
  // 只返回code为1时的数据，其他状态不返回
  if (status === 200 && data.code === 1) {
    return data;
  }
  Bus.$emit('_Error', data.msg);
  return Promise.reject(data);
}, (error) => {
  const res = error.response;
  if (res.status === 401) {
    const msg = res.data.msg || '请重新登录';
    Bus.$emit('_Unauth', msg);
  }
  return Promise.reject(error);
});

export default fetch;
