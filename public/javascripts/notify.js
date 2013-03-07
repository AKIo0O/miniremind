if(!window.webkitNotifications){

    alert("您的浏览器不支持桌面通知");


}


document.body.addEventListener("click",function(){

    //1. 获取通知权限
    window.webkitNotifications.requestPermission(function(){});

    // var notification = window.webkitNotifications.createNotification("images/q16.jpg", "标题", "内容内容内容内容内容内容内容内容内容内容内容内容内容内容");




    // notification.show();
































},false);