$(function(){

	
    $('.box .tab span').click(function() {    //图表tab切换
        $(this).addClass('on').siblings().removeClass('on');
    });
    
    $(".task-list .js-detail").unbind('click').bind('click',function(){  //报表预览
        var name = $(this).parent().parent().find('td:first-child').text();
        var url=$(this).attr('data-url');
        $.post(url,function(data){
            Prompt.init({
                title: name+'报表预览',
                width: 1150,
                shade : true,
                html : data
            });
        },'html');
    });

    $(".collect-btn").click(function() {   //收藏和取消
        if($(this).hasClass("on")){
            $(this).attr('data-id','0');
            $(this).removeClass("on");
        }else{
            $(this).attr('data-id','1');
            $(this).addClass("on");
        }
    });
	
	$(".task-list .js-del").unbind('click').bind('click',function(){//删除收藏
		$(this).parent().parent().remove();
	});

});
