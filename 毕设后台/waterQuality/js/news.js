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
			// { type: '操作', class: "operation-banner" }
			],
			items: res.items,
			showTrue: true,
			content:'',
			picked:'',
			poster:''
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
					_form_data.append('files', that.$refs.file.files[0]);
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
					this.content = item.content
				}
			}
		})

}
sendAjax(list_options, list_back)

