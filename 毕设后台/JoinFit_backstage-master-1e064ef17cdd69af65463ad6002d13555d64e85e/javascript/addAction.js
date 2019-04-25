KindEditor.options.filterMode = false;

$(function(){

	console.log($(document).width());

	/*if ($(document).height() > 1000) {
		$(".actionSummary").find("textarea").css({"height":$(document).height()*0.38});
	}else{
		$(".actionSummary").find("textarea").css({"height":$(document).height()*0.08});
	}*/

	if ($(document).width() < 1500) {
		$(".actionSummary").find("textarea").css({"width":$(document).width()*0.73});
	}
	editor = KindEditor.create('textarea[name="content"]');
});