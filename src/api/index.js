import ajax from "./ajax";

//登录

export const  reqLogin = (data) =>ajax('login','post',data)


