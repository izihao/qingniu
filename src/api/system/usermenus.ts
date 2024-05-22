import request  from "@/untils/request"

export const usermenus=()=>{
    return request('/user/menus','get')
}