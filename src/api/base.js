import wepy from 'wepy';
import http from '../util/Http'

export default class base {
  static baseUrl = wepy.$instance.globalData.baseUrl;
  static get = http.get.bind(http);
  static getTwo = http.getTwo.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
  /**
     * 需要token
     */
    static setToken(param){
      if(wepy.getStorageSync("user")){
          Object.assign(param,{'token':''})
          param.token = JSON.parse(wepy.getStorageSync("user")).token;
      }else{
          console.log("获取用户token失败")
          return false;
      }
  }
  static setDeviceid(param){
      if(wx.getStorageSync("openid")){
        Object.assign(param,{'deviceid':''});
        param.deviceid = wx.getStorageSync("openid");
      }else{
        console.log("获取用户唯一设备id失败")
        return false;
      }
  }
 
  
}
