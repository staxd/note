var localUrl =""
// 获取div的高度
function load_home(url) {
	var height = document.getElementById("viewDiv").clientHeight
	document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="'+url+'" width="100%" height="'+height+'px"></object>';

	// function load(url, data) {
	// 	//alert($(url).attr("href"));
	// 	$.ajaxSetup({ cache: false });
	// 	$("#content").load($(url).attr("href") + " #content ", data, function (result) {
	// 		//alert(result);
	// 		//将被加载页的JavaScript加载到本页执行
	// 		$result = $(result);
	// 		$result.find("script").appendTo('#content');
	// 	});

	// }
}
// $("#viewDiv").load('news.html')
load_home('news.html')
var sideNav = new Vue({
	el: '.sideNav',
	data: {
		types:[
		{type:'新闻/公告',class:"orderManagement",selected:true,url:"news.html"},
		{type:'水域管理',class:"manManagement",selected:false,url:"area.html"},
		{type:'水域详情',class:"typeManagement",selected:false,url:"areaDetail.html"},
		{type:'投诉管理',class:"moneyManagement",selected:false,url:"money.html"},
		// {type:'员工管理',class:"staffManagement",selected:false,url:"staff.html"},
		// {type:'培训管理',class:"trainManagement",selected:false,url:"train.html"}
		  ]
	},
	methods:{
		choose:function (index) {
			for (var i = 0; i < this.types.length; i++) {
				this.types[i].selected = false;
			}
			this.types[index].selected = true;
			localUrl = this.types[index].url
			// $("#viewDiv").load(localUrl)
			load_home(localUrl)
		} 
	}
})
