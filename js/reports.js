$(document).ready(function () {

	//check_login();
	$(".nav-block li:eq(2)").addClass("active");
	$('#create-time').daterangepicker({
			singleDatePicker: true,
			showDropdowns: true
		},
		function(start, end, label) {
			//operation
		});

	$("#report-content-table").DataTable({
		language: DT_LANG
	});

	var fData = [{"name":"疾病趋势分析","type":"常用","depart":"皮肤科","time":"2016-04-14","ids":"ajax/view.html"},
	             {"name":"某疾病与性别，高血脂，高血尿酸研究","type":"常用","depart":"皮肤科","time":"2016-04-14","ids":"ajax/view2.html"}
				];
	var totalData = [];
	$(function(){
		var refresh = localStorage.getItem("refresh");
		if(refresh == "1"){
			totalData = JSON.parse(localStorage.getItem("fData"));
			//localStorage.removeItem("fData");
		}else{
			totalData = fData;
		}
		

		makeTable(totalData);
		
		$("#searchBtn").on("click",function(){
			var reportName = $.trim($("#reportName").val());
			var beginDate = $.trim($("#beginDate").val());
			
			var newData = [];
			if(reportName != "" && beginDate != ""){
				$(totalData).each(function(id,item){
					if(item.name.indexOf(reportName) != -1 && item.time.indexOf(beginDate) != -1){
						newData.push(item);
					}
				})
			}else if(reportName != "" && beginDate == ""){
				$(totalData).each(function(id,item){
					if(item.name.indexOf(reportName) != -1){
						newData.push(item);
					}
				})
			}else if(reportName == "" && beginDate != ""){
				$(totalData).each(function(id,item){
					if(item.time.indexOf(beginDate) != -1){
						newData.push(item);
					}
				})
			}else{
				newData = totalData;
			}
			makeTable(newData);
		});
		localStorage.removeItem("refresh");
		window.localStorage.setItem("fData", JSON.stringify(fData));
	});

	function makeTable(data){
		var html = "";
		if(data != ""){
			$(data).each(function(id,item){
				html += "<tr id='task-item-"+(id+1)+"' data-id='"+(id+1)+"'>";
				var name = item.name;
				if(name.length > 12){
					name = item.name.substring(0,8) + "..." + item.name.substring(name.length-3);
				}
				html += "<td title='"+item.name+"'>"+item.name+"</td>";
				html += "<td>"+item.type+"</td>";
				html += "<td>"+item.depart+"</td>";
				html += "<td>"+item.time+"</td>";
				html += "<td class='t-r'><a class='op js-detail' href='javascript:;' data-url='"+item.ids+"'  title='报表预览'></a>";
				html += "<a class='op mod' href='javascript:;'></a>";
				html += "<a class='op del js-del' href='javascript:;'></a>";
				html += "</td>";
				html += "</tr>";
				
			});
	
			$("#totalTbody").empty().html(html);
		}else{
			html += "<tr><td colspan='5' style='text-align:center;'>暂无数据</td></tr>";
			$("#totalTbody").empty().html(html);
		}
	}


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
		var html='<tr><td>	<select id="search-room-range" class="form-control w200">';
		html +=	'<option value="0">某疾病患者中高血脂人数占比分</option>';
		//html +=	'<ul>';
		html +=	'<option value="1">某疾病患者中高血脂人数占比分...</option> ';
		html +=	'<option value="2">某疾病患者中高血尿酸人数占比...</option> ';
		html +=	'<option value="3">某疾病患者中高血脂人群性别分...</option> ';
		html +=	'<option value="4">某疾病患者中高血脂人群饮酒分...</option> ';
		html +=	'<option value="5">某疾病患者中高血尿酸人群饮酒...</option> ';
		html +=	'</select>';
		html +=	'</td>';
		html +=	'<td><a href="javascript:;" class="form-control add">新增一列</a></td><td><a href="javascript:;" class="del" title="删除">删除</a></td></tr>';
		$(".c-set-box tbody").html(html);
		LT.init();
	});

	$(".c-set-box").on('click','a.cancel',function(){ // 右侧菜单取消按钮
		$(".c-add-list").hide(400);
	});

	$(".c-set-box").on("click",'a.add',function(){ //新增一列
		var html='<tr><td>	<select id="search-room-range" class="form-control w200">';
		html +=	'<option value="0">某疾病患者中高血脂人数占比分</option>';
		html +=	'<option value="1">某疾病患者中高血脂人数占比分...</option> ';
		html +=	'<option value="2">某疾病患者中高血尿酸人数占比...</option> ';
		html +=	'<option value="3">某疾病患者中高血脂人群性别分...</option> ';
		html +=	'<option value="4">某疾病患者中高血脂人群饮酒分...</option> ';
		html +=	'<option value="5">某疾病患者中高血尿酸人群饮酒...</option> ';
		html +=	'</select>';
		html +=	'</td>';
		html +=	'<td><a href="javascript:;" class="form-control add">新增一列</a></td><td><a href="javascript:;" class="del" title="删除">删除</a></td></tr>';
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

	$("#saveTotal").on("click",function(){
		var types = "";
		$("#allTbody .lt-select p").each(function(){
			types += $(this).attr("type")+",";

		})

		window.localStorage.setItem("reportName", $("#reportName").val());
		window.localStorage.setItem("remarkInfo", $("#remarkInfo").val());

		var typeArray = types.substring(0,types.length-1);
		//window.location.href="add2.html?type="+encodeURIComponent(typeArray)+"";
		window.location.href="add2.html?type="+typeArray+"";
	})

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