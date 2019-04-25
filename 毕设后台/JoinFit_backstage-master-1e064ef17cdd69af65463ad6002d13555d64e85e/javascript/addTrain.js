KindEditor.options.filterMode = false;
var editor;

$(function(){

	if ($(document).width() < 1500) {
		$(".trainSummary").find("textarea").css({"width":$(document).width()*0.73});
	}
	editor = KindEditor.create('textarea[name="content"]');

	var chooseVideo = $(".chooseVideo_btn");
	chooseVideo.on("click",function() {
		$(".maskLayer").css({"display":"block"});
	});

	$(".actionChoose_item").on("click",function() {
		$(".maskLayer").css({"display":"none"});
	});
});