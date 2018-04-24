import wepy from 'wepy';
import base from  '../base'
export default  class userWl extends base{
  /**
   * 登录
   */
  static async userLogin(userInfo){
    const url =`${this.baseUrl}apiwl/userwl/user_login`
    const param = {
        user_mobile:userInfo.user_name,
        user_pass:userInfo.user_pass,
        // user_type:"1",
        user_type:"2",
        is_auto:'2'
    }
    this.setDeviceid(param) 
    return await this.get(url,param); 
  }
  /**
   * 修改密码
   */
  static async changePwd(params){
   const url = `${this.baseUrl}apiwl/userwl/password_save`;
   this.setDeviceid(params);
   this.setToken(params);
   return await this.get(url,params);
  }
/**
 * 用户退出
 */
 static async toLoginOut(){
 const url = `${this.baseUrl}apiwl/userwl/user_logout`;
 const param = {};
 this.setDeviceid(param);
 this.setToken(param);
 return await this.get(url,param);
 }










}