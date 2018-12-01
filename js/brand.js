$(function(){

    //获取品牌信息
    getBrand()

    //分页操作
    $('body').on('click', '.pagea', function() {
        var page = $(this).attr('data-page');
        // console.log(page);
     
        getBrand(page);
       
    })

    //删除操作
    setTimeout(function(){
        
        $('body').on('click','.deleteall',function(){
            var id =$(this).attr('_id');
           // console.log(id);
            deleTeall(id);
        })
    },200)



    //根据id修改数据的信息
    setTimeout(function(){

        $('body').on('click','.queryId',function(){
            //点击修改的时候修改框弹出，查询信息渲染到修改框
            $('.cennter').css("display","block");
            var id =$(this).attr('_id');
            var brandName=$(this).parent().siblings('.bn').text();
            $('#ibn').val(brandName);
            $("#onbtnInfo").val(id);
        })
        $('body').on('click','#miss',function(){
            $('.cennter').css("display","none");
        })

        $('body').on('click','#onbtnInfo',function(){
            //点击修改的时候修改框弹出，查询信息渲染到修改框
            $('.cennter').css("display","block");
            $('body').on('click','#miss',function(){
                $('.cennter').css("display","none");
            })
        })
    },200)




    //点击品牌管理显示
    // console.log( $('.btn-info'))
    $('.btn-info').click(function(){
        $('.update').css('display','block')
    })


    //取消品牌管理显示
    $('#miss').click(function(){
        $('.update').css('display','none')
    })

    


})

//获取品牌列表
function getBrand(page,pageSize){
    $.get('http://localhost:3000/api/brand/list',{
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
    $.get('http://localhost:3000/api/brand/delete',{
        id:id
    },function(res){
      
        if(res.code===0){
            //渲染页面
            alert('删除成功');
            location.href='/brand.html';
        }else{
            //修改失败
            alert(res.msg)
        }
    })
 }


 //修改品牌信息
 function changeInfo(id,brandName){

} 