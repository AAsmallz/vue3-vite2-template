// 1. 配置axios

// 引入axios模块
import axios from "axios";
// 获取axios的ts类型定义
import type { AxiosInstance } from 'axios'

// const url = import.meta.env.VITE_GLOB_API_URL[1]

// axios请求配置, 创建axios实例
const http: AxiosInstance = axios.create({
  timeout: 50000, // 设置请求最大时长
  withCredentials: true, // 自动携带cookie
  baseURL: import.meta.env.VITE_GLOB_API_URL, // 接口地址
  headers: {
    // 对即将被发送的自定义请求头
    "Content-Type": "application/json;charset=UTF-8",
  },
  validateStatus(status) {
    // 定义对于给定的HTTP 响应状态码是 resolve 或 reject
    return status >= 200 && status < 300;
  },
});

// 请求拦截
http.interceptors.request.use((config: any) => {
  // 头部如需带上token,在此处配置
  const token = localStorage.getItem('token')
  if(token){
    // 如果token存在，就需要在请求头加上 'Bearer ' + token
    // 其中 'Bearer ' 前缀是固定写法，可以看作是一种token规定，不能省略
    config.headers.authorization = 'Bearer ' + token
  }
  return config
}, (err: any) => {
  // 可以安装elementui等ui组件，将错误信息输出到界面。
  console.log(err);
  return Promise.reject(err)
})

// 响应拦截器
http.interceptors.response.use((res) => {
  if(res.status == 200){
    return res.data
  }
}, err => {
  switch (err.response.status) {
    case 401:
      console.log('授权失败，请重新登录')
      break;
  }
});


// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token

// get请求
export function get(url: string, data: any) {
  return http.get(url, data);
}
// post请求
export function post(url: string, data: any) {
  return http.post(url, data);
}
// put请求
export function put(url: string, data: any) {
  return http.put(url, data);
}
// delete 请求
export function del(url: string, data: any) {
  return http.delete(url, data);
}
// upload 请求
export function uploader(url: string, file: any) {
  let params = new FormData();
  params.append("file", file);
  return http.post(url, params);
}

// 用于开发环境 mock axios请求
const mockHttp: AxiosInstance = axios.create({
  timeout: 50000, // 设置请求最大时长
  withCredentials: true, // 自动携带cookie
  baseURL: import.meta.env.VITE_GLOB_API_MOCKURL, // 接口地址
  headers: {
    // 对即将被发送的自定义请求头
    "Content-Type": "application/json;charset=UTF-8",
  },
  validateStatus(status) {
    // 定义对于给定的HTTP 响应状态码是 resolve 或 reject
    return status >= 200 && status < 300;
  },
})

export function mockPost(url: string, data: any){
	return mockHttp.post(url, data);
}
