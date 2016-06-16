// JavaScript Document
$(function(){

    LT.init();

    LT.FieldType = {
        AGE:{type:'num'},
        SEX_NAME:{type:'bool',y:'男',n:'女'},
        CREATE_DATETIME:{type:'time'},
        CHIEF_COMPLAINT:{type:'txt'},

        OUTP_COST_AMOUNT:{type:'num'},
        MARITAL_STATUS:{type:'bool',y:'已婚',n:'未婚'},
        DIAG_DATETIME:{type:'time'},
        DIAG_NAME:{type:'txt'},

        CREATE_NAME:{type:'txt'},
        NATION:{type:'txt'},
        OCCUPATIENTION:{type:'txt'},
        NATIONNALITY:{type:'txt'},

        DEPT_NAME:{type:'txt'},
        ALLERGY_HISTORY_FLAG:{type:'num'},
        PRESENT_DISEASE_HISTORY:{type:'txt'},
        PAST_HISTORY:{type:'txt'},
        PATIENT_SOURCE:{type:'num'},
        PHYSICAL_EXAM:{type:'txt'},

        MASTER_FLAG:{type:'bool',y:1,n:2},
        DIAG_DATETIME:{type:'time'},
        TREAT_RESULT:{type:'txt'},

        ADVICE_ITEM_CONTENT:{type:'txt'},
        ADVICE_REMARK:{type:'txt'},
        ADVICE_OPEN_DATETIME:{type:'time'},
        ADVICE_SOURCE:{type:'num'},
        DRUG_SPEC:{type:'txt'},
        DRUG_DOSAGE:{type:'txt'},
        DRUG_UNIT:{type:'txt'},
        DRUG_USAGE_WAYT:{type:'txt'},
        DRUG_USAGE_FREQUENCY:{type:'txt'},
        DURATION_TIME:{type:'txt'},
        DURATION_TIME_UNIT:{type:'txt'},

        RECIPE_TYPE_CODE:{type:'num'},
        RECIPE_OPEN_DATE:{type:'time'},
        RECIPE_EFFECTIVE_DAY:{type:'num'},
        RECIPE_OPENDOCTOR_NAME:{type:'txt'},
        ALLOCATE_PERSON_NAME:{type:'txt'},
        VERIFY_PERSON_NAME:{type:'txt'},
        DISPENSING_PERSON_NAME:{type:'txt'},
        RECIPE_COSTS_AMOUNT:{type:'num'},

        AREA_NAME:{type:'txt'},
        ROOM_NO:{type:'txt'},
        BED_NO:{type:'txt'},
        INP_DATE:{type:'time'},
        COMMUNICABLE_DISEASES_HISTORY:{type:'txt'},
        OPERATION_HISTORY:{type:'txt'},
        BLOOD_TRANSFUSION_HISTORY:{type:'txt'},
        ALLERGY_HISTORY:{type:'txt'},
        DISHOSPITAL_DATETIME:{type:'time'},
        DISHOSPITAL_SITUATION:{type:'txt'},

        SYMPTOM_DESC:{type:'txt'},
        INTERFERE_NAME:{type:'txt'},
        OPERATION_DATE:{type:'time'},
        EXAM_RESULT:{type:'num'},
        ALLERGY_TYPE:{type:'bool',y:1,n:2},
        ALLERGY_DRUG_NAME:{type:'txt'}


    };

    $(".set-list .btn-view").unbind('click').bind('click',function(){  //报表组件设置预览按钮
        var url = $(this).attr('data-url');
        var name = $(this).attr('data-name');
        var num;
        if(name == '表格'){num = 680;}else{ num = 480;}
        $.post(url,function(data){
            Prompt.init({
                title: '报表模板设置'+name+'预览',
                width: num,
                shade : true,
                html : data
            });
        },'html');
    });

    $(".task-list").delegate(".js-detail","click",function(){
        Prompt.init({
            title: '预览',
            width: 560,
            shade : true,
            html : '<div class="area"><div class="echart-bar t-c"><img src="'+$(this).attr('data-id')+'" /></div></div>'
        });
    });

    $(".task-list ").delegate(".js-del","click",function(){//删除模块
        var id = $(this).attr('data-id');
        Prompt.init({
            title: '删除模块',
            width: 460,
            height: 200,
            shade : true,
            html : '<div class="zl_wy_sc">您确认删除此模块吗？</div><input id="task-id" type="hidden" value="'+id+'">',
            ConfirmFun : save,
            CancelFun : true
        });
    });
    function save(){
        //COMPONENT_NAME
        var id = $("#task-id").val();
//		$.post('ajax/del.html',{id:id},function(data){
//			if (data.success) {
//				MU.msgTips('success',data.message);
//				$("#task-item-"+id).remove();
//				Prompt.hide();
//			}else{
//				MU.msgTips('error',data.message);
//			};
//		},'json')
        var ds = new Array();
        for(var i=0;i<Index.initModuleDatas.length;i++){
            var curD = Index.initModuleDatas[i];
            if(curD.COMPONENT_NAME != id){
                ds.push(curD);
            }
        }

        Index.initModuleDatas = ds;

        Index.qryData();
    }



    $('.tab-nav-left li').click(function(){  //更换查询条件tab样式
        if($(this).hasClass('activeTab'))
            return;
        $('.tab-nav-left li').removeClass('activeTab');
        $(this).addClass('activeTab');
        var tabId = $(this).attr('tabId');
        $('#tab-nav-con > div').hide();
        $('#' + tabId).show();
    });

    $('#step1Btn').click(function(){//点击增加组件第一步按钮向本地缓存localstorage内插入查询条件数据
        var qryConditionTrs = $("#qryConditonTb").find("tr");
        var curModuleQryConditions = new Array();
        qryConditionTrs.each(function(index){

//			var curFieldType = LT.FieldType[$(this).attr("data-field")];
//			if($(this).hasClass('checked')){
//				console.log('checked');
//				if(curFieldType.type == 'num'){ 
            var curFieldType = LT.FieldType[$(this).attr("data-id")];
            if(curFieldType.type == 'num'){
                var qryCondition = {};
                qryCondition.id = $(this).attr("data-id");
                if($.trim($(this).find('[data-id="min"]').val()) != ""){
                    qryCondition.min =$.trim($(this).find('[data-id="min"]').val())
                }

                if($.trim($(this).find('[data-id="max"]').val()) != ""){
                    qryCondition.max =$.trim($(this).find('[data-id="max"]').val())
                }

                console.log(qryCondition);
                curModuleQryConditions.push(qryCondition);
            }else if(curFieldType.type == 'bool'){
                var qryCondition = {};
                qryCondition.id = $(this).attr("data-id");
                qryCondition.val =$(this).find('label.checked').text();
                console.log(qryCondition);
                curModuleQryConditions.push(qryCondition);
            }else if(curFieldType.type == 'time'){
                if($.trim($('[data-time='+$(this).attr("data-id")+']').val()).length == 23){
                    var dates =  $.trim($('[data-time='+$(this).attr("data-id")+']').val()).split(" 至 ");
                    var qryCondition = {};
                    qryCondition.id = $(this).attr("data-id");
                    qryCondition.minTime =moment(dates[0]).toDate().getTime();
                    qryCondition.maxTime =moment(dates[1]).toDate().getTime();
                    console.log(qryCondition);
                    curModuleQryConditions.push(qryCondition);

                }
            }else if(curFieldType.type == 'txt'){
                if($.trim($('[data-val='+$(this).attr("data-id")+']').val()) != ""){
                    var qryCondition = {};
                    qryCondition.id = $(this).attr("data-id");
                    qryCondition.txt =$.trim($('[data-val='+$(this).attr("data-id")+']').val());
                    console.log(qryCondition);
                    curModuleQryConditions.push(qryCondition);

                }
            }
        });

        localStorage.curModuleQryConditions = JSON.stringify(curModuleQryConditions);
        console.log(localStorage);
    });



    $(".tab-result").delegate("em.del","click",function(){
        $('[data-field="'+$(this).parent().attr('data-id')+'"]').removeClass('checked');
        $(this).parent().remove();
        //同时删除上述勾选checkbox


    });


    $('#step2Btn').click(function(){//点击增加组件第一步按钮向本地缓存localstorage内插入查询条件数据
        var resultLabels = $("#tab-nav-con li label.checked");
        var curModuleResultFields = new Array();
        resultLabels.each(function(index){
            curModuleResultFields.push({fieldId:$(this).attr('data-field'),fieldDesc:$(this).text()})
        })

        localStorage.curModuleResultFields = JSON.stringify(curModuleResultFields);
    });






    $("#dataFilter").unbind('click').bind('click',function(){    //数据筛选弹出层
        var url = $(this).attr('data-url');
        $.post(url,function(data){
            Prompt.init({
                title: '数据筛选',
                width: 460,
                shade : true,
                html : data,
                ConfirmFun : submit,
                CancelFun : true
            });
            LT.init();
            $(".filter-list li label").each(function(){
                if($(this).hasClass('checked')){
                    $(this).parent().find('.masks').hide();
                }
            });
            $(".filter-list li label").click(function(){
                $('.masks').show();
                $(this).parent().find('.masks').hide();
            });
        },'html');
    });
    function submit(){
        var name = $(".filter-list label.checked").text();
        var data = $(".filter-list label.checked").next().find('p').text();
        if(data == '请选择'){
            MU.msgTips('warn','请选择'+name);
            return false;
        }else{
            $('#dataFilter').val(name+'：'+data);
        }
    }

});

var LT = {
    init: function(){
        if(! ('patientInfos' in localStorage)){
            console.log('load data to localStorage')
            var patientInfos = [{"ALLERGY_TYPE":2,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1455724800000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"银屑病，高血脂，高血压","PATIENT_SOURCE":1,"PATIENT_ID":954,"DRUG_USAGE_FREQUENCY":"2","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":3200,"ROOM_NO":"368","PAST_HISTORY":"无","DIAG_DATETIME":1455724800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":7500,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"马德新","DURATION_TIME":"30","MARITAL_STATUS":"已婚","INP_DATE":1455724800000,"ALLOCATE_PERSON_NAME":"马德新","VERIFY_PERSON_NAME":"马德新","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.25","DURATION_TIME_UNIT":"天","BED_NO":"3681","DISHOSPITAL_DATETIME":1456502400000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.25g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1455724800000,"AGE":48,"DISPENSING_PERSON_NAME":"马德新","TREAT_RESULT":"未治愈","CREATE_NAME":"郭陆武","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":2,"OCCUPATIENTION":"其他","RECIPE_OPEN_DATE":1455724800000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1455724800000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":2,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1455811200000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"皮症","PATIENT_SOURCE":1,"PATIENT_ID":955,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":548,"ROOM_NO":"475","PAST_HISTORY":"无","DIAG_DATETIME":1455811200000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3842,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"郭陆武","DURATION_TIME":"24","MARITAL_STATUS":"已婚","INP_DATE":1455811200000,"ALLOCATE_PERSON_NAME":"郭陆武","VERIFY_PERSON_NAME":"郭陆武","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.25","DURATION_TIME_UNIT":"天","BED_NO":"3713","DISHOSPITAL_DATETIME":1456416000000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.25g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1455811200000,"AGE":35,"DISPENSING_PERSON_NAME":"郭陆武","TREAT_RESULT":"治愈","CREATE_NAME":"贵奂","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"文员","RECIPE_OPEN_DATE":1455811200000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1455811200000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456070400000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"皮症","PATIENT_SOURCE":3,"PATIENT_ID":956,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":869,"ROOM_NO":"620","PAST_HISTORY":"无","DIAG_DATETIME":1456070400000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3864,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"贵奂","DURATION_TIME":"7","MARITAL_STATUS":"已婚","INP_DATE":1456070400000,"ALLOCATE_PERSON_NAME":"贵奂","VERIFY_PERSON_NAME":"贵奂","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.26","DURATION_TIME_UNIT":"天","BED_NO":"2298","DISHOSPITAL_DATETIME":1456588800000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.26g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1456070400000,"AGE":32,"DISPENSING_PERSON_NAME":"贵奂","TREAT_RESULT":"治愈","CREATE_NAME":"杨诗琪","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":2,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1456070400000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456070400000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456329600000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"高血脂","PATIENT_SOURCE":1,"PATIENT_ID":957,"DRUG_USAGE_FREQUENCY":"2","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":284,"ROOM_NO":"255","PAST_HISTORY":"无","DIAG_DATETIME":1456329600000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3747,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"杨诗琪","DURATION_TIME":"19","MARITAL_STATUS":"未婚","INP_DATE":1456329600000,"ALLOCATE_PERSON_NAME":"杨诗琪","VERIFY_PERSON_NAME":"杨诗琪","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.27","DURATION_TIME_UNIT":"天","BED_NO":"1024","DISHOSPITAL_DATETIME":1456934400000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.27g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1456329600000,"AGE":14,"DISPENSING_PERSON_NAME":"杨诗琪","TREAT_RESULT":"治愈","CREATE_NAME":"李雅文","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1456329600000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456329600000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":2,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456502400000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"高血压","PATIENT_SOURCE":1,"PATIENT_ID":958,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":924,"ROOM_NO":"875","PAST_HISTORY":"无","DIAG_DATETIME":1456502400000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":2949,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"李雅文","DURATION_TIME":"7","MARITAL_STATUS":"未婚","INP_DATE":1456502400000,"ALLOCATE_PERSON_NAME":"李雅文","VERIFY_PERSON_NAME":"李雅文","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.28","DURATION_TIME_UNIT":"天","BED_NO":"2217","DISHOSPITAL_DATETIME":1457193600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.28g","RECIPE_EFFECTIVE_DAY":40,"CREATE_DATETIME":1456502400000,"AGE":26,"DISPENSING_PERSON_NAME":"李雅文","TREAT_RESULT":"治愈","CREATE_NAME":"唐行轲","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1456502400000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456502400000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456588800000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":3,"PATIENT_ID":959,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":314,"ROOM_NO":"970","PAST_HISTORY":"无","DIAG_DATETIME":1456588800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3056,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"唐行轲","DURATION_TIME":"21","MARITAL_STATUS":"已婚","INP_DATE":1456588800000,"ALLOCATE_PERSON_NAME":"唐行轲","VERIFY_PERSON_NAME":"唐行轲","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.29","DURATION_TIME_UNIT":"天","BED_NO":"2857","DISHOSPITAL_DATETIME":1457366400000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.29g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1456588800000,"AGE":37,"DISPENSING_PERSON_NAME":"唐行轲","TREAT_RESULT":"治愈","CREATE_NAME":"周奕","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"其他","RECIPE_OPEN_DATE":1456588800000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456588800000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456761600000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":1,"PATIENT_ID":960,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":941,"ROOM_NO":"317","PAST_HISTORY":"无","DIAG_DATETIME":1456761600000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3843,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"周奕","DURATION_TIME":"16","MARITAL_STATUS":"未婚","INP_DATE":1456761600000,"ALLOCATE_PERSON_NAME":"周奕","VERIFY_PERSON_NAME":"周奕","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.3","DURATION_TIME_UNIT":"天","BED_NO":"2654","DISHOSPITAL_DATETIME":1457539200000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.30g","RECIPE_EFFECTIVE_DAY":50,"CREATE_DATETIME":1456761600000,"AGE":28,"DISPENSING_PERSON_NAME":"周奕","TREAT_RESULT":"治愈","CREATE_NAME":"谭丽","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1456761600000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456761600000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1456848000000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":961,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":774,"ROOM_NO":"987","PAST_HISTORY":"无","DIAG_DATETIME":1456848000000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3370,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"谭丽","DURATION_TIME":"12","MARITAL_STATUS":"未婚","INP_DATE":1456848000000,"ALLOCATE_PERSON_NAME":"谭丽","VERIFY_PERSON_NAME":"谭丽","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.31","DURATION_TIME_UNIT":"天","BED_NO":"3098","DISHOSPITAL_DATETIME":1457452800000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.31g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1456848000000,"AGE":34,"DISPENSING_PERSON_NAME":"谭丽","TREAT_RESULT":"治愈","CREATE_NAME":"张小林","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1456848000000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1456848000000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457020800000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":962,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":437,"ROOM_NO":"936","PAST_HISTORY":"无","DIAG_DATETIME":1457020800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":4255,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"张小林","DURATION_TIME":"5","MARITAL_STATUS":"已婚","INP_DATE":1457020800000,"ALLOCATE_PERSON_NAME":"张小林","VERIFY_PERSON_NAME":"张小林","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.32","DURATION_TIME_UNIT":"天","BED_NO":"2387","DISHOSPITAL_DATETIME":1457625600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.32g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1457020800000,"AGE":42,"DISPENSING_PERSON_NAME":"张小林","TREAT_RESULT":"治愈","CREATE_NAME":"杨玲","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1457020800000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457020800000,"ADVICE_SOURCE":2},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457193600000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":3,"PATIENT_ID":963,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":925,"ROOM_NO":"630","PAST_HISTORY":"无","DIAG_DATETIME":1457193600000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":2883,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"杨玲","DURATION_TIME":"14","MARITAL_STATUS":"已婚","INP_DATE":1457193600000,"ALLOCATE_PERSON_NAME":"杨玲","VERIFY_PERSON_NAME":"杨玲","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.33","DURATION_TIME_UNIT":"天","BED_NO":"1717","DISHOSPITAL_DATETIME":1457798400000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.33g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1457193600000,"AGE":21,"DISPENSING_PERSON_NAME":"杨玲","TREAT_RESULT":"治愈","CREATE_NAME":"屈鑫燕","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1457193600000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457193600000,"ADVICE_SOURCE":2},{"ALLERGY_TYPE":2,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457452800000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":964,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":431,"ROOM_NO":"307","PAST_HISTORY":"无","DIAG_DATETIME":1457452800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":2225,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"屈鑫燕","DURATION_TIME":"15","MARITAL_STATUS":"未婚","INP_DATE":1457452800000,"ALLOCATE_PERSON_NAME":"屈鑫燕","VERIFY_PERSON_NAME":"屈鑫燕","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.34","DURATION_TIME_UNIT":"天","BED_NO":"3523","DISHOSPITAL_DATETIME":1457971200000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.34g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1457452800000,"AGE":28,"DISPENSING_PERSON_NAME":"屈鑫燕","TREAT_RESULT":"治愈","CREATE_NAME":"薛槐敏","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"其他","RECIPE_OPEN_DATE":1457452800000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457452800000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457539200000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":965,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":798,"ROOM_NO":"272","PAST_HISTORY":"无","DIAG_DATETIME":1457539200000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3726,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"薛槐敏","DURATION_TIME":"11","MARITAL_STATUS":"已婚","INP_DATE":1457539200000,"ALLOCATE_PERSON_NAME":"薛槐敏","VERIFY_PERSON_NAME":"薛槐敏","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.35","DURATION_TIME_UNIT":"天","BED_NO":"2360","DISHOSPITAL_DATETIME":1458489600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.35g","RECIPE_EFFECTIVE_DAY":10,"CREATE_DATETIME":1457539200000,"AGE":36,"DISPENSING_PERSON_NAME":"薛槐敏","TREAT_RESULT":"治愈","CREATE_NAME":"陈小红","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"个体户","RECIPE_OPEN_DATE":1457539200000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457539200000,"ADVICE_SOURCE":2},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457798400000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":1,"PATIENT_ID":966,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":878,"ROOM_NO":"588","PAST_HISTORY":"无","DIAG_DATETIME":1457798400000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3227,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"陈小红","DURATION_TIME":"14","MARITAL_STATUS":"已婚","INP_DATE":1457798400000,"ALLOCATE_PERSON_NAME":"陈小红","VERIFY_PERSON_NAME":"陈小红","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.36","DURATION_TIME_UNIT":"天","BED_NO":"1160","DISHOSPITAL_DATETIME":1458748800000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.36g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1457798400000,"AGE":71,"DISPENSING_PERSON_NAME":"陈小红","TREAT_RESULT":"治愈","CREATE_NAME":"朱翼","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":2,"OCCUPATIENTION":"编导","RECIPE_OPEN_DATE":1457798400000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457798400000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1457884800000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":1,"PATIENT_ID":967,"DRUG_USAGE_FREQUENCY":"2","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":311,"ROOM_NO":"905","PAST_HISTORY":"无","DIAG_DATETIME":1457884800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":4283,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"朱翼","DURATION_TIME":"15","MARITAL_STATUS":"已婚","INP_DATE":1457884800000,"ALLOCATE_PERSON_NAME":"朱翼","VERIFY_PERSON_NAME":"朱翼","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.37","DURATION_TIME_UNIT":"天","BED_NO":"2531","DISHOSPITAL_DATETIME":1459094400000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.37g","RECIPE_EFFECTIVE_DAY":40,"CREATE_DATETIME":1457884800000,"AGE":87,"DISPENSING_PERSON_NAME":"朱翼","TREAT_RESULT":"治愈","CREATE_NAME":"潘千","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"工人","RECIPE_OPEN_DATE":1457884800000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1457884800000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1458144000000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":3,"PATIENT_ID":968,"DRUG_USAGE_FREQUENCY":"2","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":304,"ROOM_NO":"630","PAST_HISTORY":"无","DIAG_DATETIME":1458144000000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":2982,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"潘千","DURATION_TIME":"13","MARITAL_STATUS":"已婚","INP_DATE":1458144000000,"ALLOCATE_PERSON_NAME":"潘千","VERIFY_PERSON_NAME":"潘千","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.38","DURATION_TIME_UNIT":"天","BED_NO":"1976","DISHOSPITAL_DATETIME":1459353600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.38g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1458144000000,"AGE":25,"DISPENSING_PERSON_NAME":"潘千","TREAT_RESULT":"治愈","CREATE_NAME":"张恒","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"主持人","RECIPE_OPEN_DATE":1458144000000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1458144000000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1458316800000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":969,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":651,"ROOM_NO":"946","PAST_HISTORY":"无","DIAG_DATETIME":1458316800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3522,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"张恒","DURATION_TIME":"27","MARITAL_STATUS":"未婚","INP_DATE":1458316800000,"ALLOCATE_PERSON_NAME":"张恒","VERIFY_PERSON_NAME":"张恒","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.39","DURATION_TIME_UNIT":"天","BED_NO":"1687","DISHOSPITAL_DATETIME":1459440000000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.39g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1458316800000,"AGE":64,"DISPENSING_PERSON_NAME":"张恒","TREAT_RESULT":"治愈","CREATE_NAME":"谢文婷","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"导演","RECIPE_OPEN_DATE":1458316800000,"ADVICE_REMARK":"少吃辣","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1458316800000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1458403200000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":3,"PATIENT_ID":970,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":424,"ROOM_NO":"635","PAST_HISTORY":"无","DIAG_DATETIME":1458403200000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":2122,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"谢文婷","DURATION_TIME":"22","MARITAL_STATUS":"已婚","INP_DATE":1458403200000,"ALLOCATE_PERSON_NAME":"谢文婷","VERIFY_PERSON_NAME":"谢文婷","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.4","DURATION_TIME_UNIT":"天","BED_NO":"3969","DISHOSPITAL_DATETIME":1459699200000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.40g","RECIPE_EFFECTIVE_DAY":40,"CREATE_DATETIME":1458403200000,"AGE":47,"DISPENSING_PERSON_NAME":"谢文婷","TREAT_RESULT":"治愈","CREATE_NAME":"冯瑾娜","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"美甲师","RECIPE_OPEN_DATE":1458403200000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1458403200000,"ADVICE_SOURCE":1},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1458576000000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"男","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":971,"DRUG_USAGE_FREQUENCY":"1","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":967,"ROOM_NO":"452","PAST_HISTORY":"无","DIAG_DATETIME":1458576000000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3711,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"冯瑾娜","DURATION_TIME":"5","MARITAL_STATUS":"未婚","INP_DATE":1458576000000,"ALLOCATE_PERSON_NAME":"冯瑾娜","VERIFY_PERSON_NAME":"冯瑾娜","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.41","DURATION_TIME_UNIT":"天","BED_NO":"3604","DISHOSPITAL_DATETIME":1459785600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":2,"DRUG_SPEC":"0.41g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1458576000000,"AGE":39,"DISPENSING_PERSON_NAME":"冯瑾娜","TREAT_RESULT":"治愈","CREATE_NAME":"张英","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":3,"OCCUPATIENTION":"厨师","RECIPE_OPEN_DATE":1458576000000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1458576000000,"ADVICE_SOURCE":2},{"ALLERGY_TYPE":1,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1458576000000,"DRUG_USAGE_WAY":"外敷","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":3,"PATIENT_ID":972,"DRUG_USAGE_FREQUENCY":"2","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":222,"ROOM_NO":"417","PAST_HISTORY":"无","DIAG_DATETIME":1458576000000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":4315,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"张英","DURATION_TIME":"5","MARITAL_STATUS":"已婚","INP_DATE":1458576000000,"ALLOCATE_PERSON_NAME":"张英","VERIFY_PERSON_NAME":"张英","MASTER_FLAG":1,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.42","DURATION_TIME_UNIT":"天","BED_NO":"3266","DISHOSPITAL_DATETIME":1459699200000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.42g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1458576000000,"AGE":47,"DISPENSING_PERSON_NAME":"张英","TREAT_RESULT":"治愈","CREATE_NAME":"王琳","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":2,"OCCUPATIENTION":"快递员","RECIPE_OPEN_DATE":1458576000000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1458576000000,"ADVICE_SOURCE":3},{"ALLERGY_TYPE":3,"INTERFERE_NAME":"吡硫嗡锌","PHYSICAL_EXAM":"正常","ADVICE_OPEN_DATETIME":1459180800000,"DRUG_USAGE_WAY":"口服","NATIONNALITY":"中国","SEX_NAME":"女","PRESENT_DISEASE_HISTORY":"无","PATIENT_SOURCE":2,"PATIENT_ID":973,"DRUG_USAGE_FREQUENCY":"3","COMMUNICABLE_DISEASES_HISTORY":"无","RECIPE_COSTS_AMOUNT":909,"ROOM_NO":"507","PAST_HISTORY":"无","DIAG_DATETIME":1459180800000,"ALLERGY_DRUG_NAME":"无","DIAG_NAME":"寻常型斑块型","OPERATION_HISTORY":"无","ADVICE_ITEM_CONTENT":"住院诊断","DRUG_UNIT":"克","ALLERGY_HISTORY":"无","OUTP_COST_AMOUNT":3973,"SYMPTOM_DESC":"寻常型斑块型","CHIEF_COMPLAINT":"皮肤异常","RECIPE_OPENDOCTOR_NAME":"王琳","DURATION_TIME":"26","MARITAL_STATUS":"未婚","INP_DATE":1459180800000,"ALLOCATE_PERSON_NAME":"王琳","VERIFY_PERSON_NAME":"王琳","MASTER_FLAG":2,"DEPT_NAME":"皮肤科","DRUG_DOSAGE":"0.43","DURATION_TIME_UNIT":"天","BED_NO":"2843","DISHOSPITAL_DATETIME":1460217600000,"ALLERGY_HISTORY_FLAG":false,"EXAM_RESULT":1,"DRUG_SPEC":"0.43g","RECIPE_EFFECTIVE_DAY":30,"CREATE_DATETIME":1459180800000,"AGE":31,"DISPENSING_PERSON_NAME":"王琳","TREAT_RESULT":"治愈","CREATE_NAME":"汪海源","DISHOSPITAL_SITUATION":"治愈","RECIPE_TYPE_CODE":1,"OCCUPATIENTION":"其他","RECIPE_OPEN_DATE":1459180800000,"ADVICE_REMARK":"注意休息","AREA_NAME":"31病区普外科","BLOOD_TRANSFUSION_HISTORY":"无","NATION":"汉族","OPERATION_DATE":1459180800000,"ADVICE_SOURCE":2}];

            localStorage.patientInfos = JSON.stringify(patientInfos);
        }
        this.select();
        this.choose();
    },
    choose:function(){
        $("body").on('click','label.checkbox',function(){   //单复选按钮\
            console.log("select---------------------------");
            if($(this).hasClass('disabled')){return false;}
            if($(this).hasClass('radio')){
                $(this).addClass('checked').siblings().removeClass('checked');
                var $name = $(this).attr('name');
                $(".radio[name="+$name+"]").removeClass('checked');
                $(this).addClass('checked');
            }else{
                $(this)[$(this).hasClass('checked')?'removeClass':'addClass']('checked');
                // add by billchien

                if(typeof($(this).attr("data-field")) != "undefined"){
                    var curFieldType = LT.FieldType[$(this).attr("data-field")];
                    if($(this).hasClass('checked')){
                        console.log('checked');

                        if(curFieldType.type == 'num'){
                            $('#qryConditonTb').append('<tr data-id="'+$(this).attr("data-field")+'"><td class="cNo" width="80px"></td><td width="105">'+$('li.activeTab').text()+'</td><td>'+$(this).text()+'： <input type="text" data-id="min" class="form-control w50" />-<input type="text" data-id="max" class="form-control w50" /></td></tr>');
                        }else if(curFieldType.type == 'bool'){
                            $('#qryConditonTb').append('<tr data-id="'+$(this).attr("data-field")+'"><td class="cNo" width="80px"></td><td width="105">'+$('li.activeTab').text()+'</td><td>'+$(this).text()+'： <label class="checkbox radio checked"  data-id="y">'+curFieldType.y+'</label><label class="checkbox radio"  data-id="n">'+curFieldType.n+'</label></td></tr>');
                        }else if(curFieldType.type == 'time'){
                            $('#qryConditonTb').append('<tr data-id="'+$(this).attr("data-field")+'"><td class="cNo" width="80px"></td><td width="105">'+$('li.activeTab').text()+'</td><td>'+$(this).text()+'： <input type="text" class="form-control time" value="" data-time="'+$(this).attr("data-field")+'"/></td></tr>');
                            $('[data-time='+$(this).attr("data-field")+']').daterangepicker({
                                startDate: moment().subtract(30, 'days'),
                                endDate: moment().subtract(0, 'days'),
                                minDate: moment().subtract(365, 'days'),
                                maxDate: moment().subtract(0, 'days'),
                                dateLimit: {days: 365},
                                locale: {
                                    format: 'YYYY-MM-DD',
                                    separator: " 至 ",
                                    applyLabel: '确认',
                                    cancelLabel: '取消',
                                    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                                    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                                    firstDay: 1
                                }
                            });

                            //    daterangepicker(
                            //    {
                            //        startDate: moment().subtract('days', 30),//开始选中的时间，29天前
                            //        endDate: moment().subtract('days', 0),//结束选中的时间，昨天
                            //        minDate: moment().subtract('days', 365),//'01/01/2012',可选择最早时间，30天前
                            //        maxDate: moment().subtract('days', 0),//'12/31/2014',可选择最晚时间，昨天
                            //        dateLimit: { days: 365 },
                            //        timePickerIncrement: 1,
                            //        opens: 'right',
                            //        buttonClasses: ['btn btn-default'],
                            //        applyClass: 'btn-small btn-primary',
                            //        cancelClass: 'btn-small',
                            //        format: 'YYYY-MM-DD',//'MM/DD/YYYY',
                            //        separator: ' 至 ',
                            //        locale: {
                            //            applyLabel: '确认',
                            //            daysOfWeek: ['日', '一', '二', '三', '四', '五','六'],
                            //            monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                            //            firstDay: 1
                            //        }
                            //    },
                            //    function(start, end) {
                            //        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                            //
                            //    }
                            //);
                        }else if(curFieldType.type == 'txt'){
                            $('#qryConditonTb').append('<tr data-id="'+$(this).attr("data-field")+'"><td class="cNo" width="80"></td><td width="105">'+$('li.activeTab').text()+'</td><td>'+$(this).text()+'：<input data-val="'+$(this).attr("data-field")+'" type="text" class="form-control w120" /></td></tr>');
                        }

                        var cnos=$("#qryConditonTb").find("td.cNo");
                        var txtTitle = '';
                        cnos.each(function(index){
                            $(this).text('条件'+(index+1));
                            if(index != (cnos.length -1)){
                                txtTitle = txtTitle + ' 条件'+(index+1) +' AND ';
                            }else{
                                txtTitle = txtTitle + ' 条件'+(index+1);
                            }

                        });

                        //条件组合
                        $('.tab-group input').val(txtTitle);


                    }else{
                        console.log('unChecked');
                        $('[data-id="'+$(this).attr("data-field")+'"]').remove();
                        var cnos=$("#qryConditonTb").find("td.cNo");
                        var txtTitle = '';
                        cnos.each(function(index){
                            $(this).text('条件'+(index+1));
                            if(index != (cnos.length -1)){
                                txtTitle = txtTitle + ' 条件'+(index+1) +' AND ';
                            }else{
                                txtTitle = txtTitle + ' 条件'+(index+1);
                            }
                        });

                        // 条件组合
                        //条件组合
                        $('.tab-group input').val(txtTitle);

                    }



                }
                if($(this).hasClass('checked')){

                    $('div.tab-result ul').append('<li data-id="'+$(this).attr('data-field')+'">'+$("div.tab-nav-left li.activeTab ").text()+': &lt; '+$(this).text()+' &gt;<em class="del"></em></li>');

                }else{
                    $('div.tab-result li[data-id='+$(this).attr('data-field')+']').remove();
                }


                //end add by billchien
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
            var id = $(this).attr('data-id');
            var action = $(this).attr('action');
            var call = $(this).parents('.lt-select').attr('data-call');
            var url = $(this).parents('.lt-select').attr('data-url');
            if(action && action != undefined){
                window.location.href = action;
            }else{
                $(this).parents('.lt-select').find('p').text(txt);
                $(this).parents('.lt-select').find('p').attr('data',id);
                $(this).parent().slideUp(600);
            }
            if(call && call != undefined){
                LT.setChecked(id,txt,url);
            }
        });
    }
}