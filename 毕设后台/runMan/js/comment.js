var list_options = {
	type: 'get',
	url: 'delivery/allComments',
	data: {
		pageNo: 1,
		pageSize:10,
	}
}
var list_back = function (res) {
	var order = new Vue({
		el: '#contentBox',
		data: {
			types:[
			{type:'订单编号',class:"no-banner"},
			{type:'用户学号',class:"img-banner"},
			{type:'用户手机号',class:"title-banner"},
			{type:'打分星数',class:"position-banner"},
			{type:'评论内容',class:"yaoqiu-banner"}
			],
			items:res.items,
			showTrue:true
		},
		methods:{
			choose:function (index) {
			} 
		}
	})
	
}
sendAjax(list_options, list_back)






