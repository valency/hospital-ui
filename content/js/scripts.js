// JavaScript Document
$(function(){
	
	LT.init();

    $(".task-list").off('click').on('click','.js-detail',function(){  //报表预览
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
    })
    .on('click','.js-del',function(){//删除报表
		var id = $(this).parent().parent().attr('data-id');
		Prompt.init({
			title: '删除报表',
			width: 460,
			height: 200,
			shade : true,
			html : '<div class="zl_wy_sc">您确认删除此报表吗？</div><input id="task-id" type="hidden" value="'+id+'">',
			ConfirmFun : save,
			CancelFun : true
		});
	});
	function save(){
		var id = $("#task-id").val();
		$.post('ajax/del.html',{id:id},function(data){
			if (data.success) {
				MU.msgTips('success',data.message);
				$("#task-item-"+id).remove();
				Prompt.hide();
			}else{
				MU.msgTips('error',data.message);
			};
		},'json')
	}

	$(".c-info-init a,.btn-add-area a").click(function(){  //添加组件模块按钮  右侧菜单出来
		$(".c-set-box").css("display","block");
		$(".c-add-list").css("display","block");
		var html='<tr><td><div class="lt-select"><a href="javascript:;">选择</a>';
		html +=	'<p type="09" title="某疾病患者中高血脂人数占比分析">某疾病患者中高血脂人数占比分...</p>';
		html +=	'<ul>';
		html +=	'<li type="09" title="某疾病患者中高血脂人数占比分析">某疾病患者中高血脂人数占比分...</li>';
		html +=	'<li type="10" title="某疾病患者中高血尿酸人数占比分析">某疾病患者中高血尿酸人数占比...</li>';
		html +=	'<li type="11" title="某疾病患者中高血脂人群性别分析">某疾病患者中高血脂人群性别分...</li>';
		html +=	'<li type="12" title="某疾病患者中高血尿酸人群性别分析">某疾病患者中高血尿酸人群性别...</li>';
		html +=	'<li type="13" title="某疾病患者中高血脂人群饮酒分析">某疾病患者中高血脂人群饮酒分...</li>';
		html +=	'<li type="14" title="某疾病患者中高血尿酸人群饮酒分析">某疾病患者中高血尿酸人群饮酒...</li>';
		html +=	'<li type="15" title="某疾病患者中高血脂人群抽烟分析">某疾病患者中高血脂人群抽烟分...</li>';
		html +=	'<li type="16" title="某疾病患者中高血尿酸人群抽烟分析">某疾病患者中高血尿酸人群抽烟...</li>';
		html +=	'<li type="01" title="30年来城市主要死亡原因变化趋势">30年来城市主要死亡原因变化...</li>';
		html +=	'<li type="02" title="30年来农村主要死亡原因变化趋势">30年来农村主要死亡原因变化...</li>';
		html +=	'<li type="03" title="2003-2013年中国居民慢性病患病率">2003-2013年中国居民慢性病...</li>';
		html +=	'<li type="04" title="2005-2013年中国居民主要疾病死亡率">2005-2013年中国居民主要疾...</li>';
		html +=	'<li type="05" title="城镇农村基本死亡率TOP10">城镇农村基本死亡率TOP10</li>';
		html +=	'<li type="06" title="疾病死亡率TOP10">疾病死亡率TOP10</li>';
		html +=	'<li type="07" title="糖尿病和非糖尿病患者胆固醇与心血管疾病死亡率关系">糖尿病和非糖尿病患者胆固醇与...</li>';
		html +=	'<li type="08" title="心脑血管疾病死亡率随着年龄增长而增高">心脑血管疾病死亡率随着年龄增...</li>';
		html +=	'</ul>';
		html +=	'</div>';
		html +=	'</td>';
		html +=	'<td><a href="javascript:;" class="add">新增一列</a></td><td><a href="javascript:;" class="del" title="删除">删除</a></td></tr>';;
		$(".c-set-box tbody").html(html);
		LT.init();
	});

	$(".c-set-box").on('click','a.cancel',function(){ // 右侧菜单取消按钮
		$(".c-add-list").hide(400);
	});

	$(".c-set-box").on("click",'a.add',function(){ //新增一列
		var html='<tr><td><div class="lt-select"><a href="javascript:;">选择</a>';
		html +=	'<p type="09" title="某疾病患者中高血脂人数占比分析">某疾病患者中高血脂人数占比分...</p>';
		html +=	'<ul>';
		html +=	'<li type="09" title="某疾病患者中高血脂人数占比分析">某疾病患者中高血脂人数占比分...</li>';
		html +=	'<li type="10" title="某疾病患者中高血尿酸人数占比分析">某疾病患者中高血尿酸人数占比...</li>';
		html +=	'<li type="11" title="某疾病患者中高血脂人群性别分析">某疾病患者中高血脂人群性别分...</li>';
		html +=	'<li type="12" title="某疾病患者中高血尿酸人群性别分析">某疾病患者中高血尿酸人群性别...</li>';
		html +=	'<li type="13" title="某疾病患者中高血脂人群饮酒分析">某疾病患者中高血脂人群饮酒分...</li>';
		html +=	'<li type="14" title="某疾病患者中高血尿酸人群饮酒分析">某疾病患者中高血尿酸人群饮酒...</li>';
		html +=	'<li type="15" title="某疾病患者中高血脂人群抽烟分析">某疾病患者中高血脂人群抽烟分...</li>';
		html +=	'<li type="16" title="某疾病患者中高血尿酸人群抽烟分析">某疾病患者中高血尿酸人群抽烟...</li>';
		html +=	'<li type="01" title="30年来城市主要死亡原因变化趋势">30年来城市主要死亡原因变化...</li>';
		html +=	'<li type="02" title="30年来农村主要死亡原因变化趋势">30年来农村主要死亡原因变化...</li>';
		html +=	'<li type="03" title="2003-2013年中国居民慢性病患病率">2003-2013年中国居民慢性病...</li>';
		html +=	'<li type="04" title="2005-2013年中国居民主要疾病死亡率">2005-2013年中国居民主要疾...</li>';
		html +=	'<li type="05" title="城镇农村基本死亡率TOP10">城镇农村基本死亡率TOP10</li>';
		html +=	'<li type="06" title="疾病死亡率TOP10">疾病死亡率TOP10</li>';
		html +=	'<li type="07" title="糖尿病和非糖尿病患者胆固醇与心血管疾病死亡率关系">糖尿病和非糖尿病患者胆固醇与...</li>';
		html +=	'<li type="08" title="心脑血管疾病死亡率随着年龄增长而增高">心脑血管疾病死亡率随着年龄增...</li>';
		html +=	'</ul>';
		html +=	'</div>';
		html +=	'</td>';
		html +=	'<td><a href="javascript:;" class="add">新增一列</a></td><td><a href="javascript:;" class="del" title="删除">删除</a></td></tr>';;
		$(".c-set-box tbody").append(html);
		LT.init();
	});

	$(".c-set-box").on("click",'a.del',function(){ //新增一列
		$(this).parent().parent().remove();
	});

	$(".c-info-box .preview").unbind('click').bind('click',function(){  //预览报表内容
		var url=$(this).attr('data-url');
		$.post(url,function(data){
			Prompt.init({
				title: '报表内容预览',
				width: 1150,
				shade : true,
				html : data
			});
		},'html');
	});

});

var LT = {
	init: function(){
		this.select();	
		this.choose();
		this.initReportPoolBar();
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
			var type = $(this).attr('type');
			
			$(this).parents('.lt-select').find('p').text(txt);
			$(this).parents('.lt-select').find('p').attr('type',type);
			$(this).parent().slideUp(600);
		});
	},
	initReportPoolBar:function(){
		$("#reportPoolBox .op_box").remove();
		$("#reportPoolBox .row").each(function(){
			var html = '<div class="op_box">'+
				'<a class="op up" href="javascript:;">上移</a>'+
				'<a class="op down" href="javascript:;">下移</a>'+
				'<a class="op set" href="javascript:;">设置</a>'+
				'<a class="op del" href="javascript:;">删除</a>'+
				'</div>';
			$(this).prepend( html );
		});
		$("#reportPoolBox .row:first").find('a.op.up').remove();
		$("#reportPoolBox .row:last").find('a.op.down').remove();
		var that = this;
		$("#reportPoolBox").on('click','a.op.del',function(){
			$(this).closest('.row').remove();
			that.initReportPoolBar();
		});
		$("#reportPoolBox").on('click','a.op.set',function(){
			$(".c-add-list").show(400);
		});
		$("#reportPoolBox").off('click','a.op.up').on('click','a.op.up',function(){//上移
			var $item = $(this).closest('.row'),$prev = $item.prev();
			$prev.before($item);
			that.initReportPoolBar();
		});
		$("#reportPoolBox").off('click','a.op.down').on('click','a.op.down',function(){//下移
			var $item = $(this).closest('.row'),$next = $item.next();
			$next.after($item);
			that.initReportPoolBar();
		});
	},
}