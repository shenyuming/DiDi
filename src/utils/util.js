const util = {
    // 将时间戳转化为xxxx-xx-xx xx:xx:xx的时间格式
    timeToDate: function (timestamp) {
        var date = getDate(parseInt(timestamp));// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
      },
    // 将xxxx-xx-xx xx:xx:xx 的时间格式转为时间戳
    timeFormate: function (dateString) {
        if (dateString != '') {
            var gg = getRegExp("-", "g");
            var str = dateString.replace(gg, '/');
            var date = getDate(str);
            return date.getTime();
        } else {
            console.log('格式转换失败');
            return '';
        }
    },
   /*
  * 获取url参数
  * @param {String} name 参数名
  * @return {String}
  * */
  getURLParam(name) {
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
        if(reg.test(window.location.href)){
            return unescape(RegExp.$2.replace(/\+/g," "))
        }
        return undefined
  },
    checkparams:function(rule, arr) {
    var checked = true;
    // arr.forEach((item, index) => {
    for (var i = 0; i < arr.length; i++) {
      var value = rule[arr[i]];
      //必填校验
      if (value.requireTip != null) {
        if (value.value == null || value.value.length == 0) {
          Vue.$toast({ message: value.requireTip });
          checked = false;
          break;
        }
      }
      //正则校验
      if (value.regular != null) {
        if (!value.regular.test(value.value)) {
          Vue.$toast({ message: value.regularTip });
          checked = false;
          break;
        }

      }

    }
    return checked;
  }

}
export default util