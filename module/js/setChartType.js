var SetChartType = {}

SetChartType.init = function(){
	$(".lt-select ").delegate("li","click",function(){ 
		$(this).parents('.lt-select').find('p').text($(this).text());
	}); 
	// 初始化页面下拉参数   下拉参数都为结果列名
	 var curModuleResultFields = JSON.parse(localStorage.curModuleResultFields)
	 var xSelect = '';
	 for(var i=0;i< curModuleResultFields.length;i++){
		 xSelect = xSelect + '<li>'+curModuleResultFields[i].fieldDesc+'</li>';
	 }
	 $('#xSelect').append(xSelect);
	 $('#ySelect').append(xSelect);
	 $('#cSelect').append(xSelect);
}