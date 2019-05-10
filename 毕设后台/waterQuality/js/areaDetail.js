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

		},
		methods:{
			add:function (index) {
				var that = this
				var list_options = {
					type: 'post',
					url: 'quality/addRegion',
					data: {
						regionName:that.$refs.regionName.value,
						longitude:that.$refs.longitude.value,
						latitude:that.$refs.latitude.value,
						grade:that.$refs.grade.value,
					}

				}
				var list_back = function (res) {
					var list = that.items
					var addList = list_options.data
					list.push(addList)
					that.items = list
					//清空表单数据
					that.$refs.regionName.value=''
					that.$refs.longitude.value=''
					that.$refs.latitude.value=''
					that.$refs.grade.value=''
				}
					// console.log(list_options)
					sendAjax(list_options, list_back)
				},
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
							items[index] = item
							that.items = items
							that.$refs.gradeEdit[0].value=''
				}
					// console.log(list_options)
					sendAjax(list_options, list_back)
				}
			},del: function (item, index) {
					var that = this

					var list_options = {
						type: 'delete',
						url: 'quality/deleteRegion',
						data: {
							regionId: item.id
						}
					}
					var list_back = function (res) {
						toastr.success('删除成功！')
						var arr = []
						for(let i in that.items){
							if(i!=index){
								arr.push(that.items[i])
							}
						}
						that.items = arr
					}
					sendAjax(list_options, list_back)
				},
		}
	})

}
sendAjax(list_options, list_back)