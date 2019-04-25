//var URL = "http://47.99.81.5:8092"
function load(url){
     //alert($(url).attr("href"));
     $.ajaxSetup({cache: false });
     $("#content").load($(url).attr("href")+ " #content ", function(result){
         //alert(result);
         //将被加载页的JavaScript加载到本页执行
         $result = $(result); 
         $result.find("script").appendTo('#content');
     });  
}

$(function () {
	$("#addArticle-dryGoods").on('click',function(){
		$(".mainContent").load('addArticle-dryGoods.html');
	});

	/*$.ajax({
		type:"GET",
		url:"http://smartdove.iask.in:17946/api/companys",
		dataType:"json",
		contentType:"application/json;charset=UTF-8",
		data:{},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
			'authorization': obj["authorization"]
		},
		withCredentials: true,
		success:function(data){
			if (data.code == "200"){
				console.log('获取干货列表成功');
			}
		},
		error:function(error){
			console.log("error");
		}
	});*/
});