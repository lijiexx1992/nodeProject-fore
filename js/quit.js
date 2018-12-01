$(function(){
        //登陆后用户名显示在头部
        if(!localStorage.getItem('nickname')){
            $('#name').text("XXXX欢迎您");
        }else{
            // console.log(localStorage.getItem('nickname'))
            $('#name').text(localStorage.getItem('nickname'));
        }
    
        //点击退出退出账号页面跳转到登录页
        $('#quit').click(function(){
            localStorage.removeItem('nickname');
            localStorage.removeItem('isAdmin');
            location.href='./loging.html';
        })
})