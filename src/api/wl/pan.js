import wepy from 'wepy';
import base from  '../base'
export default class panDian extends base{
    /**
     * 盘点人员是否拥有盘点单
     */
    static async getInveCount(){
        const url = `${this.baseUrl}apiwl/Inventory/user_inventory_runcount`
        const param = {};
        this.setDeviceid(param) 
        this.setToken(param);
        return this.get(url,param);
    }
  /**
   * 获取区库列表
   */
  static async getAreaList(){
      const url = `${this.baseUrl}apiwl/City/area_storage_lists`
      const param = {};
      this.setDeviceid(param);
      this.setToken(param)
      return this.get(url,param);
  }
  /**
   * 镇村列表获取
   */
  static async getCityList(param){
    const url = `${this.baseUrl}apiwl/City/tv_storage_lists`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 获取库位信息
 */
static async getStorageLocation(param){
    const url = `${this.baseUrl}apiwl/Inventory/select_storage_location`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}

/**
 * 开始盘点
 */

static async getPanStart(param){
    const url = `${this.baseUrl}apiwl/Inventory/inventory_begin`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 是否为首次盘点
 */
static async isFirstInven(param){
    const url = `${this.baseUrl}apiwl/Inventory/is_first_inventory`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 扫码 输入商品编码
 */
static async getScanGoods(param){
    const url = `${this.baseUrl}apiwl/Inventory/scan_goods_info`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 确认库存
 */
static async setInvenProd(param){
    const url = `${this.baseUrl}apiwl/Inventory/ins_settlement`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
  


/**
 * 盘点结算列表
 */
static async getInvenSetList(param){
    const url = `${this.baseUrl}apiwl/Inventory/settlement_lists`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}

/**
 * 结束盘点
 */
static async getInvenEnd(param){
    const url = `${this.baseUrl}apiwl/Inventory/inventory_end`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 修改数量列表
 */

static async getCgNumReson(){
    const url = `${this.baseUrl}apiwl/Inventory/settlement_update_answer`
    let param = {};
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}

/**
 * 盘点记录
 */

static async getInvenLogs(){
    const url = `${this.baseUrl}apiwl/Inventory/inventory_logs`
    let param = {};
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 盘点结算单修改数量
 */
static async getInvenUpdNum(param){
    const url = `${this.baseUrl}apiwl/Inventory/settlement_update_nums`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 盘点结算单提交
 */
static async getInvetSubmit(param){
    const url = `${this.baseUrl}apiwl/Inventory/settlement_submit`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}

/**
 * 盘点结算数量
 */
static async getInvenNum(param){
    const url = `${this.baseUrl}apiwl/Inventory/settlement_count`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 配送单数量
 */
static async getAllocationCount(){
    const url = `${this.baseUrl}apiwl/AllocationOrder/get_allocation_count`
    let param = { };
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}
/**
 * 调拨单列表
 */

static async getAllocationOrderList(param){
    const url = `${this.baseUrl}apiwl/AllocationOrder/get_allocation_order_list`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}

/**
 * 物流人员获取仓库
 */
static async getWareList(param){
    const url = `${this.baseUrl}apiwl/AllocationOrder/get_warehouse_list`
    this.setDeviceid(param);
    this.setToken(param)
    return this.get(url,param);
}



}