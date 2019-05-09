
	var list_options = {
		type: 'get',
		url: 'quality/notice',
		data: {
			state:1,
			pageNo: 1,
			pageSize: 999,
		}
	}
	var list_back = function (res) {
		var news = new Vue({
			el: '#content',
			data: {
				types: [
				{ type: '封面', class: "title-banner" },
					{ type: '类型', class: "takeEffect-banner" },
					{ type: '标题', class: "img-banner" },
					{ type: '内容', class: "yaoqiu-banner" },
					{ type: '创建时间', class: "time-banner" },
					{ type: '操作', class: "operation-banner" }
				],
				items: res.items,
				showTrue: true,
				content:'',
				picked:''
			},
			methods: {
				doc: function (item, index) {
					var that = this

					var list_options = {
						type: 'get',
						url: 'delivery/deleteDelivery',
						data: {
							deliveryNumber: item.deliveryNumber
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
				},add: function () {
					var that = this
					console.log(that.$refs.file.files[0])
					var file = new File([that.$refs.file.files[0]], filename, {type: contentType, lastModified: Date.now()});
					var list_options = {
						type: 'post',
						baseURL:'https://buguanjia.com/',
						url: 'api/upload/pic',
						headers:{
							'Content-Type': 'multipart/form-data',
							'authorization':'E+qOs+l4aNKDf0UyzAMTI9tMlaQHMkK+nERH6N/W6zj44mA0HgVQf9b2ij2s9beF'
						},
						data: {
							bizType:1,
							files:file
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
				look(item,index){
					console.log(item,index)
					this.content = item.content
				}
			}
		})

	}
	sendAjax(list_options, list_back)








