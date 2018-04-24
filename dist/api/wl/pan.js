'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base2 = require('./../base.js');

var _base3 = _interopRequireDefault(_base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var panDian = function (_base) {
    _inherits(panDian, _base);

    function panDian() {
        _classCallCheck(this, panDian);

        return _possibleConstructorReturn(this, (panDian.__proto__ || Object.getPrototypeOf(panDian)).apply(this, arguments));
    }

    _createClass(panDian, null, [{
        key: 'getInveCount',

        /**
         * 盘点人员是否拥有盘点单
         */
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/user_inventory_runcount';
                                param = {};

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context.abrupt('return', this.get(url, param));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInveCount() {
                return _ref.apply(this, arguments);
            }

            return getInveCount;
        }()
        /**
         * 获取区库列表
         */

    }, {
        key: 'getAreaList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/City/area_storage_lists';
                                param = {};

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context2.abrupt('return', this.get(url, param));

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAreaList() {
                return _ref2.apply(this, arguments);
            }

            return getAreaList;
        }()
        /**
         * 镇村列表获取
         */

    }, {
        key: 'getCityList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/City/tv_storage_lists';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context3.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getCityList(_x) {
                return _ref3.apply(this, arguments);
            }

            return getCityList;
        }()
        /**
         * 获取库位信息
         */

    }, {
        key: 'getStorageLocation',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/select_storage_location';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context4.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getStorageLocation(_x2) {
                return _ref4.apply(this, arguments);
            }

            return getStorageLocation;
        }()

        /**
         * 开始盘点
         */

    }, {
        key: 'getPanStart',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/inventory_begin';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context5.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getPanStart(_x3) {
                return _ref5.apply(this, arguments);
            }

            return getPanStart;
        }()
        /**
         * 是否为首次盘点
         */

    }, {
        key: 'isFirstInven',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/is_first_inventory';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context6.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function isFirstInven(_x4) {
                return _ref6.apply(this, arguments);
            }

            return isFirstInven;
        }()
        /**
         * 扫码 输入商品编码
         */

    }, {
        key: 'getScanGoods',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/scan_goods_info';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context7.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function getScanGoods(_x5) {
                return _ref7.apply(this, arguments);
            }

            return getScanGoods;
        }()
        /**
         * 确认库存
         */

    }, {
        key: 'setInvenProd',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/ins_settlement';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context8.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function setInvenProd(_x6) {
                return _ref8.apply(this, arguments);
            }

            return setInvenProd;
        }()

        /**
         * 盘点结算列表
         */

    }, {
        key: 'getInvenSetList',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/settlement_lists';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context9.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function getInvenSetList(_x7) {
                return _ref9.apply(this, arguments);
            }

            return getInvenSetList;
        }()

        /**
         * 结束盘点
         */

    }, {
        key: 'getInvenEnd',
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/inventory_end';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context10.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));

            function getInvenEnd(_x8) {
                return _ref10.apply(this, arguments);
            }

            return getInvenEnd;
        }()
        /**
         * 修改数量列表
         */

    }, {
        key: 'getCgNumReson',
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/settlement_update_answer';
                                param = {};

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context11.abrupt('return', this.get(url, param));

                            case 5:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function getCgNumReson() {
                return _ref11.apply(this, arguments);
            }

            return getCgNumReson;
        }()

        /**
         * 盘点记录
         */

    }, {
        key: 'getInvenLogs',
        value: function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/inventory_logs';
                                param = {};

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context12.abrupt('return', this.get(url, param));

                            case 5:
                            case 'end':
                                return _context12.stop();
                        }
                    }
                }, _callee12, this);
            }));

            function getInvenLogs() {
                return _ref12.apply(this, arguments);
            }

            return getInvenLogs;
        }()
        /**
         * 盘点结算单修改数量
         */

    }, {
        key: 'getInvenUpdNum',
        value: function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/settlement_update_nums';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context13.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, this);
            }));

            function getInvenUpdNum(_x9) {
                return _ref13.apply(this, arguments);
            }

            return getInvenUpdNum;
        }()
        /**
         * 盘点结算单提交
         */

    }, {
        key: 'getInvetSubmit',
        value: function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/settlement_submit';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context14.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context14.stop();
                        }
                    }
                }, _callee14, this);
            }));

            function getInvetSubmit(_x10) {
                return _ref14.apply(this, arguments);
            }

            return getInvetSubmit;
        }()

        /**
         * 盘点结算数量
         */

    }, {
        key: 'getInvenNum',
        value: function () {
            var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/Inventory/settlement_count';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context15.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context15.stop();
                        }
                    }
                }, _callee15, this);
            }));

            function getInvenNum(_x11) {
                return _ref15.apply(this, arguments);
            }

            return getInvenNum;
        }()
        /**
         * 配送单数量
         */

    }, {
        key: 'getAllocationCount',
        value: function () {
            var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                        switch (_context16.prev = _context16.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/AllocationOrder/get_allocation_count';
                                param = {};

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context16.abrupt('return', this.get(url, param));

                            case 5:
                            case 'end':
                                return _context16.stop();
                        }
                    }
                }, _callee16, this);
            }));

            function getAllocationCount() {
                return _ref16.apply(this, arguments);
            }

            return getAllocationCount;
        }()
        /**
         * 调拨单列表
         */

    }, {
        key: 'getAllocationOrderList',
        value: function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                        switch (_context17.prev = _context17.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/AllocationOrder/get_allocation_order_list';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context17.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context17.stop();
                        }
                    }
                }, _callee17, this);
            }));

            function getAllocationOrderList(_x12) {
                return _ref17.apply(this, arguments);
            }

            return getAllocationOrderList;
        }()

        /**
         * 物流人员获取仓库
         */

    }, {
        key: 'getWareList',
        value: function () {
            var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(param) {
                var url;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) {
                        switch (_context18.prev = _context18.next) {
                            case 0:
                                url = this.baseUrl + 'apiwl/AllocationOrder/get_warehouse_list';

                                this.setDeviceid(param);
                                this.setToken(param);
                                return _context18.abrupt('return', this.get(url, param));

                            case 4:
                            case 'end':
                                return _context18.stop();
                        }
                    }
                }, _callee18, this);
            }));

            function getWareList(_x13) {
                return _ref18.apply(this, arguments);
            }

            return getWareList;
        }()
    }]);

    return panDian;
}(_base3.default);

exports.default = panDian;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbi5qcyJdLCJuYW1lcyI6WyJwYW5EaWFuIiwidXJsIiwiYmFzZVVybCIsInBhcmFtIiwic2V0RGV2aWNlaWQiLCJzZXRUb2tlbiIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7Ozs7OztBQUlVQyxtQyxHQUFTLEtBQUtDLE87QUFDZEMscUMsR0FBUSxFOztBQUNkLHFDQUFLQyxXQUFMLENBQWlCRCxLQUFqQjtBQUNBLHFDQUFLRSxRQUFMLENBQWNGLEtBQWQ7aUVBQ08sS0FBS0csR0FBTCxDQUFTTCxHQUFULEVBQWFFLEtBQWIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUViOzs7Ozs7Ozs7Ozs7O0FBSVVGLG1DLEdBQVMsS0FBS0MsTztBQUNkQyxxQyxHQUFRLEU7O0FBQ2QscUNBQUtDLFdBQUwsQ0FBaUJELEtBQWpCO0FBQ0EscUNBQUtFLFFBQUwsQ0FBY0YsS0FBZDtrRUFDTyxLQUFLRyxHQUFMLENBQVNMLEdBQVQsRUFBYUUsS0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRVg7Ozs7Ozs7a0dBR3lCQSxLOzs7Ozs7QUFDakJGLG1DLEdBQVMsS0FBS0MsTzs7QUFDcEIscUNBQUtFLFdBQUwsQ0FBaUJELEtBQWpCO0FBQ0EscUNBQUtFLFFBQUwsQ0FBY0YsS0FBZDtrRUFDTyxLQUFLRyxHQUFMLENBQVNMLEdBQVQsRUFBYUUsS0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRVg7Ozs7Ozs7a0dBR2dDQSxLOzs7Ozs7QUFDdEJGLG1DLEdBQVMsS0FBS0MsTzs7QUFDcEIscUNBQUtFLFdBQUwsQ0FBaUJELEtBQWpCO0FBQ0EscUNBQUtFLFFBQUwsQ0FBY0YsS0FBZDtrRUFDTyxLQUFLRyxHQUFMLENBQVNMLEdBQVQsRUFBYUUsS0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7O2tHQUl5QkEsSzs7Ozs7O0FBQ2ZGLG1DLEdBQVMsS0FBS0MsTzs7QUFDcEIs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QUFTLEtBQUtDLE87QUFDaEJDLHFDLEdBQVEsRTs7QUFDWixxQ0FBS0MsV0FBTCxDQUFpQkQsS0FBakI7QUFDQSxxQ0FBS0UsUUFBTCxDQUFjRixLQUFkO21FQUNPLEtBQUtHLEdBQUwsQ0FBU0wsR0FBVCxFQUFhRSxLQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWDs7Ozs7OztvR0FJb0NBLEs7Ozs7OztBQUMxQkYsbUMsR0FBUyxLQUFLQyxPOztBQUNwQixxQ0FBS0UsV0FBTCxDQUFpQkQsS0FBakI7QUFDQSxxQ0FBS0UsUUFBTCxDQUFjRixLQUFkO21FQUNPLEtBQUtHLEdBQUwsQ0FBU0wsR0FBVCxFQUFhRSxLQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1g7Ozs7Ozs7b0dBR3lCQSxLOzs7Ozs7QUFDZkYsbUMsR0FBUyxLQUFLQyxPOztBQUNwQixxQ0FBS0UsV0FBTCxDQUFpQkQsS0FBakI7QUFDQSxxQ0FBS0UsUUFBTCxDQUFjRixLQUFkO21FQUNPLEtBQUtHLEdBQUwsQ0FBU0wsR0FBVCxFQUFhRSxLQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFsTFVILE8iLCJmaWxlIjoicGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBiYXNlIGZyb20gICcuLi9iYXNlJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwYW5EaWFuIGV4dGVuZHMgYmFzZXtcclxuICAgIC8qKlxyXG4gICAgICog55uY54K55Lq65ZGY5piv5ZCm5oul5pyJ55uY54K55Y2VXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbnZlQ291bnQoKXtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvSW52ZW50b3J5L3VzZXJfaW52ZW50b3J5X3J1bmNvdW50YFxyXG4gICAgICAgIGNvbnN0IHBhcmFtID0ge307XHJcbiAgICAgICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSkgXHJcbiAgICAgICAgdGhpcy5zZXRUb2tlbihwYXJhbSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbiAgICB9XHJcbiAgLyoqXHJcbiAgICog6I635Y+W5Yy65bqT5YiX6KGoXHJcbiAgICovXHJcbiAgc3RhdGljIGFzeW5jIGdldEFyZWFMaXN0KCl7XHJcbiAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9DaXR5L2FyZWFfc3RvcmFnZV9saXN0c2BcclxuICAgICAgY29uc3QgcGFyYW0gPSB7fTtcclxuICAgICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICAgIHRoaXMuc2V0VG9rZW4ocGFyYW0pXHJcbiAgICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDplYfmnZHliJfooajojrflj5ZcclxuICAgKi9cclxuICBzdGF0aWMgYXN5bmMgZ2V0Q2l0eUxpc3QocGFyYW0pe1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFwaXdsL0NpdHkvdHZfc3RvcmFnZV9saXN0c2BcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcbi8qKlxyXG4gKiDojrflj5blupPkvY3kv6Hmga9cclxuICovXHJcbnN0YXRpYyBhc3luYyBnZXRTdG9yYWdlTG9jYXRpb24ocGFyYW0pe1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFwaXdsL0ludmVudG9yeS9zZWxlY3Rfc3RvcmFnZV9sb2NhdGlvbmBcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcblxyXG4vKipcclxuICog5byA5aeL55uY54K5XHJcbiAqL1xyXG5cclxuc3RhdGljIGFzeW5jIGdldFBhblN0YXJ0KHBhcmFtKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9JbnZlbnRvcnkvaW52ZW50b3J5X2JlZ2luYFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuLyoqXHJcbiAqIOaYr+WQpuS4uummluasoeebmOeCuVxyXG4gKi9cclxuc3RhdGljIGFzeW5jIGlzRmlyc3RJbnZlbihwYXJhbSl7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvSW52ZW50b3J5L2lzX2ZpcnN0X2ludmVudG9yeWBcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcbi8qKlxyXG4gKiDmiavnoIEg6L6T5YWl5ZWG5ZOB57yW56CBXHJcbiAqL1xyXG5zdGF0aWMgYXN5bmMgZ2V0U2Nhbkdvb2RzKHBhcmFtKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9JbnZlbnRvcnkvc2Nhbl9nb29kc19pbmZvYFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuLyoqXHJcbiAqIOehruiupOW6k+WtmFxyXG4gKi9cclxuc3RhdGljIGFzeW5jIHNldEludmVuUHJvZChwYXJhbSl7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvSW52ZW50b3J5L2luc19zZXR0bGVtZW50YFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuICBcclxuXHJcblxyXG4vKipcclxuICog55uY54K557uT566X5YiX6KGoXHJcbiAqL1xyXG5zdGF0aWMgYXN5bmMgZ2V0SW52ZW5TZXRMaXN0KHBhcmFtKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9JbnZlbnRvcnkvc2V0dGxlbWVudF9saXN0c2BcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcblxyXG4vKipcclxuICog57uT5p2f55uY54K5XHJcbiAqL1xyXG5zdGF0aWMgYXN5bmMgZ2V0SW52ZW5FbmQocGFyYW0pe1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFwaXdsL0ludmVudG9yeS9pbnZlbnRvcnlfZW5kYFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuLyoqXHJcbiAqIOS/ruaUueaVsOmHj+WIl+ihqFxyXG4gKi9cclxuXHJcbnN0YXRpYyBhc3luYyBnZXRDZ051bVJlc29uKCl7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvSW52ZW50b3J5L3NldHRsZW1lbnRfdXBkYXRlX2Fuc3dlcmBcclxuICAgIGxldCBwYXJhbSA9IHt9O1xyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnm5jngrnorrDlvZVcclxuICovXHJcblxyXG5zdGF0aWMgYXN5bmMgZ2V0SW52ZW5Mb2dzKCl7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvSW52ZW50b3J5L2ludmVudG9yeV9sb2dzYFxyXG4gICAgbGV0IHBhcmFtID0ge307XHJcbiAgICB0aGlzLnNldERldmljZWlkKHBhcmFtKTtcclxuICAgIHRoaXMuc2V0VG9rZW4ocGFyYW0pXHJcbiAgICByZXR1cm4gdGhpcy5nZXQodXJsLHBhcmFtKTtcclxufVxyXG4vKipcclxuICog55uY54K557uT566X5Y2V5L+u5pS55pWw6YePXHJcbiAqL1xyXG5zdGF0aWMgYXN5bmMgZ2V0SW52ZW5VcGROdW0ocGFyYW0pe1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFwaXdsL0ludmVudG9yeS9zZXR0bGVtZW50X3VwZGF0ZV9udW1zYFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuLyoqXHJcbiAqIOebmOeCuee7k+eul+WNleaPkOS6pFxyXG4gKi9cclxuc3RhdGljIGFzeW5jIGdldEludmV0U3VibWl0KHBhcmFtKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9JbnZlbnRvcnkvc2V0dGxlbWVudF9zdWJtaXRgXHJcbiAgICB0aGlzLnNldERldmljZWlkKHBhcmFtKTtcclxuICAgIHRoaXMuc2V0VG9rZW4ocGFyYW0pXHJcbiAgICByZXR1cm4gdGhpcy5nZXQodXJsLHBhcmFtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOebmOeCuee7k+eul+aVsOmHj1xyXG4gKi9cclxuc3RhdGljIGFzeW5jIGdldEludmVuTnVtKHBhcmFtKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9JbnZlbnRvcnkvc2V0dGxlbWVudF9jb3VudGBcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcbi8qKlxyXG4gKiDphY3pgIHljZXmlbDph49cclxuICovXHJcbnN0YXRpYyBhc3luYyBnZXRBbGxvY2F0aW9uQ291bnQoKXtcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1hcGl3bC9BbGxvY2F0aW9uT3JkZXIvZ2V0X2FsbG9jYXRpb25fY291bnRgXHJcbiAgICBsZXQgcGFyYW0gPSB7IH07XHJcbiAgICB0aGlzLnNldERldmljZWlkKHBhcmFtKTtcclxuICAgIHRoaXMuc2V0VG9rZW4ocGFyYW0pXHJcbiAgICByZXR1cm4gdGhpcy5nZXQodXJsLHBhcmFtKTtcclxufVxyXG4vKipcclxuICog6LCD5ouo5Y2V5YiX6KGoXHJcbiAqL1xyXG5cclxuc3RhdGljIGFzeW5jIGdldEFsbG9jYXRpb25PcmRlckxpc3QocGFyYW0pe1xyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFwaXdsL0FsbG9jYXRpb25PcmRlci9nZXRfYWxsb2NhdGlvbl9vcmRlcl9saXN0YFxyXG4gICAgdGhpcy5zZXREZXZpY2VpZChwYXJhbSk7XHJcbiAgICB0aGlzLnNldFRva2VuKHBhcmFtKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnianmtYHkurrlkZjojrflj5bku5PlupNcclxuICovXHJcbnN0YXRpYyBhc3luYyBnZXRXYXJlTGlzdChwYXJhbSl7XHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvQWxsb2NhdGlvbk9yZGVyL2dldF93YXJlaG91c2VfbGlzdGBcclxuICAgIHRoaXMuc2V0RGV2aWNlaWQocGFyYW0pO1xyXG4gICAgdGhpcy5zZXRUb2tlbihwYXJhbSlcclxuICAgIHJldHVybiB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG59XHJcblxyXG5cclxuXHJcbn0iXX0=