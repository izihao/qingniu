import request from "@/untils/request";
import type { logintype } from "@/api/type/logintype";
// 登录

export const login = (logintype: logintype) => {
    return request('/user/login', 'post', logintype)
}