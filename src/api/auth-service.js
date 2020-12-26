import axiosInstance from './index';
const baseURL = '/api/auth';
export function login(data) {
    return new axiosInstance({
        url: `${baseURL}/login`,
        method: 'post',
        data: data
    })
}
export function logout() {
    return new axiosInstance({
        url: `${baseURL}/logout`,
        method: 'post',
    })
}