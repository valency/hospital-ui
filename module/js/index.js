var Index = {};

Index.initModuleDatas = [{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic01.png","REMARK":"疾病趋势分析模板3","COMPONENT_TYPE":"折线图","COMPONENT_NAME":"30年来城市主要死亡原因变化趋势"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic02.png","REMARK":"疾病趋势分析模板4","COMPONENT_TYPE":"折线图","COMPONENT_NAME":"30年来农村主要死亡原因变化趋势"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic03.png","REMARK":"疾病趋势分析模板5","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"2003-2013年中国居民慢性病患病率"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic04.png","REMARK":"疾病趋势分析模板6","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"2005-2013年中国居民主要疾病死亡率"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic05.png","REMARK":"疾病趋势分析模板2","COMPONENT_TYPE":"表格","COMPONENT_NAME":"城镇农村基本死亡率TOP10"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic06.png","REMARK":"疾病趋势分析模板1","COMPONENT_TYPE":"饼状图","COMPONENT_NAME":"疾病死亡率TOP10"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic07.png","REMARK":"疾病趋势分析模板7","COMPONENT_TYPE":"折线图","COMPONENT_NAME":"糖尿病和非糖尿病患者胆固醇与心血管疾病死亡率关系"},{"CREATE_TIME":1460390400000,"PICTURE_URL":"images/views/pic08.png","REMARK":"疾病趋势分析模板8","COMPONENT_TYPE":"折线图","COMPONENT_NAME":"心脑血管疾病死亡率随着年龄增长而增高"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic09.png","REMARK":"某疾病研究模板1","COMPONENT_TYPE":"饼状图","COMPONENT_NAME":"某疾病患者中高血脂人数占比分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic10.png","REMARK":"某疾病研究模板2","COMPONENT_TYPE":"饼状图","COMPONENT_NAME":"某疾病患者中高血尿酸人数占比分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic11.png","REMARK":"某疾病研究模板3","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血脂人群性别分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic12.png","REMARK":"某疾病研究模板4","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血尿酸人群性别分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic13.png","REMARK":"某疾病研究模板5","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血脂人群饮酒分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic14.png","REMARK":"某疾病研究模板6","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血尿酸人群饮酒分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic15.png","REMARK":"某疾病研究模板7","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血脂人群抽烟分析"},{"CREATE_TIME":1460476800000,"PICTURE_URL":"images/views/pic16.png","REMARK":"某疾病研究模板8","COMPONENT_TYPE":"柱状图","COMPONENT_NAME":"某疾病患者中高血尿酸人群抽烟分析"}];

	
Index.init = function(){
	$('#qryBtn').click(function(){
		Index.qryData();
	});
	
	Index.qryData();
}

Index.qryData = function(){
	var nameCon = $.trim($('#nameCon').val());
	var timeCon = $.trim($('#beginDate').val());
	
	var qryResults = new Array();
	
	// 进行数据筛选
	for(var i=0;i< Index.initModuleDatas.length; i++){
		var curD = Index.initModuleDatas[i];
		if(nameCon != "" && (curD.COMPONENT_NAME.indexOf(nameCon) == -1)){
			continue;
		}
		
		if(timeCon != ""){
			var minS =  moment(timeCon).toDate().getTime() 
			if(minS > curD.CREATE_TIME){
				continue;
			}
		}
		
		qryResults.push(curD)
	}
	
	// 进行数据内存填充
	var html = '';
	if(qryResults.length > 0){
		$(qryResults).each(function(id,item){
			
			html += '<tr id="task-item-1" data-id="1">';
			html += '<td>'+item.COMPONENT_NAME+'</td>';
			html += '<td>'+item.REMARK+'</td>'; 
			html += '<td>'+item.COMPONENT_TYPE+'</td>';
			html += '<td>'+ moment(item.CREATE_TIME).format('YYYY-MM-DD') +'</td>';
			html += '<td class="t-r"><a class="op js-detail" data-id="'+item.PICTURE_URL+'" href="javascript:;" title="预览"></a>	<a data-id="'+item.COMPONENT_NAME+'" class="op del js-del" href="javascript:;"></a></td></tr>';
		
			
		})

		$("#totalTbody").empty().html(html);
		$("#pager1").show();
		$("#totalTable").tablesorter({cssHeader: ""}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});
	}else{
		html += "<tr><td colspan='5' style='text-align:center;'>暂无数据</td></tr>";
		$("#pager1").hide();
		$("#totalTbody").empty().html(html);
	}
}