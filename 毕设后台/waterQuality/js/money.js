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
			{type:'发布者学号',class:"position-banner"},
			{type:'配送员学号',class:"invalid-banner"},
			{type:'奖金',class:"takeEffect-banner"},
			{type:'创建时间',class:"time-banner"},
			{type:'操作',class:"operation-banner"}
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






