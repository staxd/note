//获取列表
var list_options = {
	type: 'get',
	url: 'delivery/deliveryType',
	data: {
	}
}
var list_back = function (res) {
	var order = new Vue({
		el: '#contentBox',
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
			choose:function (index) {
			} 
		}
	})
	
}
sendAjax(list_options, list_back)
//提交
var sub = new Vue({
	el: '#myModal',
	data: {
	},
	methods: {
		doc: function (index) {
			var that = this
			var list_options = {
				type: 'post',
				url: 'delivery/addDeliveryType',
				data: {
					typeName: that.$refs.typeName.value,
				}
			}
			var list_back = function (res) {
			}
			sendAjax(list_options, list_back)
			
			
		}
	}
})





