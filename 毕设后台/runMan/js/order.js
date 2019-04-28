var list_options = {
	type: 'get',
	url: 'delivery/deliveryList',
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
			{type:'发布者电话',class:"img-banner"},
			{type:'配送类型',class:"title-banner"},
			{type:'发布者学号',class:"position-banner"},
			{type:'地址',class:"content-banner"},
			{type:'状态',class:"state-banner"},
			{type:'奖金',class:"takeEffect-banner"},
			{type:'要求',class:"yaoqiu-banner"},
			{type:'配送员学号',class:"invalid-banner"},
			{type:'创建时间',class:"time-banner"},
			{type:'操作',class:"operation-banner"}
			],
			items:res.items,
			showTrue:true
		},
		methods:{
			doc:function (index) {
				
			} 
		}
	})
	
}
sendAjax(list_options, list_back)






