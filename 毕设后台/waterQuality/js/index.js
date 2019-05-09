
var sideNav = new Vue({
	el: '.loginBox',
	data: {
		showTrue:false,
		showFalse:false,
		warn:false
	},
	methods: {
		doc: function (index) {
			var that = this
			if (that.$refs.userName.value == '' && that.$refs.password.value==''){
				that.warn=true
			}else if (that.$refs.userName.value == '') {
				that.warn = true
				return
			}else if (that.$refs.password.value == '') {
				that.warn = true
			}else{
				var list_options = {
					type: 'POST',
					url: 'user/admin',
					data: {
						adminUser: that.$refs.userName.value,
						password: that.$refs.password.value,
					}
				}
				var list_back = function (res) {
					if (res.code == '200') {
						that.showTrue = true
						that.showFalse = false
						that.warn = false
						var timer = setTimeout(function(){
							window.location.href = "./mainPage.html";
						},2000)
					} else {
						that.showTrue = false
						that.showFalse = true
						that.warn = false
					}
				}
				sendAjax(list_options, list_back)
			}
			
		}
	}
})