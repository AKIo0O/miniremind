(function(){
    var storage = window.localStorage;

    var key = storage["index"] || 0;

    var append = function(o){
        $("<tr><td>"+o.index+"</td><td>"+o.title+"</td><td class='times' data-value='"+o.time+"'>"+o.value+"</td><td><a href='#' class='del'>delete</a></td></tr>").insertBefore(".addMore");
    };

    $("input[type='submit']").on("click", function(){
        var o = {};
        o.title = $(".title>input").val();
        o.time  = parseInt($(".input-supermini").val(),10)*60;
        
        storage[++key] = JSON.stringify(o);
        storage["index"] = key;
        o.value = second(o.time).string;
        o.index = key;
        append(o);
    });

    for(var i = 1; i <= key; i++){
        var o = JSON.parse(storage[i]);
        if(o == null) continue;
        o.value = second(o.time).string;
        o.index = i;
        append(o);
    }

    $(".table").on("click", ".del", function(){
        var key = $(this).parent().parent().find("td:first").html();
        storage[key]="null";
        $(this).parent().parent().remove();
        return false;
    });

    setInterval(function(){

        $(".times").each(function(i, item){
            var o = second(parseInt(item.dataset.value),1,item.previousSibling.innerHTML);
            item.innerHTML = o.string;
            item.dataset.value = o.seconds;
        });

    },1000);

    function second(seconds, prefix,title){

        if(seconds ==0) return;
        if(prefix) seconds = seconds - prefix;


        var min = seconds < 60 ? "0" : Math.floor(seconds/60),
            sec = seconds < 60 ? seconds : seconds%60;

        if(seconds == 0){
            remind(title);
            return {seconds : seconds,string:"时间到了"};
        }
        return {
            seconds : seconds,
            string  : min +"分"+sec+"秒"
        };

    }


    function remind(title){
        var notification = window.webkitNotifications.createNotification("images/q16.jpg", "提醒", "任务"+title+"时间已经到了");
        notification.show();
    }




})();
if(!window.webkitNotifications){

    alert("您的浏览器不支持桌面通知");


}


document.body.addEventListener("click",function(){

    //1. 获取通知权限
    window.webkitNotifications.requestPermission(function(){});
},false);


var DataMannager = function(){

};

var NotifyCenter = function(){

};

var Timer = function(){

};

var DataBinding = function(){
    
};













