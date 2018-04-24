import wepy from 'wepy'
import Tips from './Tips';
const app = getApp();

// HTTP工具类
export default class http {
  static async request (method, url, data) {
    let baseData = {'Tadpole':{"Tadpole":{"Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": { }}} };
    Object.assign(baseData['Tadpole']["Tadpole"]["Body"],data)
 
    const param = {
      url: url,
      method: method,
      data: baseData
    };
    Tips.loading();
    const res = await wepy.request(param);
    if (this.isSuccess(res)) {
      if(res.data.Tadpole.Head.code=="E0020"){
        wx.navigateTo({
          url: 'login',
          success: function(res){
           wx.removeStorageSync('user')
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })  
     }
      return res.data.Tadpole;

    } else {
      console.error(method, url, data, res);
      throw this.requestException(res);
    }
  }
  static async requestTwo (method, url, data) {
    let baseData = {'Tadpole':{"Tadpole":{"Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": { }}} };
    Object.assign(baseData['Tadpole']["Tadpole"]["Body"],data)
 
    const param = {
      url: url,
      method: method,
      data: baseData
    };
    Tips.loading();
    const res = await wepy.request(param);
    if (this.isSuccess(res)) {
      return res;
    } else {
      console.error(method, url, data, res);
      throw this.requestException(res);
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if (wxCode !== 200) {
      return false;
    }
    const wxData = res.data;
    return wxData;
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    error.statusCode = res.statusCode;
    const wxData = res.data;
    const serverData = wxData.data;
    if (serverData) {
      error.serverCode = wxData.code;
      error.message = serverData.message;
      error.serverData = serverData;
    }
   
    return error;
  }

  static get (url, data) {
    return this.request('GET', url, data)
  }
  static getTwo (url, data) {
    return this.requestTwo('GET', url, data)
  }

  static put (url, data) {
    return this.request('PUT', url, data)
  }

  static post (url, data) {
    return this.request('POST', url, data)
  }

  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
