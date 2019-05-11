var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
: nowDate.getMonth() + 1;
var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
.getDate();
var hour = nowDate.getHours(); 
var minutes = nowDate.getMinutes();
var seconds = nowDate.getSeconds();
var dateStr = year + "-" + month + "-" + day +" " + hour +":" +minutes+":"+seconds; 
var list_options = {
	type: 'get',
	url: 'quality/notice',
	data: {
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
			picked:'',
			poster:'',
			item:{},
			index:0
		},
		methods: {
			add: function () {
				var that = this
				var list_options = {
					type: 'post',
					url: 'quality/addNews',
					data: {
						typeId:that.picked,
						title:that.$refs.title.value,
						content:that.$refs.content.value,
						poster:that.poster
					}

				}
				var list_back = function (res) {
					toastr.success('添加成功！')

					var list = that.items
					var addList = list_options.data
					addList.gmtCreated = dateStr
					list.unshift(addList)
					that.items = list
					//清空表单数据
					that.picked=''
					that.$refs.title.value=''
					that.$refs.content.value=''
					that.poster = ''
					that.$refs.file.value= ''
				}
					// console.log(list_options)
					sendAjax(list_options, list_back)
				},
				doSomethingElse(obj){
					var that = this
					var _form_data = new FormData();
					_form_data.append('picType', 'vote');
					// console.log(that.$refs.file[0].files[0])
					_form_data.append('files', that.$refs.file[0].files[0]);
					var list_options = {
						type: 'post',
						baseURL:'https://www.sxscott.com/crazyBird/',
						url: 'upload/pic',
						data: _form_data
					}
					var list_back = function (res) {
						that.poster = res.urlList[0]
					}
					sendAjax(list_options, list_back)

				},
				look(item,index){
					console.log(item,index)
					this.item = item
					this.content = item.content
					this.title = item.title
					this.poster = item.poster
					this.index = item.index
				},
				editSub(){
					var that = this
					var itemList = that.item
					var item = that.item
					delete item["gmtCreated"]
					item.content = that.$refs.content[0].value
					item.title = that.$refs.title[0].value
					item.poster = that.poster
					itemList.content = that.$refs.content[0].value
					itemList.title = that.$refs.title[0].value
					itemList.poster = that.poster
					var list_options = {
						type: 'post',
						url: 'quality/chageNews',
						data: item
					}
					var list_back = function (res) {
						toastr.success('修改成功！')
						that.items[that.index] = itemList
					}
					sendAjax(list_options, list_back)
				},
				del: function (item, index) {
					var that = this

					var list_options = {
						type: 'get',
						url: 'quality/deleteNews',
						data: {
							newsId: item.id
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

