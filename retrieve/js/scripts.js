// JavaScript Document
$(function(){
	
	LT.init();

	$(".task-list .del-btn").unbind('click').bind('click',function(){//删除查询数据
		$(this).parent().parent().remove();
	});

	$('.tab-nav-left li').click(function(){  //更换查询条件tab样式
		if($(this).hasClass('activeTab'))
			return;
		$('.tab-nav-left li').removeClass('activeTab');
		$(this).addClass('activeTab');
		var tabId = $(this).attr('tabId');
		$('#tab-nav-con > div').hide();
		$('#' + tabId).show();
	});
	
	$('.tab-result em.del').click(function(){   //输出结果集合删除按钮
		$(this).parent().remove();
	});

	
});

var LT = {
	init: function(){
		this.select();	
		this.choose();
	},
	choose:function(){
		$("body").on('click','label.checkbox',function(){   //单复选按钮
			if($(this).hasClass('disabled')){return false;}
			if($(this).hasClass('radio')){
				$(this).addClass('checked').siblings().removeClass('checked');
				var $name = $(this).attr('name');
				$(".radio[name="+$name+"]").removeClass('checked');
				$(this).addClass('checked');
			}else{
				$(this)[$(this).hasClass('checked')?'removeClass':'addClass']('checked');
				$(this).next().find('input').attr('disabled',!$(this).hasClass('checked'));
			}
		});	
	},
	select: function(){	
		$("body").unbind('click').bind('click',function(){
			$(".lt-select ul").hide();
		});
		$(".lt-select a").unbind('click').bind('click',function(e){
			if($(this).parents('.dis').length > 0 || $(this).parent().find('li').length <= 0){
				return false;
			}else{
				if($(this).parent().find('ul').is(":hidden")){
					$(this).parent().find('ul').slideDown(600);
				}else{
					$(this).parent().find('ul').slideUp(600);
				}
			}
			e.stopPropagation();
		});
		$(".lt-select li").unbind('click').bind('click',function(){
			var txt = $(this).text();
			var selType = $(this).attr('selType');

			$(this).parents('.lt-select').find('p').text(txt);
			$(this).parents('.lt-select').find('p').attr('selType', selType);
			$(this).parent().slideUp(600);

		});
	}	
}