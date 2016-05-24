// JavaScript Document
$(function(){
	
	LT.init();






	
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
			var id = $(this).attr('data-id');
			var action = $(this).attr('action');
			var call = $(this).parents('.lt-select').attr('data-call');
			var url = $(this).parents('.lt-select').attr('data-url');
			if(action && action != undefined){
				window.location.href = action;
			}else{
				$(this).parents('.lt-select').find('p').text(txt);
				$(this).parents('.lt-select').find('p').attr('data',id);
				$(this).parent().slideUp(600);
			}
			if(call && call != undefined){
				LT.setChecked(id,txt,url);
			}
		});
	}
}