(function($){
	var data = [{"rTime":1455724800000,"quilty":"甲","patientId":954,"age":48,"name":"吴亚晴","cTime":1456502400000,"sex":"女"},{"rTime":1455811200000,"quilty":"甲","patientId":955,"age":35,"name":"池小宁","cTime":1456416000000,"sex":"男"},{"rTime":1456070400000,"quilty":"甲","patientId":956,"age":32,"name":"林子善","cTime":1456588800000,"sex":"男"},{"rTime":1456329600000,"quilty":"乙","patientId":957,"age":14,"name":"吴兴国","cTime":1456934400000,"sex":"男"},{"rTime":1456502400000,"quilty":"甲","patientId":958,"age":26,"name":"白胜祥","cTime":1457193600000,"sex":"男"},{"rTime":1456588800000,"quilty":"乙","patientId":959,"age":37,"name":"尚静","cTime":1457366400000,"sex":"女"},{"rTime":1456761600000,"quilty":"甲","patientId":960,"age":28,"name":"许青云","cTime":1457539200000,"sex":"男"},{"rTime":1456848000000,"quilty":"甲","patientId":961,"age":34,"name":"孙琳","cTime":1457452800000,"sex":"女"},{"rTime":1457020800000,"quilty":"甲","patientId":962,"age":42,"name":"李欣","cTime":1457625600000,"sex":"女"},{"rTime":1457193600000,"quilty":"甲","patientId":963,"age":21,"name":"刘艳丽","cTime":1457798400000,"sex":"女"},{"rTime":1457452800000,"quilty":"甲","patientId":964,"age":28,"name":"李雪飞","cTime":1457971200000,"sex":"女"},{"rTime":1457539200000,"quilty":"甲","patientId":965,"age":36,"name":"毕凯","cTime":1458489600000,"sex":"男"},{"rTime":1457798400000,"quilty":"甲","patientId":966,"age":71,"name":"何兰兰","cTime":1458748800000,"sex":"女"},{"rTime":1457884800000,"quilty":"乙","patientId":967,"age":87,"name":"朱晓姝","cTime":1459094400000,"sex":"女"},{"rTime":1458144000000,"quilty":"甲","patientId":968,"age":25,"name":"唐琪","cTime":1459353600000,"sex":"女"},{"rTime":1458316800000,"quilty":"甲","patientId":969,"age":64,"name":"孟竹","cTime":1459440000000,"sex":"男"},{"rTime":1458403200000,"quilty":"甲","patientId":970,"age":47,"name":"周伟","cTime":1459699200000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":971,"age":39,"name":"卜严峻","cTime":1459785600000,"sex":"男"},{"rTime":1458576000000,"quilty":"甲","patientId":972,"age":47,"name":"谷静","cTime":1459699200000,"sex":"女"},{"rTime":1459180800000,"quilty":"甲","patientId":973,"age":31,"name":"刘佳","cTime":1460217600000,"sex":"女"}];;
	
	$(function(){
		var str = window.location.search;
		var start = str.indexOf("=");
		var id = str.substr(start + 1);
		
		$("#empiUrl").attr("href","../retrieve/EMPI.html?id="+id);
		$("#ctUrl").attr("href","../retrieve/EMPI02.html?id="+id);
		
		var obj = {};
		$(data).each(function(i,item){
			if(item.patientId == id){
				obj = item;
			}
		});
		
		var tr1 = $("#pTable tr:eq(0)");
		tr1.find("span:eq(0)").html(obj.name);
		tr1.find("span:eq(1)").html(obj.sex);
		tr1.find("span:eq(2)").html(obj.age);	
		
	});
	
})(jQuery)