var list_options = {
	type: 'get',
	url: 'delivery/distributorList',
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
			{type:'班级',class:"no-banner1"},
			{type:'姓名',class:"img-banner"},
			{type:'学号',class:"title-banner"},
			{type:'电话',class:"position-banner"},
			{type:'配送员状态',class:"content-banner"},
			{type:'账户存款',class:"state-banner"},
			{type:'创建时间',class:"time-banner"},
			{type:'修改时间',class:"time-banner"},
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






