(function($){
	$(function(){
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
	})
})(jQuery)