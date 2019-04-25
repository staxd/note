var URL="http://47.99.81.5:8092/sandbagapp/backEnd"
$(function(){
	$('#loginBtn').on('click',function(){
		$('.errmsg').css({'display':'none'});
		var user = $("#username").val();
		//var password = $("#password").val();
		var password = "$MD5$/kZP3NFEsT$IRypLC8wuM6vZ2uLLzeRQQ";
		$.ajax({
			type:"GET",
			url:URL + '/user/login?account=' + user + '&password=' + password,
			dataType:"json",
			contentType:"application/json;charset=UTF-8",
			data:{},
			headers: {
				'Access-Control-Allow-Origin': '*',  
		    	'Content-Type': 'application/json'
			},
			withCredentials: true,
			success:function(data){
				console.log(data);
				
				if (data.code == "200" || data.code == "OK") {
					console.log("登录成功！");
					window.location.href = "../mainPage.html";
				}else{
					$('.errmsg').css({'display':'block'});
					$('.errmsg').html(data.message);
					$('#username').focus();
				}
			},
			error:function(error){
				console.log("error");
			}
		});
	});
});