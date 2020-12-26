import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://comorbidity.comp-sysbio.org/api'
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code != 1 && response.data.code != 501) {
        return Promise.reject("error code 0");
    }
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axiosInstance;
