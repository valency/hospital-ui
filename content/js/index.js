(function($){
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
		
		
/*		var localData = JSON.parse(localStorage.getItem("fData"));
		
		if(localData != "" && localData != null){
			totalData = localData;
		}else{
			localStorage.setItem("fData", JSON.stringify(fData));
			totalData = fData;
		}*/
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
		})
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
				html += "<a class='op del js-del' href='javascript:;'></a>";
				html += "</td>";
				html += "</tr>";
				
			})
	
			$("#totalTbody").empty().html(html);
		}else{
			html += "<tr><td colspan='5' style='text-align:center;'>暂无数据</td></tr>";
			$("#totalTbody").empty().html(html);
		}
	}
})(jQuery)