var list_options = {
	type: 'get',
	url: 'quality/getComplaintList',
	data: {
		pageNo: 1,
		pageSize: 999,
	}
}
var list_back = function (res) {
	for(let i in res.items){
		res.items[i].chuli = false
	}
	var order = new Vue({
		el: '#content',
		data: {
			types: [
			{ type: '头像', class: "title-banner" },
			{ type: '用户名', class: "takeEffect-banner" },
			{ type: '图片', class: "img-banner" },
			{ type: '内容', class: "yaoqiu-banner" },
			{ type: '创建时间', class: "time-banner" },
			{ type: '操作', class: "operation-banner" }
			],
			items: res.items,
			showTrue: true,
			content:'',
			picked:'',
			poster:''
		},
		methods:{
			del:function (item,index) {
				console.log(item,index)
				var that = this
					var list_options = {
						type: 'get',
						url: 'quality/deleteComplaint',
						data: {
							Complaint: item.id
						}
					}
					var list_back = function (res) {
						toastr.success('处理成功！')
						that.items[index]= item.chuli = true
					}
					sendAjax(list_options, list_back)

			} 
		}
	})
}

sendAjax(list_options, list_back)






