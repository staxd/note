

$(document).ready(function() {


    
    Handlebars.registerHelper("if_eq",function(v1,v2,options){
       
        if(v1 == v2){
            return options.fn(this);
        }else{
            return options.inverse(this);
        }
    });



    var userId = "";
    var docId = "";


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

    function htmlspecialchars_decode(str){           
        str = str.replace(/&amp;/g, '&'); 
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, "''");  
        str = str.replace(/&#039;/g, "'");  
        return str;  
    }

    function formatetime(str){
        //年
        var yyyy = str[4] + str[5] + str[6] + str[7];
        //月
        var MM = str[2] + str[3];
        // 日
        var dd = str[0] + str[1];

        var fstr = yyyy + '年' + MM + '月' + dd + '日';
        return fstr;  
    }


    function getInformation(){
        var infoTemplate = Handlebars.compile($("#info-template").html());

        var Request = new UrlSearch(); //实例化

        userId = Request.userId;
        docId = Request.docId;


        $.ajax({
            type: 'get',
            url: "http://www.joinfit.live:8092/sandbagapp/ver2.4/sociality/queryConfigDocById?" + "userId=" + userId + "&docId=" + docId + "&language=1",
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                res = htmlspecialchars_decode(response["configDoc"]["doc"]); 

                var imageUrl = response["configDoc"]["imageUrl"];
                if (imageUrl == ""){
                    imageUrl = 'http://www.e-sandbag.com/sandbag/pictures/headPhotos/defaulthead.png';
                }else{
                    imageUrl = 'http://www.e-sandbag.com/sandbag/' + imageUrl;
                }
                var title = response["configDoc"]["title"];
                // var createdTime = response["configDoc"]["createdTime"];
                var createdTime = formatetime(response["configDoc"]["createdTime"]);

                $('#info').html(infoTemplate({"doc":res,"imageUrl":imageUrl,"title":title,"createdTime":createdTime}));
            },
            error: function(err) {
                console.log('error');
                // console.log(err);
            }
        });
    }



});


