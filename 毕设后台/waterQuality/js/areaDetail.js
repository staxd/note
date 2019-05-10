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
					if(that.$refs.gradeEdit!=''||that.$refs.gradeEdit!='0'){
						item.grade = that.$refs.gradeEdit[0].value
						console.log(that.$refs)
						var list_options = {
							type: 'post',
							url: 'quality/changeRegionGrade',
							data: {
								regionId:item.id,
								grade:that.$refs.gradeEdit[0].value
							}
						}
						var list_back = function (res) {
					toastr.success('修改成功！')

							items[index] = item
							that.items = items
							that.$refs.gradeEdit[0].value=''
						}
					// console.log(list_options)
					sendAjax(list_options, list_back)
				}
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

					}
				}
				var list_back = function (res) {
					toastr.success('添加成功！')
					var list = that.items
					var addList = list_options.data
					list.push(addList)
					that.items = list
					//清空表单数据
					that.$refs.tpaddDetail.value=''
					that.$refs.nhNaddDetail.value=''
					that.$refs.codaddDetail.value=''
					that.$refs.tnaddDetail.value=''
				}
				console.log(list_options)
				sendAjax(list_options, list_back)
			}
		}
	})

}
sendAjax(list_options, list_back)