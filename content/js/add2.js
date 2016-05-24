(function($){
	$(function(){
		var reportName = window.localStorage.getItem("reportName");
		var remarkInfo = window.localStorage.getItem("remarkInfo");
		$("#reportName").val(reportName);
		$("#remarkInfo").val(remarkInfo);
		
		var str = window.location.search;
		var start = str.indexOf("=");
		var type = str.substr(start + 1);
		
		//type = decodeURIComponent(type);
		var types = type.split(",");
		makeImage(types);
		
		
		$("#saveTotal").on("click",function(){
			var types = "";
			$("#allTbody .lt-select p").each(function(){
				types += $(this).attr("type")+",";
				
			})
			
			var typeArray = types.substring(0,types.length-1).split(",");
			makeImage(typeArray);
			$(".c-set-box").hide();
			LT.init();
		});
		
		$("#add2Save").on("click",function(){

			var reportName = $("#reportName").val();

			var fData = JSON.parse(window.localStorage.getItem("fData"))||[];
			var obj = {
					"name":reportName,
					"type":"常用",
					"depart":"皮肤科",
					"time":HDOWIM.per.st,
					"ids":"ajax/view2.html"
			}
			fData.push(obj);
			window.localStorage.setItem("fData", JSON.stringify(fData));
			window.localStorage.setItem("refresh", "1");
			
			localStorage.removeItem("reportName");
			localStorage.removeItem("remarkInfo");
			
			window.location.href="index.html";
		});
	})
	function makeImage(types){
		var html = "";
		html += "<div class='row'>";
		
		if(types.length == 1){
			html += "<div class='box col-2'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[0]+".png' width='360' /></div>";
			html += "</div>";
			html += "<div class='box col-2'>";
			html += "</div>";
		}else if(types.length == 2){
			html += "<div class='box col-2'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[0]+".png' width='360' /></div>";
			html += "</div>";
			html += "<div class='box col-2'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[1]+".png' width='360' /></div>";
			html += "</div>";
		}else{
			html += "<div class='box col-3'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[0]+".png' width='240' /></div>";
			html += "</div>";
			html += "<div class='box col-3'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[1]+".png' width='240' /></div>";
			html += "</div>";
			html += "<div class='box col-3'>";
			html += "<div class='echart t-c'><img src='../../html/module/images/views/pic"+types[2]+".png' width='240' /></div>";
			html += "</div>";
		}
		html += "</div>";
		
		$("#reportPoolBox").append(html);
		LT.init();
	}
	
	function typeToPicture(types){
		var picName = "";
		for(var i=0,len=types.length;i<len;i++){
			picName += "pic"+types[i]+".png";
			
		}
		return picName;
	}
})(jQuery)