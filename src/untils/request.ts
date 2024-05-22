import axios, { type AxiosInstance, type AxiosRequestConfig, type Method } from 'axios'

import { useCounterStore } from '@/stores/counter'

export const serve: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
})
// 添加请求拦截器
serve.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const store = useCounterStore()
    const token = store.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
serve.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

const request = <T = any>(
    url: string,
    method: Method,
    data?: T,
    options?: AxiosRequestConfig
) => {
    return serve.request<T, any>({
        url,
        method,
        [method == 'get' ? 'params' : 'data']: data,
        ...options
    })
}

export const get = <T = any>(url: string, params?: T) => {
    return request<T>(url, 'get', params)
}
export const post = <T = any>(url: string, params?: T) => {
    return request<T>(url, 'post', params)
}
export const put = <T = any>(url: string, params?: T) => {
    return request<T>(url, 'put', params)
}
export const del = <T = any>(url: string, params?: T) => {
    return request<T>(url, 'delete', params)
}

export default request