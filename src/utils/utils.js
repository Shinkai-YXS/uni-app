/**
 * 删除数组指定的元素
 * @param {Object} item
 */
Array.prototype.deleteItem = function(item) {
  let index = this.indexOf(item)
  if (index > -1) {
    this.splice(index,1);  
  }
}

let utils = {
  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
  throttle(fn, t = 1000) {
    if (typeof fn !== "function") {
      console.log("in throttle,first argument must be Function");
      return;
    }
    let _fn = fn;
    let time = null;
    let first = true;
    return function() {
      let arg = arguments;
      let _this = this;
      if (first) {
        _fn.apply(_this, arg);
        first = false;
        return;
      }
      if (time) return;
      time = setTimeout(function() {
        setTimeout(time);
        time = null;
        _fn.apply(_this, arg);
      }, t);
    };
  },
  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
  debounce(fn, t = 1000) {
    if (typeof fn !== "function") {
      console.log("in debounce,first argument must be Function");
      return;
    }
    let time;

    return function() {
      const arg = arguments;

      if (time) {
        clearTimeout(time);
        time = null;
        return;
      }
      time = setTimeout(() => {
        fn.apply(this, arg);
        time = null;
      }, t);
    };
  },
  /**
   * 验证电话号码
   * @param {Object} val
   */
  isPhone(val) {
    var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/; //手机号码
    var isMob = /^0?1[3|4|5|7|8][0-9]\d{8}$/; // 座机格式
    if (isMob.test(val) || isPhone.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * @description 时间格式化
   * @param { Data } 时间
   * @param { String } 格式，默认'yyyy-MM-dd hh:mm:ss'
   * @return { String } 格式化后的时间
   */
  dateFormat(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    const o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ?
          o[k] :
          ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  },

  /**
   * 保留几位小数点
   */
  toFixed(text, num) {
    if (!num) num = 2;
    if (!text) return '0';
    text = parseFloat(text);
    if (num == 1 && text == text.toFixed(0)) {
      return text.toFixed(0);
    }
    return text.toFixed(num);
  },
  /**
   * 数组去重
   * @param {Object} array
   */
  dedupe(array) {
    return Array.from(new Set(array));
  },
  /**
   * 判断对象是否为空对象
   * @param {Object} obj
   */
  isEmptyObj(obj) {
    try {
      if (Object.keys(obj).length > 0) {
        return false
      }
      return true
    } catch (e) {
      console.log('请传入一个对象')
    }
  }
};
export default utils;
