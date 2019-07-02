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
var trainerId = "";

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
trainerId = Request.trainerId;
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
    url: 'trainers/queryById',
    data: {
        userId:'10000',
        trainerId:'10599',
        language: 1
    }
}
var list_back = {}
list_back.success = function (res) {
    //显示详情
    res.contentShow = true
    res.queryMark = queryMark
    res.queryNav = [{
        name: '简介',
        style: selectStyle,
        comment: res.comments,
        isShow: true
    }, {
        name: '课程',
        style: noStyle,
        isShow: false,
        programs: res.programs.length ? res.programs : false
    }, {
        name: '动态',
        style: noStyle,
        isShow: false,
        comment: '暂无动态',

    }]
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
    var list_options = {
        type: 'get',
        url: 'trainers/queryMark',
        data: {
            userId:10000,
            trainerId:10599
        }
    }
    var list_back = {}
    list_back.success = function (e) {
        queryMark = e.markList.split(',');
    }
    list_back.before = function () { }
    sendAjax(list_options, list_back)
}
sendAjax(list_options, list_back)



//js -->
// var list_options = {
// 	type: 'get',
// 	url: 'sociality/queryArticleByTrainerId',
// 	data: {
//         trainerId:10599,
//         language:1,
//         pageNumber:1,
//         pageSize:999
// 	}
// }
// var list_back = {}
// list_back.success = function (e) {
// 	console.log(e)
// }
// list_back.before = function () {}
// console.log(list_options)
// sendAjax(list_options,list_back)

