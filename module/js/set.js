var Set = {}

Set.qryResult = new Array();
//Add.queryTypePatientCommonInfoAge=function(){
//	// 事件触发往条件列表中插入条件
//}
//Add.queryTypePatientCommonInfoSex=function(){
//	
//}


//Add.queryType.patientCommonInfoMarriage='bool';//婚姻状态
//Add.queryType.patientCommonInfo_buildTime='time';
//Add.queryType.patientCommonInfo_buildName='string';
//Add.queryType.patientCommonInfo_nation='string';

Set.init = function(){
	console.log('init data');
	console.log(localStorage);
	 var curModuleQryConditions = JSON.parse(localStorage.curModuleQryConditions)
	console.log(curModuleQryConditions);
	 var curModuleResultFields = JSON.parse(localStorage.curModuleResultFields)
	console.log(curModuleResultFields);
	 var patientInfos = JSON.parse(localStorage.patientInfos); 
	console.log(patientInfos);
	
	
	
	// 进行数据筛选
	for(var m in patientInfos){
		//
		var curInfo = patientInfos[m];
		var isOk = true;// 是否符合筛选条件
		for(var i = 0 ; i < curModuleQryConditions.length; i++){
			var curQryCon = curModuleQryConditions[i];
			
			var curFieldType = LT.FieldType[curQryCon.id];
			if(curFieldType.type == 'num'){ 
				if('min' in curQryCon){
					if(curInfo[curQryCon.id] < parseInt(curQryCon.min)){
						isOk = false;
						break;
					}
				}
				
				if('max' in curQryCon){
					if(curInfo[curQryCon.id] > parseInt(curQryCon.max)){
						isOk = false;
						break;
					}
				}
			}else if(curFieldType.type == 'bool'){ 
				if(curInfo[curQryCon.id] != curQryCon.val){
					isOk = false;
					break;
				}
				
			}else if(curFieldType.type == 'time'){ 
				if(curInfo[curQryCon.id] < parseInt(curQryCon.minTime)){
					isOk = false;
					break;
				}
			
				if(curInfo[curQryCon.id] > parseInt(curQryCon.maxTime)){
					isOk = false;
					break;
				}
			}else if(curFieldType.type == 'txt'){ 
				if(curInfo[curQryCon.id].indexOf(curQryCon.txt) == -1 ){
					isOk = false;
					break;
				}
			}
			
			
//			if(curQryCon.id == 'queryTypePatientCommonInfoSex'){
//				if((curQryCon.isMale && curInfo.SEX_NAME == '女') || (!curQryCon.isMale && curInfo.SEX_NAME == '男') ){
//					isOk = false;	
//					break;
//				}
//			}
//			
//			// 日期数据顺便做处理
//			if(curQryCon.id == 'queryTypePatientCommonInfoBuildTime'){
//					if(curInfo.CREATE_DATETIME < parseInt(curQryCon.minTime)){
//						isOk = false;
//						break;
//					}
//				
//					if(curInfo.CREATE_DATETIME > parseInt(curQryCon.maxTime)){
//						isOk = false;
//						break;
//					}
//			}
//			
//			if(curQryCon.id == 'queryTypeOutpMrChiefComplain'){
//				if(curInfo.CHIEF_COMPLAINT.indexOf(curQryCon.txt) == -1 ){
//					isOk = false;
//					break;
//				}
//			}
		}
		
		if(isOk){
			Set.qryResult.push(curInfo);
		}
		 
	}
	
	console.log(Set.qryResult);
	
	
	
	// 进行数据展示
	var th = '<tr><th class="t-l">病人ID</th>';
	for(var i=0; i< curModuleResultFields.length;i++){
		var curField = curModuleResultFields[i];
		th = th + '<th class="t-l">'+ curField.fieldDesc + '</th>';
	}
	th = th + '<th class="t-r">操作</th></tr>';
	
	$('div.task-list thead').append(th);// 拼接表头
	

	// 拼接数据内容
	var tb = '';
	for(var i=0; i< Set.qryResult.length; i++){
		var curInfo = Set.qryResult[i];
		tb = tb + '<tr id="task-item-1" data-id="'+curInfo['PATIENT_ID']+'"><td><a href="../retrieve/EMPI.html?id='+curInfo['PATIENT_ID']+'" class="blue" target="_blank">'+curInfo['PATIENT_ID']+'</a></td>';
		for(var n=0; n< curModuleResultFields.length;n++){
			var curField = curModuleResultFields[n];
			if(curField.fieldId == 'ADVICE_OPEN_DATETIME' || curField.fieldId == 'DIAG_DATETIME' || curField.fieldId == 'INP_DATE' || curField.fieldId == 'DISHOSPITAL_DATETIME' || curField.fieldId == 'CREATE_DATETIME' || curField.fieldId == 'DISHOSPITAL_DATETIME' || curField.fieldId == 'RECIPE_OPEN_DATE' || curField.fieldId == 'OPERATION_DATE'   ){
				tb = tb + '<td>'+ moment(curInfo[curField.fieldId]).format('YYYY-MM-DD') +'</td>';
			}else{
				tb = tb + '<td>'+curInfo[curField.fieldId]+'</td>';
			}
			
		}
		tb = tb + '<td class="t-r"><a class="op del del-btn" href="javascript:;"></a></td></tr>';
	}
	$('div.task-list tbody').append(tb);// 拼数据
	
	$("#pager1").show();
	$("#totalTable").tablesorter({cssHeader: ""}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});

	
	// 初始化分页
//	<div class="right">	<em>共20条记录，每页</em>	<select>		<option>10</option>		<option>20</option>		<option>50</option>	</select> 	<em>条，1/2</em> 	<a href="javascript:void(0)">首页</a> 	<a class="disable" href="javascript:void(0)">上页</a> 	<a href="javascript:void(0)">下页</a>	<a href="javascript:void(0)">末页</a> 	<input class="w20" type="text">	<a class="go" href="javascript:void(0)">GO</a> </div> 
//	if(Set.qryResult.length == 0){
//		// 暂无数据
//	}else if(Set.qryResult.length >  0 && Set.qryResult.length < 11){
//		$('div.page').append('<div class="right">	<em>共'+Set.qryResult.length+'条记录，每页</em>	<select>		<option>10</option>		<option>20</option>		<option>50</option>	</select> 	<em>条，1/1</em> 	<a href="javascript:void(0)">首页</a> 	<a class="disable" href="javascript:void(0)">上页</a> 	<a class="disable" href="javascript:void(0)">下页</a>	<a class="disable" href="javascript:void(0)">末页</a> 	<input class="w20" type="text">	<a class="go" href="javascript:void(0)">GO</a> </div> ');
//	}else{
//		$('div.page').append(' <div class="right">	<em>共'+Set.qryResult.length+'条记录，每页</em>	<select>		<option>10</option>		<option>20</option>		<option>50</option>	</select> 	<em>条，1/2</em> 	<a href="javascript:void(0)">首页</a> 	<a class="disable" href="javascript:void(0)">上页</a> 	<a href="javascript:void(0)">下页</a>	<a href="javascript:void(0)">末页</a> 	<input class="w20" type="text">	<a class="go" href="javascript:void(0)">GO</a> </div>  ');
//	}
	
	$(".task-list ").delegate(".del-btn","click",function(){//删除查询数据
		var pid = $(this).parent().parent().attr('data-id');
		var newResult = new Array();
		for(var i=0; i< Set.qryResult.length; i++){
			var curInfo = Set.qryResult[i];
			 if(pid != curInfo.PATIENT_ID){
				 newResult.push(curInfo);
			 }
		}
		
		Set.qryResult = newResult;
		var tb = '';
		for(var i=0; i< Set.qryResult.length; i++){
			var curInfo = Set.qryResult[i];
			tb = tb + '<tr id="task-item-1" data-id="'+curInfo['PATIENT_ID']+'"><td><a href="../retrieve/EMPI.html?id='+curInfo['PATIENT_ID']+'" class="blue" target="_blank">'+curInfo['PATIENT_ID']+'</a></td>';
			for(var n=0; n< curModuleResultFields.length;n++){
				var curField = curModuleResultFields[n];
				if(curField.fieldId == 'ADVICE_OPEN_DATETIME' || curField.fieldId == 'DIAG_DATETIME' || curField.fieldId == 'INP_DATE' || curField.fieldId == 'DISHOSPITAL_DATETIME' || curField.fieldId == 'CREATE_DATETIME' || curField.fieldId == 'DISHOSPITAL_DATETIME' || curField.fieldId == 'RECIPE_OPEN_DATE' || curField.fieldId == 'OPERATION_DATE'   ){
					tb = tb + '<td>'+ moment(curInfo[curField.fieldId]).format('YYYY-MM-DD') +'</td>';
				}else{
					tb = tb + '<td>'+curInfo[curField.fieldId]+'</td>';
				}
				
			}
			tb = tb + '<td class="t-r"><a class="op del del-btn" href="javascript:;"></a></td></tr>';
		}
		$('div.task-list tbody').empty().html(tb);// 拼数据
		
		$("#pager1").show();
		$("#totalTable").tablesorter({cssHeader: ""}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});

	});
}