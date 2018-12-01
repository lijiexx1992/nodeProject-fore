$(function(){
    //获取localStorage存储的isAdimin如果存在就显示用户管理页面如果不在就不显示用户
    //管理页面
    if(!localStorage.getItem('isAdmin')==true){
        //普通用户登陆
        $('#vip').css("display","none");
      
    }else{
        //是管理员登陆
        $('#vip').css("display","block");
    }

})