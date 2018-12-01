$(function(){
    //点击登录跳转到登录api接口,需要与后台地址一致
    $('#btn').click(function(){
        //与后台交互的时候会产生跨域
        $.post('http://localhost:3000/api/loging',{
            username:$('input[type=text]').val(),
            password:$('input[type=password]').val(),  
        },function(res){
            //console.log(res);
            if(res.code  === 0){
                //登陆成功，跳转到首页
                // location.href='/index.html';

                //判断是否是管理员如果是管理员就为true
                var isAdmin=res.data.isAdmin
                if(isAdmin===true){
                    //是管理员
                    localStorage.setItem('isAdmin',res.data.isAdmin);
                    location.href='/index.html';
                }else{
                    //不是管理员
                    location.href='/index.html';
                }

                //cookie同时也要存储起来
                localStorage.setItem('nickname',res.data.nickname)
            }else{
                //登陆失败
                alert(res.msg);
            }
        })
    });

})