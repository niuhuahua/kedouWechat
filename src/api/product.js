import base from './base'
import wepy from 'wepy'

export default class product extends base{
    /**
     * 获取商品类别
     */
    static async getGoodsType(parentid="0"){
        const url = `${this.baseUrl}Goods1000/getGoodsType `;
        const param = {"parentid":parentid};
        return await this.get(url,param);
    }
  
}