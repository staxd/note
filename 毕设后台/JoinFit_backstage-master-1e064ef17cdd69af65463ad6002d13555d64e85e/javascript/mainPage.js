var screenHeight;
function getHeight(){
	screenHeight = $(".mainContent").height()+80;
	return screenHeight;
}

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

function delClass(ele ,className){
	$(ele).find(".sideNav-item").each(function(){
		if ($(this).hasClass(className)) {
			$(this).removeClass(className);
		}
	});
}

$(function(){
	$(".userManagement").on('click',function(){
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('userManage.html');
	});

	$(".coachManagement").on('click',function(){
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('coachManage.html');
	});

	$(".circleManagement").on('click',function(){
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('circleManage.html');
	});

	$(".integralMall").on('click',function(){
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('integralMall.html');
	});

	$(".orderManagement").on('click',function(){
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('orderManage.html');
	});

	$('.bannerManage').on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('bannerManage.html');
	});

	$('.dryGoods').on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('dryGoods.html');
	});

	$('.actionLib').on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('actionLib.html');
	});

	$('.trainProgram').on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('trainProgram.html');
	});

	$('.diet').on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('diet.html');
	});

	$(".marketingManagement").on('click',function(){
		if ($(".marketType").hasClass("showBox")) {
			$(".marketType").removeClass("showBox");
			$('.marketingManagement').find(".sideNav-icon").attr('src','./img/takeUp.png');
		}else{
			$(".marketType").addClass("showBox");
			$('.marketingManagement').find(".sideNav-icon").attr('src',"./img/drop-down.png");
		}
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('bannerManage.html');
		$(".bannerManage").click();
	});

	$(".messageManage").on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('messageManage.html');
	});

	$(".userOpinion").on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('opinion.html');
	});

	$(".modifyPassword").on('click',function(){
		$(".moreMenu-item").each(function(){
			if ($(this).find('a').hasClass("moreMenu-active")) {
				$(this).find('a').removeClass("moreMenu-active");
			}
		});
		$(this).find('a').addClass('moreMenu-active');
		$(".mainContent").load('modifyPassword.html');
	});

	$(".system-setup").on('click',function(){
		if ($(".setupType").hasClass("showBox")) {
			$(".setupType").removeClass("showBox");
			$(".system-setup").find(".sideNav-icon").attr('src','./img/takeUp.png');
		}else{
			$(".setupType").addClass("showBox");
			$(".system-setup").find(".sideNav-icon").attr('src','./img/drop-down.png');
		}
		delClass($(".sideNav"),"actived")
		$(this).addClass("actived");
		$(".mainContent").load('messageManage.html');
		$(".messageManage").click();
	});

	$('.systemMessage').on('click',function(){
		$(".system-setup").click();
		if ($(".setupType").hasClass('showBox')) {
			$(".system-setup").click();
		}
		$(".userOpinion").click();
	});

	$('.setUp').on('click',function(){
		if ($(".system-setup").hasClass("actived")) {}else{
			$('.system-setup').click();
		}
		$(".messageManage").click();
	});

	$('.sideNav-item').on('click',function(){
		if (!$(this).hasClass('marketingManagement')) {
			if (!$(".marketType").hasClass("showBox")) {
				$(".marketType").addClass("showBox");
				$('.marketingManagement').find(".sideNav-icon").attr('src',"./img/drop-down.png");
			}
		}
		if (!$(this).hasClass('system-setup')) {
			if (!$(".setupType").hasClass("showBox")) {
				$(".setupType").addClass("showBox");
				$(".system-setup").find(".sideNav-icon").attr('src','./img/drop-down.png');
			}
		}
	});

	$(".userManagement").click();
	
});