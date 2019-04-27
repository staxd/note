var localUrl =""
//获取div的高度
function load_home(url) {
	var height = document.getElementById("viewDiv").clientHeight
	document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="'+url+'" width="100%" height="'+height+'px"></object>';
}
load_home('order.html')
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
			load_home(localUrl)
		} 
	}
})
