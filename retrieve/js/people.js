(function($){
	//表格
	var tableData = [{"rTime":1455724800000,"quilty":"甲","patientId":954,"age":48,"name":"吴亚晴","cTime":1456502400000,"sex":"女"},{"rTime":1455811200000,"quilty":"甲","patientId":955,"age":35,"name":"池小宁","cTime":1456416000000,"sex":"男"},{"rTime":1456070400000,"quilty":"甲","patientId":956,"age":32,"name":"林子善","cTime":1456588800000,"sex":"男"},{"rTime":1456329600000,"quilty":"乙","patientId":957,"age":14,"name":"吴兴国","cTime":1456934400000,"sex":"男"},{"rTime":1456502400000,"quilty":"甲","patientId":958,"age":26,"name":"白胜祥","cTime":1457193600000,"sex":"男"},{"rTime":1456588800000,"quilty":"乙","patientId":959,"age":37,"name":"尚静","cTime":1457366400000,"sex":"女"},{"rTime":1456761600000,"quilty":"甲","patientId":960,"age":28,"name":"许青云","cTime":1457539200000,"sex":"男"},{"rTime":1456848000000,"quilty":"甲","patientId":961,"age":34,"name":"孙琳","cTime":1457452800000,"sex":"女"},{"rTime":1457020800000,"quilty":"甲","patientId":962,"age":42,"name":"李欣","cTime":1457625600000,"sex":"女"},{"rTime":1457193600000,"quilty":"甲","patientId":963,"age":21,"name":"刘艳丽","cTime":1457798400000,"sex":"女"},{"rTime":1457452800000,"quilty":"甲","patientId":964,"age":28,"name":"李雪飞","cTime":1457971200000,"sex":"女"},{"rTime":1457539200000,"quilty":"甲","patientId":965,"age":36,"name":"毕凯","cTime":1458489600000,"sex":"男"},{"rTime":1457798400000,"quilty":"甲","patientId":966,"age":71,"name":"何兰兰","cTime":1458748800000,"sex":"女"},{"rTime":1457884800000,"quilty":"乙","patientId":967,"age":87,"name":"朱晓姝","cTime":1459094400000,"sex":"女"},{"rTime":1458144000000,"quilty":"甲","patientId":968,"age":25,"name":"唐琪","cTime":1459353600000,"sex":"女"},{"rTime":1458316800000,"quilty":"甲","patientId":969,"age":64,"name":"孟竹","cTime":1459440000000,"sex":"男"},{"rTime":1458403200000,"quilty":"甲","patientId":970,"age":47,"name":"周伟","cTime":1459699200000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":971,"age":39,"name":"卜严峻","cTime":1459785600000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":972,"age":47,"name":"谷静","cTime":1459699200000,"sex":"女"},{"rTime":1459180800000,"quilty":"甲","patientId":973,"age":31,"name":"刘佳","cTime":1460217600000,"sex":"女"}];;

	$(function(){
		$("#name").val("");
		makeTable(tableData);
		$(".btn").on("click",function(){
			var name = $("#name").val();
			var inputDate = $("#inputDate").val();
			var dataFlg = false;
			var sPlace = inputDate.indexOf("至");
			if( sPlace != -1){
				dataFlg = true;
				startTime = inputDate.substring(0,sPlace-1);
				endTime = inputDate.substring(sPlace+1);
			}
			
			var sData = [];
			$(tableData).each(function(id,item){
				if(item.name.indexOf(name) != -1){
					if(dataFlg){
						var rTime = moment(item.rTime).format('YYYY-MM-DD'),
						cTime = moment(item.cTime).format('YYYY-MM-DD');
						if(stringToInt(endTime) < stringToInt(rTime) || stringToInt(startTime) > stringToInt(cTime)){
							return false;
						}else{
							sData.push(item);
						}
					}else{
						sData.push(item);
					}
				}
				
			});
			
			makeTable(sData);
		});
	})
	
	function makeTable(data){
		var html = "";
		if(data != ""){
			$(data).each(function(id,item){
				html += "<tr>";
				html += "<td>"+item.name+"</td>";
				html += "<td>"+item.sex+"</td>";
				html += "<td>"+item.age+"</td>";
				html += "<td>"+moment(item.rTime).format('YYYY-MM-DD')+"</td>";
				html += "<td>"+moment(item.cTime).format('YYYY-MM-DD')+"</td>";
				html += "<td>"+item.quilty+"</td>";
				html += "<td class='t-r'><a class='op' href='../retrieve/EMPI.html?id="+item.patientId+"' title='查看详情'></a></td>";
				html += "</tr>";
				
			})
	
			$("#totalTbody").empty().html(html);
			$("#pager1").show();
			$("#totalTable").tablesorter({cssHeader: "", headers: {1: {sorter: false}, 0: {sorter: false},2:{sorter:false},3:{sorter:false},4:{sorter:false},5:{sorter:false},6:{sorter:false}}}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});
		}else{
			html += "<tr><td colspan='7' style='text-align:center;'>暂无数据</td></tr>";
			$("#pager1").hide();
			$("#totalTbody").empty().html(html);
		}
	}
	
	function stringToInt(num){
		return parseInt(num.replace(/-/g,""));
	}
})(jQuery)