//获取列表

var list_options = {
	type: 'get',
	url: 'delivery/deliveryType',
	data: {
	}
}
var list_back = function (res) {
	var order = new Vue({
		el: '.contentBox',
		data: {
			types:[
			{type:'id',class:"title-banner"},
			{type:'类型名',class:"position-banner"},
			{type:'操作',class:"operation-banner"}
			],
			items:res.tags,
			showTrue:true
		},
		methods:{
			doc: function (index) {
				var that = this
				if(that.$refs.typeName.value!=''){
					var list_options = {
						type: 'post',
						url: 'delivery/addDeliveryType',
						data: {
							typeName: that.$refs.typeName.value,
						}
					}
					var list_back = function (res) {
						toastr.success("添加成功！")
						var item = that.items
						item.push({
							id:item.length+1,
							typeName:that.$refs.typeName.value
						})
						that.items = item
						console.log(that.items)
					}
					sendAjax(list_options, list_back)
				}
			},
			delect:function(item,index){
				console.log(item,index)
				var id = item.id
				var that = this
					var list_options = {
						type: 'delete',
						url: 'delivery/deleteDeliveryType?id='+id,
						data: {
							
						}
					}
					var list_back = function (res) {
						toastr.success("删除成功！")
						var arr = []
						for (let i in that.items) {
							if (i != index) {
								arr.push(that.items[i])
							}
						}
						that.items = arr
					}
					sendAjax(list_options, list_back)
			}
		}
	})
}
sendAjax(list_options, list_back)





