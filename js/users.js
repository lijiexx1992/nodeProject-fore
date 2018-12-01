 
$(function(){
    getList()
    //分页操作
    $('body').on('click', '.pagea', function() {
        var page = $(this).attr('data-page');
        // console.log(page);
     
        getList(page);
       
    })

    //删除操作
    setTimeout(function(){
        
        $('body').on('click','.deleteall',function(){
            var id =$(this).attr('_id');
           // console.log(id);
            deleTeall(id);
        })
    },200)


    //根据ID查询操作
    setTimeout(function(){

        $('body').on('click','.queryId',function(){
            //点击修改的时候修改框弹出，查询信息渲染到修改框
            $('.cennter').css("display","block");
            var id =$(this).attr('_id');
            // console.log(id);
            queryId(id);
        })
        $('body').on('click','#miss',function(){
            $('.cennter').css("display","none");
        })

    },200)

    //根据id修改数据的信息
    setTimeout(function(){
        $('body').on('click','#btn',function(){
            //点击修改的时候修改框弹出，查询信息渲染到修改框
          
            var id =$(this).attr('_id');
            console.log(id);
            changeInfo(id);
        })
    },200)
    
    //搜索用户列表
    $('#seacrhBtn').click(function(){
        getInfo();
    })


})

//获取用户列表
function getList(page,pageSize){
  
    $.get('http://localhost:3000/api/users/list',{
        page:page,
        pageSize:pageSize
    },function(res){
        if(res.code===0){
        //请求成功把数据渲染到页面上
         var list=res.data.list;
        //  console.log(list);
         var html = template('tpl-user',{
            list:list
           
         })
         $("#tbody").html(html);
         
         //获取页数
         var totalSize=res.data.totalSize;
         var totalPage=res.data.totalPage;
         var page=res.data.page;
         var pageSize=res.data.pageSize
        //  console.log(page);
         var htmlPage = template('tpl-page',{
            totalSize:totalSize,
            totalPage:totalPage,
            page:page,
            pageSize:pageSize
         })
         
         $(".pagination").html(htmlPage);
        }else{
            //请求失败
            alert(res.msg)
        }
    })

}


//删除用户列表信息
function deleTeall(id) { 
    $.get('http://localhost:3000/api/users/delete',{
        id:id
    },function(res){
      
        if(res.code===0){
            //渲染页面
            alert('删除成功');
            location.href='/users.html';
        }else{
            //修改失败
            alert(res.msg)
        }
    })
 }


 //获取搜索后用户列表信息
 function queryId(id){
    $.get('http://localhost:3000/api/users/queryid',{
        id:id
    },function(res){
        var data=res.data.list;
        // console.log(data);
        if(res.code==0){
            //查询成功
            // console.log(1);
             alert('查询成功');
            var queryhtml = template('tpl-query',{
                data:data
             })
             $(".cennter").html(queryhtml);
        }else{
            //查询失败
            alert(res.msg)
        }
    })
 }


 //修改用户列表信息
 function changeInfo(id){

     $.get('http://localhost:3000/api/users/change',{
            id:id,
            password:$('input[name=password]').val(),
            nickname:$('input[name=nickname]').val(),
            sex:$('input[name="sex"]:checked').val(),
            age:$('input[name=age]').val()
     },function(res){
            console.log(res);
            if(res.code ===0){
                //修改成功
                alert('修改成功');
                location.href='/users.html';
            }else{
                //修改失败
                alert(res.msg)
            }
     })
 }


 //获取所搜索信息
 function getInfo(){
    $.get('http://localhost:3000/api/users/seacrh',{
        name:$('#seacrhInput').val()
    },function(res){
        //把查询结果渲染到页面上
        //console.log(res);
        if(res.code === 0){
            var list=res.data.list;
            //  console.log(list);
             var html = template('tpl-user',{
                list:list
             })
             $("#tbody").html(html);
        }else{
        //查询失败
            alert(res.msg)  
        }
    })
 }