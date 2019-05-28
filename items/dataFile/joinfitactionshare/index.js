(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var userId = "";
var exerciseId = "";

function UrlSearch() {
    var name, value;
    var str = location.href;

    var num = str.indexOf("?")
    str = str.substr(num + 1);

    var arr = str.split("&");
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
var Request = new UrlSearch(); //实例化
userId = Request.userId;
exerciseId = Request.exerciseId;
var queryMark = []
var selectStyle = {
    'color': '#C6D204',
    'font-size': '0.64rem',
    'border-bottom': '3px solid #c6d204'
}
var noStyle = {
    'color': '#4a4a4a',
    'font-size': '0.64rem'
}
var list_options = {
    type: 'get',
    url: 'exercises/queryById',
    data: {
        userId,
        exerciseId,
        language: 1
    }
}
var list_back = {}
list_back.success = function (res) {
    res.contentShow = true
    new Vue({
        el: '#content',
        data: res,
        methods: {
            nav: function (item, index) {
                var that = this
                // console.log(item, index)
                var queryList = item
                for (let i in queryList) {
                    if (i == index) {
                        queryList[i].isShow = true
                        queryList[i].style = selectStyle
                    } else {
                        queryList[i].isShow = false
                        queryList[i].style = noStyle
                    }
                }
                that.queryNav = queryList
            }
        }
    })
}
list_back.before = function () {
}
sendAjax(list_options, list_back)






