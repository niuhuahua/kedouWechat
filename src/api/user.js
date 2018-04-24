import base from './base'
import wepy from 'wepy'

export default class user extends base{
    /**
     * 登录
     */
    
    static async toLogin(userInfo){
        const url = `${this.baseUrl}/user1000/user_login`
        const param = {
            user_mobile:userInfo.user_mobile,
            user_pass:userInfo.user_pass
        };
        return await this.get(url,param);
    }
  
    static async getUserInfo(){
        const url = `${this.baseUrl}/user1000/user_get`
        const param = { }
        this.setToken(param);
        return await this.get(url,param);
    }

   
    
}