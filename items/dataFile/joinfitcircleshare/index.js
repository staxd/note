

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//其中“20”根据你设置的html的font-size属性值做适当的变化
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(document).ready(function() {

 
    function imgBox(){
        var t_img; // 定时器
var isLoad = true; // 控制变量

// 判断图片加载状况，加载完成后回调
isImgLoad(function(e){
    // 加载完成
                $("#boX").removeClass();
    
});

// 判断图片加载的函数
function isImgLoad(callback){
    // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
    // 查找所有封面图，迭代处理
    $('img.img').each(function(k,v){
        // 找到为0就将isLoad设为false，并退出each
        // console.log(k+" "+v);
        naWidth = $(this)[0].naturalWidth;
        naHeight = $(this)[0].naturalHeight;
        // console.log($(this));

        if(naWidth === 0){
            isLoad = false;
            return false;
        }
        // console.log(naWidth+" "+naHeight);
        if( $('.imgs').children().length >= 0 ){
                    $(".img_min").css("width","32%");
                    var widthBox = $(".img_min").width();
                    $(".img_min").height(widthBox);
                    var imgWidth =naWidth;
                    var imgHeight =naHeight;
                    if(imgWidth > imgHeight){
                        $(".img_min").eq(k).find(".imgBox").height(widthBox);
                        $(".img_min").eq(k).find(".imgBox img").height(widthBox);
                        $(".img_min").eq(k).find(".imgBox").width((widthBox/imgHeight)*imgWidth);
                        $(".img_min").eq(k).find(".imgBox img").width((widthBox/imgHeight)*imgWidth);
                        $(".img_min").eq(k).find("img").css("margin-left",widthBox/2-$(".img_min").eq(k).find("img").width()/2);
                          
                    }else if(imgWidth < imgHeight){

                        $(".img_min").eq(k).find(".imgBox").width(widthBox);
                        $(".img_min").eq(k).find(".imgBox img").width(widthBox);
                        $(".img_min").eq(k).find(".imgBox").height((widthBox/imgWidth)*imgHeight);
                        $(".img_min").eq(k).find(".imgBox img").height((widthBox/imgWidth)*imgHeight);
                        $(".img_min").eq(k).find("img").css("margin-top",widthBox/2-$(".img_min").eq(k).find("img").height()/2);
                    }else{
                        $(".img_min").eq(k).find(".imgBox").width(widthBox);
                        $(".img_min").eq(k).find(".imgBox img").width(widthBox);
                        $(".img_min").eq(k).find(".imgBox").height((widthBox/imgWidth)*imgHeight);
                        $(".img_min").eq(k).find(".imgBox img").height((widthBox/imgWidth)*imgHeight);
                    }
                    if($('.imgs').children().length == 1){
                        if(imgWidth >= imgHeight){
                            $(".img_min").width($('.imgs').width());
                            $(".img_min").find(".imgBox").width($('.imgs').width());
                            $(".img_min").find(".imgBox img").width($('.imgs').width());
                            $(".img_min").find(".imgBox img").css("margin-left","0px");
                            $(".img_min").find(".imgBox img").css("margin-top","0px");
                            $(".img_min").find(".imgBox").css("height","");
                            $(".img_min").find(".imgBox img").css("height","");
                            $(".img_min").css("height","");
                        }else{
                            $(".img_min").width($('.imgs').width()/1.8);
                            $(".img_min").find(".imgBox").width($('.imgs').width()/1.8);
                            $(".img_min").find(".imgBox img").width($('.imgs').width()/1.8);
                            $(".img_min").find(".imgBox img").css("margin-left","0px");
                            $(".img_min").find(".imgBox img").css("margin-top","0px");
                            $(".img_min").find(".imgBox").css("height","");
                            $(".img_min").find(".imgBox img").css("height","");
                            $(".img_min").css("height","");
                        }
                        
                    }
                }
                
            
        
    });
    // 为true，没有发现为0的。加载完毕
    if(isLoad){
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback();
    // 为false，因为找到了没有加载完成的图，将调用定时器递归
    }else{
        isLoad = true;
        t_img = setTimeout(function(){
            isImgLoad(callback); // 递归扫描
        },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
    }
}
       

            $("img.img").on("click",function(e){
                $("#imgMax").attr("src",$(this)[0].currentSrc);
                $("#boX").addClass("mask");
                $("#info").css("display","none");
                // console.log($(this)[0].height/$(this)[0].width +" "+$(window).height()/$(window).width());
                if($(this)[0].width >= $(this)[0].height){
                    $("#imgMax").addClass("removeH");
                }else if($(this)[0].height/$(this)[0].width<$(window).height()/$(window).width()){
                    $("#imgMax").addClass("removeH");
                }
                else{
                    $("#imgMax").addClass("removeW");
                   
                }
                var el = document.querySelector('div.pinch-zoom');
            console.log(el);
             new PinchZoom.default(el, {});
            })
            $("#imgMax").on("click",function(e){
                $("#imgMax").attr("src","");
                $("#boX").removeClass();
                $("#info").css("display","");
                $("#imgMax").removeClass();

            })
    }
    
    Handlebars.registerHelper("if_eq",function(v1,v2,options){
       
        if(v1 == v2){
            return options.fn(this);
        }else{
            return options.inverse(this);
        }
    });



    var userId = "";
    var articleId = "";


    getInformation();

    


    function UrlSearch() {
        var name, value;
        var str = location.href;

        var num = str.indexOf("?")
        str = str.substr(num + 1);

        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                this[name] = value;
            }
        }
    }

    function formatetime(str){   
        // var fstr = moment(str, 'yyyy-MM-dd HH:mm:ss').format('MM-dd HH:mm');  
        // console.log(str);

        var mm = str[4] + str[5];
        // console.log(mm);
        var dd = str[6] + str[7];
        // console.log(dd);
        var hh = str[9] + str[10];
        var m = str[11] + str[12];

        var fstr = mm + '-' + dd + ' ' + hh + ':' + m;
        // console.log(fstr);
        // moment.locale();      
        // var date = moment(str, 'YYYYMMDD HHMMSS');
        // var fstr = date.format('MM-DD HH:MM');
        return fstr;  
    }

    function formatecontent(str){
        var strarray = str.split('$$');
        if (strarray.length == 4) {
            return '@' + strarray[1] + ' ' + strarray[3];
        }
        return str;
    }



    function getInformation(){
        var template = Handlebars.compile($("#info-template").html());

        var Request = new UrlSearch(); //实例化

        userId = Request.userId;
        articleId = Request.articleId;
        

        $.ajax({
            type: 'get',
            url: "http://www.joinfit.live:8092/sandbagapp/ver2.4/sociality/queryArticleById?" + "userId=" + userId + "&articleId=" + articleId + "&language=1",
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                
                
                console.log(response["authorHeadPhotoUrl"]);

                if (response["authorHeadPhotoUrl"] != ""){
                    authorHeadPhotoUrl = decodeURI(response["authorHeadPhotoUrl"]);
                }else{
                    authorHeadPhotoUrl = 'http://www.e-sandbag.com/sandbag/pictures/headPhotos/defaulthead.png';
                }

              



                authorNickname = response["authorNickname"];
                createdTime = formatetime(response["createdTime"]);
                address = response["address"];




                topicDesc = decodeURI(response["content"]);
                images = response["images"];
                for (let i = 0; i < images.length; i++) {
                    images[i].imageUrl =images[i].imageUrl;
                    
                    num = i;
                }

                praisedPersons = response["praisedPersons"];
                for (var i = 0; i < praisedPersons.length; i++) {

                    if (praisedPersons[i].headPhotoUrl) {
                        praisedPersons[i].headPhotoUrl = praisedPersons[i].headPhotoUrl;
                    }else{
                        praisedPersons[i].headPhotoUrl = 'http://www.e-sandbag.com/sandbag/pictures/headPhotos/defaulthead.png';
                    }

                }




                comments = response["comments"];
                for (var i = 0; i < comments.length; i++) {
                    comments[i].content = unescape(comments[i].content.replace(/\\/g,'%'));
                    comments[i].content = formatecontent(comments[i].content);

                    if (comments[i].authorHeadPhotoUrl) {
                        comments[i].authorHeadPhotoUrl = comments[i].authorHeadPhotoUrl;
                    }else{
                        comments[i].authorHeadPhotoUrl = 'http://www.e-sandbag.com/sandbag/pictures/headPhotos/defaulthead.png';
                    }                    
                    comments[i].createdTime = formatetime(comments[i].createdTime);
                }
                var data = {"authorHeadPhotoUrl":authorHeadPhotoUrl,
                                                "authorNickname":authorNickname,
                                                "createdTime":createdTime,
                                                "address":address,
                                                "topicDesc":topicDesc,
                                                "images":images,
                                                "num":num,
                                                "praisedPersons":praisedPersons,
                                                "praisedPersonsNumber":praisedPersons.length,
                                                "comments":comments,
                                                "commentsnumber":comments.length
                                                };
                $("#info").html(template(data));
                $("body").append('<script>'+ imgBox() +'</script>');
                


            },
            error: function(err) {
                console.log('error');
                // console.log(err);
            }
        });
    }





});