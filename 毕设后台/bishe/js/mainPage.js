var localUrl =""
//获取div的高度
	 function load_home(url) {
	 	var height = document.getElementById("viewDiv").clientHeight
	 	document.getElementById("viewDiv").innerHTML = '<object type="text/html" data="'+url+'" width="100%" height="'+height+'px"></object>';
	 }
	 load_home('new.html')
var sideNav = new Vue({
	  el: '.sideNav',
	  data: {
	    types:[
				{type:'新闻动态',class:"newManagement",selected:true,url:"new.html"},
				{type:'通知公告',class:"noticeManagement",selected:false,url:"notice.html"},
            	{type:'薪酬管理',class:"rewardManagement",selected:false,url:"reward.html"},
	            {type:'组织架构',class:"formManagement",selected:false,url:"form.html"},
	            {type:'合同管理管理',class:"contract",selected:false,url:"contract.html"},
	            {type:'员工管理',class:"staffManagement",selected:false,url:"staff.html"},
	            {type:'培训管理',class:"trainManagement",selected:false,url:"train.html"}
	          ]
	  },
	  methods:{
	    choose:function (index) {
				for (var i = 0; i < this.types.length; i++) {
					this.types[i].selected = false;
				}
           		this.types[index].selected = true;
           		localUrl = this.types[index].url
           		load_home(localUrl)
       		} 
	}
	})
