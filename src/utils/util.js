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
}