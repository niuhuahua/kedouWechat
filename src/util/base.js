import wepy from 'wepy';
import http from '../util/Http'

export default class base {
  // static baseUrl = wepy.$instance.globalData.baseUrl;
  static baseUrl = '';
  static get = http.get.bind(http);
  static getTwo = http.getTwo.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
