var list_options = {
	type: 'get',
	url: 'quality/getRegion',
	data: {
		pageNo: 1,
		pageSize:999,
	}
}
var list_back = function (res) {
	var order = new Vue({
		el: '#content',
		data: {
			types:[
			{type:'水域名',class:"no-banner1"},
			{type:'水域等级',class:"position-banner"},
			{type:'水域详情操作',class:"operation-banner"}
			],
			items:res.items,
			showTrue:true,
			picked:'',
			item:{},
			index:0,
			itemListLength:0,
			itemList:{},
			regionId:0

		},
		methods:{
				look(item,index){
					console.log(item,index)
					var that = this
					var list_options = {
						type: 'GET',
						url: 'quality/getWaterQuality',
						data: {
							regionId: item.id
						}
					}
					var list_back = function (res) {
						that.itemListLength = res.pageCount
						that.itemList = res.items[0]
					}
					sendAjax(list_options, list_back)
				},
				edit(item,index){
					console.log(item,index)
					var that = this
					that.item = item
					that.index = index
					that.regionId = item.id
					var list_options = {
						type: 'GET',
						url: 'quality/getWaterQuality',
						data: {
							regionId: item.id
						}
					}
					var list_back = function (res) {
						that.itemListLength = res.pageCount
						that.itemList = res.items[0]
					}
					sendAjax(list_options, list_back)

				},
				editSub(){
					var that = this
					var item = that.item
					var index = that.index
					var items = that.items
						var list_options = {
							type: 'post',
							url: 'quality/changeWaterQuality',
							data: {
								id:item.id,
								regionId:that.regionId,
								tp:that.$refs.tpeditDetail[0].value,
								tn:that.$refs.tneditDetail[0].value,
								nhN:that.$refs.nhNeditDetail[0].value,
								cod:that.$refs.codeditDetail[0].value,
								tpCompany:'mg/L',
								tnCompany:'mg/L',
								nhNCompany:'mg/L',
								codCompany:'mg/L',
							}
						}
						var list_back = function (res) {
					toastr.success('修改成功！')
						}
					// console.log(list_options)
					sendAjax(list_options, list_back)
			},
			addGrade(item,index){
				this.regionId = item.id
			},
			addSub(item,index){
				var that = this

				var list_options = {
					type: 'post',
					url: 'quality/addWaterQuality',
					data: {
						regionId: that.regionId,
						tp:that.$refs.tpaddDetail[0].value,
						nhN:that.$refs.nhNaddDetail[0].value,
						cod:that.$refs.codaddDetail[0].value,
						tn:that.$refs.tnaddDetail[0].value,
						tpCompany:'mg/L',
						tnCompany:'mg/L',
						nhNCompany:'mg/L',
						codCompany:'mg/L'
					}
				}
				var list_back = function (res) {
					toastr.success('添加成功！')
					//清空表单数据
					that.$refs.tpaddDetail.value=''
					that.$refs.nhNaddDetail.value=''
					that.$refs.codaddDetail.value=''
					that.$refs.tnaddDetail.value=''
				}
				console.log(list_options)
				sendAjax(list_options, list_back)
			},
			del:function (item,index) {
					var that = this
					var list_options = {
						type: 'GET',
						url: 'quality/getWaterQuality',
						data: {
							regionId: item.id
						}
					}
					var list_back = function (res) {
						var list_options = {
							type: 'delete',
							url: 'quality/deleteWaterQuality',
							data: {
								qualityId: res.items[0].regionId
							}
						}
						var list_back = function (a) {
							toastr.success('删除成功！')
						}
						console.log(list_options)
						sendAjax(list_options, list_back)
					}
					sendAjax(list_options, list_back)
					

			} 
		}
	})

}
sendAjax(list_options, list_back)