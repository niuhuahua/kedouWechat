'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);
  }

  _createClass(Tips, null, [{
    key: 'modal',

    /**
     * 弹出提示框
     */

    // static success(title, duration = 500) {
    //   wx.showToast({
    //     title: title,
    //     icon: 'success',
    //     mask: true,
    //     duration: duration
    //   })
    //   if (duration > 0) {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve();
    //       }, duration);
    //     });
    //   }
    // }

    /**
     * 弹出确认窗口
     */
    value: function modal(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: false,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: '/images/icons/alert.png',
        mask: true,
        duration: 500
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 500);
      });
    }
    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/fail.png',
        mask: true,
        duration: 2000
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 2000);
      }
    }
    /**
     * 成功提示
     */

  }, {
    key: 'success',
    value: function success(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/success.png',
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }
    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isLoading && !force) {
        return;
      }
      this.isLoading = true;
      if (wx.showLoading) {
        wx.showLoading({
          title: title,
          mask: true
        });
      } else {
        wx.showNavigationBarLoading();
      }
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (this.isLoading) {
        this.isLoading = false;
        if (wx.hideLoading) {
          wx.hideLoading();
        } else {
          wx.hideNavigationBarLoading();
        }
      }
    }

    /**
     * 弹出下拉动作栏
     */

  }, {
    key: 'action',
    value: function action() {
      for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: 'actionWithFunc',
    value: function actionWithFunc(items) {
      for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        functions[_key2 - 1] = arguments[_key2];
      }

      wx.showActionSheet({
        itemList: items,
        success: function success(res) {
          var index = res.tapIndex;
          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }, {
    key: 'setLoading',
    value: function setLoading() {
      this.isLoading = true;
    }
  }]);

  return Tips;
}();

Tips.isLoading = false;
Tips.pause = false;
exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsInRleHQiLCJ0aXRsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwicGF5bG9hZCIsImNvbmZpcm0iLCJjYW5jZWwiLCJvbkhpZGUiLCJpY29uIiwic2hvd1RvYXN0IiwibWFzayIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsImltYWdlIiwiZm9yY2UiLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImhpZGVMb2FkaW5nIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwiaXRlbXMiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInJlc3VsdCIsImluZGV4IiwidGFwSW5kZXgiLCJlcnJNc2ciLCJmdW5jdGlvbnMiLCJsZW5ndGgiLCJ1cmwiLCJkZXNjIiwicGF0aCIsInRvYXN0IiwicGF1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0lBR3FCQSxJOzs7Ozs7OztBQUdqQjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OzBCQUdjQyxJLEVBQW9CO0FBQUEsVUFBZEMsS0FBYyx1RUFBTixJQUFNOztBQUNoQyxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYTCxpQkFBT0EsS0FESTtBQUVYTSxtQkFBU1AsSUFGRTtBQUdYUSxzQkFBWSxLQUhEO0FBSVhDLG1CQUFTLHNCQUFPO0FBQ2ROLG9CQUFRTyxHQUFSO0FBQ0QsV0FOVTtBQU9YQyxnQkFBTSxtQkFBTztBQUNYUCxtQkFBT00sR0FBUDtBQUNEO0FBVFUsU0FBYjtBQVdE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SSxDQUNWd0IsUyxHQUFZLEs7QUFERnhCLEksQ0FFVjBDLEssR0FBUSxLO2tCQUZFMUMsSSIsImZpbGUiOiJUaXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaPkOekuuS4juWKoOi9veW3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwcyB7XHJcbiAgICBzdGF0aWMgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcGF1c2UgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65o+Q56S65qGGXHJcbiAgICAgKi9cclxuICBcclxuICAgIC8vIHN0YXRpYyBzdWNjZXNzKHRpdGxlLCBkdXJhdGlvbiA9IDUwMCkge1xyXG4gICAgLy8gICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgLy8gICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIC8vICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAvLyAgICAgbWFzazogdHJ1ZSxcclxuICAgIC8vICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgaWYgKGR1cmF0aW9uID4gMCkge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgLy8gICAgICAgfSwgZHVyYXRpb24pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOW8ueWHuuehruiupOeql+WPo1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbW9kYWwgKHRleHQsIHRpdGxlID0gJ+aPkOekuicpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgY29udGVudDogdGV4dCxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICog5by55Ye656Gu6K6k56qX5Y+jXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb25maXJtICh0ZXh0LCBwYXlsb2FkID0ge30sIHRpdGxlID0gJ+aPkOekuicpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgY29udGVudDogdGV4dCxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgIHJlamVjdChwYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHBheWxvYWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyB0b2FzdCAodGl0bGUsIG9uSGlkZSwgaWNvbiA9ICdzdWNjZXNzJykge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBpY29uOiBpY29uLFxyXG4gICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICB9KVxyXG4gICAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcclxuICAgICAgaWYgKG9uSGlkZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgb25IaWRlKClcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5qGGXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhbGVydCAodGl0bGUpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb25zL2FsZXJ0LnBuZycsXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/moYZcclxuICAgICAqL1xyXG4gIFxyXG4gICAgc3RhdGljIGVycm9yICh0aXRsZSwgb25IaWRlKSB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9mYWlsLnBuZycsXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KTtcclxuICAgICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICAgIGlmIChvbkhpZGUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG9uSGlkZSgpXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmiJDlip/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN1Y2Nlc3MgKHRpdGxlLCBvbkhpZGUpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1Y2Nlc3MucG5nJyxcclxuICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xyXG4gICAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBvbkhpZGUoKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvLnlh7rliqDovb3mj5DnpLpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWRpbmcgKHRpdGxlID0gJ+WKoOi9veS4rScsIGZvcmNlID0gZmFsc2UpIHtcclxuICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nICYmICFmb3JjZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICh3eC5zaG93TG9hZGluZykge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrozmr5VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWRlZCAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHd4LmhpZGVMb2FkaW5nKSB7XHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65LiL5ouJ5Yqo5L2c5qCPXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhY3Rpb24gKC4uLml0ZW1zKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgIGl0ZW1MaXN0OiBpdGVtcyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIGluZGV4OiByZXMudGFwSW5kZXgsXHJcbiAgICAgICAgICAgICAgdGV4dDogaXRlbXNbcmVzLnRhcEluZGV4XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBhY3Rpb25XaXRoRnVuYyAoaXRlbXMsIC4uLmZ1bmN0aW9ucykge1xyXG4gICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgIGl0ZW1MaXN0OiBpdGVtcyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJlcy50YXBJbmRleFxyXG4gICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uc1tpbmRleF0oKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBzaGFyZSAodGl0bGUsIHVybCwgZGVzYykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBwYXRoOiB1cmwsXHJcbiAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBUaXBzLnRvYXN0KCfliIbkuqvmiJDlip8nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIHNldExvYWRpbmcgKCkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ==