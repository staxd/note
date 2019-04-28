var localUrl =""
//获取div的高度
// function load_home(url) {
	// var height = document.getElementById("viewDiv").clientHeight
	// document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="'+url+'" width="100%" height="'+height+'px"></object>';
// 	 * 加载变换内容，主要url参数为dom对象，并且该dom中的url放在href中，
//  * 调用方式如：<span onclick="javascript:load(this);" href="/backstage/website/test.html">测试</span>
// 		* 注意：1.该dom对象最好不要用a标签，因为点击a标签会进入href指定的页面
// 			* 2.要加载的内容要用 id = "content" 标注，因为load中指明了加载页面中指定的id为content下的内容
// 				* 3.对应页面的JavaScript写在content下
// 					* /
	function load(url, data) {
		//alert($(url).attr("href"));
		$.ajaxSetup({ cache: false });
		$("#content").load($(url).attr("href") + " #content ", data, function (result) {
			//alert(result);
			//将被加载页的JavaScript加载到本页执行
			$result = $(result);
			$result.find("script").appendTo('#content');
		});

	}
// }
$("#viewDiv").load('order.html')
// load_home('order.html')
var sideNav = new Vue({
	el: '.sideNav',
	data: {
		types:[
		{type:'订单管理',class:"orderManagement",selected:true,url:"order.html"},
		{type:'配送员管理',class:"manManagement",selected:false,url:"man.html"},
		{type:'类型管理',class:"typeManagement",selected:false,url:"type.html"},
		{type:'资金管理',class:"moneyManagement",selected:false,url:"money.html"},
		{type:'评论管理',class:"comment",selected:false,url:"comment.html"},
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
			$("#viewDiv").load(localUrl)
		} 
	}
})
