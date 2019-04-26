var list_options = {
	type: 'get',
	url: 'delivery/deliveryList',
	data: {
		pageNo: 1,
		pageSize:10,
	}
}
var list_back = function (e) {
	console.log(e)
	if(e.data.code=='200'){
		var order = new Vue({
			el: '#contentBox',
			data: {
				types:[
				{type:'订单编号',class:"no-banner"},
				{type:'发布者电话',class:"img-banner"},
				{type:'类型id',class:"title-banner"},
				{type:'发布者学号',class:"position-banner"},
				{type:'地址',class:"content-banner"},
				{type:'状态',class:"state-banner"},
				{type:'奖金',class:"takeEffect-banner"},
				{type:'要求',class:"yaoqiu-banner"},
				{type:'配送员',class:"invalid-banner"},
				{type:'创建时间',class:"time-banner"},
				{type:'操作',class:"operation-banner"}
				],
				items:e.data.items
			},
			methods:{
				choose:function (index) {
				} 
			}
		})
	}
}
sendAjax(list_options, list_back)






