var list_options = {
	type: 'get',
	url: 'quality/getComplaintList',
	data: {
		pageNo: 1,
		pageSize: 999,
	}
}
var list_back = function (res) {
	var order = new Vue({
		el: '#content',
		data: {
			types: [
			{ type: '头像', class: "title-banner" },
			{ type: '用户名', class: "takeEffect-banner" },
			{ type: '图片', class: "img-banner" },
			{ type: '内容', class: "yaoqiu-banner" },
			{ type: '创建时间', class: "time-banner" },
			// { type: '操作', class: "operation-banner" }
			],
			items: res.items,
			showTrue: true,
			content:'',
			picked:'',
			poster:''
		},
		methods:{
			choose:function (index) {
			} 
		}
	})
}

sendAjax(list_options, list_back)






