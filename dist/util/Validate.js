'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: 'required',

    /**
     * 验证必填元素
     */
    value: function required(value) {
      if (typeof value === 'number') {
        value = value.toString();
      } else if (typeof value === 'boolean') {
        return !0;
      }

      return value && value.length > 0;
    }

    /**
     * 重复验证
     */

  }, {
    key: 'noDuplicate',
    value: function noDuplicate(values) {
      for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < values.length; j++) {
          if (values[i] == values[j] && i != j) {
            return false;
          }
        }
      }
      return true;
    }
    /**
     * 验证电子邮箱格式
     */

  }, {
    key: 'email',
    value: function email(value) {
      return this.optional(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    }
    /**
     * 验证手机格式
     */

  }, {
    key: 'tel',
    value: function tel(value) {
      return this.optional(value) || /^1[34578]\d{9}$/.test(value);
    }
    /**
     * 验证URL格式
     */

  }, {
    key: 'url',
    value: function url(value) {
      return this.optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }
    /**
     * 验证日期格式
     */

  }, {
    key: 'date',
    value: function date(value) {
      return this.optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
    }
    /**
     * 验证ISO类型的日期格式
     */

  }, {
    key: 'dateISO',
    value: function dateISO(value) {
      return this.optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    }
    /**
     * 验证十进制数字
     */

  }, {
    key: 'number',
    value: function number(value) {
      return this.optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    }
    /**
     * 验证整数
     */

  }, {
    key: 'digits',
    value: function digits(value) {
      return this.optional(value) || /^\d+$/.test(value);
    }
    /**
     * 验证身份证号码
     */

  }, {
    key: 'idcard',
    value: function idcard(value) {
      return this.optional(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
    }
    /**
     * 验证两个输入框的内容是否相同
     */

  }, {
    key: 'equalTo',
    value: function equalTo(value, param) {
      return this.optional(value) || value === that.scope.detail.value[param];
    }
    /**
     * 验证是否包含某个值
     */

  }, {
    key: 'contains',
    value: function contains(value, param) {
      return this.optional(value) || value.indexOf(param) >= 0;
    }
    /**
     * 验证最小长度
     */

  }, {
    key: 'minlength',
    value: function minlength(value, param) {
      return this.optional(value) || value.length >= param;
    }
    /**
     * 验证最大长度
     */

  }, {
    key: 'maxlength',
    value: function maxlength(value, param) {
      return this.optional(value) || value.length <= param;
    }
    /**
     * 验证一个长度范围[min, max]
     */

  }, {
    key: 'rangelength',
    value: function rangelength(value, param) {
      return this.optional(value) || value.length >= param[0] && value.length <= param[1];
    }
    /**
     * 验证最小值
     */

  }, {
    key: 'min',
    value: function min(value, param) {
      return this.optional(value) || Number(value) >= Number(param);
    }
    /**
     * 验证最大值
     */

  }, {
    key: 'max',
    value: function max(value, param) {
      return this.optional(value) || Number(value) <= Number(param);
    }

    /**
     * 验证时间
     */

  }, {
    key: 'after',
    value: function after(value, param) {
      return this.optional(value) || value >= param;
    }
    /**
     * 验证时间
     */

  }, {
    key: 'before',
    value: function before(value, param) {
      return this.optional(value) || value <= param;
    }

    /**
     * 验证一个值范围[min, max]
     */

  }, {
    key: 'range',
    value: function range(value, param) {
      return this.optional(value) || value >= param[0] && value <= param[1];
    }
    /**
     * 判断输入值是否为空
     */

  }, {
    key: 'optional',
    value: function optional(value) {
      return !this.required(value) && 'dependency-mismatch';
    }
  }]);

  return Validate;
}();

exports.default = Validate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbIlZhbGlkYXRlIiwidmFsdWUiLCJ0b1N0cmluZyIsImxlbmd0aCIsInZhbHVlcyIsImkiLCJqIiwib3B0aW9uYWwiLCJ0ZXN0IiwiRGF0ZSIsInBhcmFtIiwidGhhdCIsInNjb3BlIiwiZGV0YWlsIiwiaW5kZXhPZiIsIk51bWJlciIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxROzs7Ozs7OztBQUNuQjs7OzZCQUdnQkMsSyxFQUFPO0FBQ3JCLFVBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsZ0JBQVFBLE1BQU1DLFFBQU4sRUFBUjtBQUNELE9BRkQsTUFFTyxJQUFJLE9BQU9ELEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDckMsZUFBTyxDQUFDLENBQVI7QUFDRDs7QUFFRCxhQUFPQSxTQUFTQSxNQUFNRSxNQUFOLEdBQWUsQ0FBL0I7QUFDRDs7QUFFRDs7Ozs7O2dDQUdtQkMsTSxFQUFRO0FBQ3pCLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxPQUFPRCxNQUEzQixFQUFtQ0UsR0FBbkMsRUFBd0M7QUFDdEMsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9ELE1BQTNCLEVBQW1DRyxHQUFuQyxFQUF3QztBQUN0QyxjQUFJRixPQUFPQyxDQUFQLEtBQWFELE9BQU9FLENBQVAsQ0FBYixJQUEwQkQsS0FBS0MsQ0FBbkMsRUFBc0M7QUFDcEMsbUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEO0FBQ0Q7Ozs7OzswQkFHYUwsSyxFQUFPO0FBQ2xCLGFBQU8sS0FBS00sUUFBTCxDQUFjTixLQUFkLEtBQXdCLHdJQUF3SU8sSUFBeEksQ0FBNklQLEtBQTdJLENBQS9CO0FBQ0Q7QUFDRDs7Ozs7O3dCQUdXQSxLLEVBQU87QUFDaEIsYUFBTyxLQUFLTSxRQUFMLENBQWNOLEtBQWQsS0FBd0Isa0JB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QTlEO0FBQ0Q7QUFDRDs7Ozs7OzZCQUdnQlQsSyxFQUFPO0FBQ3JCLGFBQU8sQ0FBQyxLQUFLZSxRQUFMLENBQWNmLEtBQWQsQ0FBRCxJQUF5QixxQkFBaEM7QUFDRDs7Ozs7O2tCQTlJa0JELFEiLCJmaWxlIjoiVmFsaWRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0ZSB7XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B5b+F5aGr5YWD57SgXHJcbiAgICovXHJcbiAgc3RhdGljIHJlcXVpcmVkKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuICEwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmHjeWkjemqjOivgVxyXG4gICAqL1xyXG4gIHN0YXRpYyBub0R1cGxpY2F0ZSh2YWx1ZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlc1tpXSA9PSB2YWx1ZXNbal0gJiYgaSAhPSBqKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B55S15a2Q6YKu566x5qC85byPXHJcbiAgICovXHJcbiAgc3RhdGljIGVtYWlsKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC8udGVzdCh2YWx1ZSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B5omL5py65qC85byPXHJcbiAgICovXHJcbiAgc3RhdGljIHRlbCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IC9eMVszNDU3OF1cXGR7OX0kLy50ZXN0KHZhbHVlKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4FVUkzmoLzlvI9cclxuICAgKi9cclxuICBzdGF0aWMgdXJsKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QodmFsdWUpXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOmqjOivgeaXpeacn+agvOW8j1xyXG4gICAqL1xyXG4gIHN0YXRpYyBkYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+BSVNP57G75Z6L55qE5pel5pyf5qC85byPXHJcbiAgICovXHJcbiAgc3RhdGljIGRhdGVJU08odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCAvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QodmFsdWUpXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOmqjOivgeWNgei/m+WItuaVsOWtl1xyXG4gICAqL1xyXG4gIHN0YXRpYyBudW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HmlbTmlbBcclxuICAgKi9cclxuICBzdGF0aWMgZGlnaXRzKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgL15cXGQrJC8udGVzdCh2YWx1ZSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B6Lqr5Lu96K+B5Y+356CBXHJcbiAgICovXHJcbiAgc3RhdGljIGlkY2FyZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IC9eWzEtOV1cXGR7NX1bMS05XVxcZHszfSgoMFxcZCl8KDFbMC0yXSkpKChbMHwxfDJdXFxkKXwzWzAtMV0pXFxkezN9KFswLTldfFgpJC8udGVzdCh2YWx1ZSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B5Lik5Liq6L6T5YWl5qGG55qE5YaF5a655piv5ZCm55u45ZCMXHJcbiAgICovXHJcbiAgc3RhdGljIGVxdWFsVG8odmFsdWUsIHBhcmFtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPT09IHRoYXQuc2NvcGUuZGV0YWlsLnZhbHVlW3BhcmFtXVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HmmK/lkKbljIXlkKvmn5DkuKrlgLxcclxuICAgKi9cclxuICBzdGF0aWMgY29udGFpbnModmFsdWUsIHBhcmFtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUuaW5kZXhPZihwYXJhbSkgPj0gMFxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HmnIDlsI/plb/luqZcclxuICAgKi9cclxuICBzdGF0aWMgbWlubGVuZ3RoKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+PSBwYXJhbVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HmnIDlpKfplb/luqZcclxuICAgKi9cclxuICBzdGF0aWMgbWF4bGVuZ3RoKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA8PSBwYXJhbVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HkuIDkuKrplb/luqbojIPlm7RbbWluLCBtYXhdXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmdlbGVuZ3RoKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8ICh2YWx1ZS5sZW5ndGggPj0gcGFyYW1bMF0gJiYgdmFsdWUubGVuZ3RoIDw9IHBhcmFtWzFdKVxyXG4gIH1cclxuICAvKipcclxuICAgKiDpqozor4HmnIDlsI/lgLxcclxuICAgKi9cclxuICBzdGF0aWMgbWluKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8IE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHBhcmFtKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog6aqM6K+B5pyA5aSn5YC8XHJcbiAgICovXHJcbiAgc3RhdGljIG1heCh2YWx1ZSwgcGFyYW0pIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsKHZhbHVlKSB8fCBOdW1iZXIodmFsdWUpIDw9IE51bWJlcihwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpqozor4Hml7bpl7RcclxuICAgKi9cclxuICBzdGF0aWMgYWZ0ZXIodmFsdWUsIHBhcmFtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPj0gcGFyYW07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOmqjOivgeaXtumXtFxyXG4gICAqL1xyXG4gIHN0YXRpYyBiZWZvcmUodmFsdWUsIHBhcmFtKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPD0gcGFyYW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpqozor4HkuIDkuKrlgLzojIPlm7RbbWluLCBtYXhdXHJcbiAgICovXHJcbiAgc3RhdGljIHJhbmdlKHZhbHVlLCBwYXJhbSkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwodmFsdWUpIHx8ICh2YWx1ZSA+PSBwYXJhbVswXSAmJiB2YWx1ZSA8PSBwYXJhbVsxXSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5Yik5pat6L6T5YWl5YC85piv5ZCm5Li656m6XHJcbiAgICovXHJcbiAgc3RhdGljIG9wdGlvbmFsKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gIXRoaXMucmVxdWlyZWQodmFsdWUpICYmICdkZXBlbmRlbmN5LW1pc21hdGNoJ1xyXG4gIH1cclxufVxyXG4iXX0=