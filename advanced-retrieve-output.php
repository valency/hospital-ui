<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 智能检索</title>
    <link rel="stylesheet" href="css/retrieve.css"/>
    <script src="js/advanced-retrieve.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<div class="main clearfix">
<!--    <div class="list-crumb">-->
<!--        <ul class="breadcrumb">-->
<!--            <li><a href="retrieve.php">智能检索</a> <span class="divider"></span></li>-->
<!--            <li class="active">新增-查询条件管理页面</li>-->
<!--        </ul>-->
<!--    </div>-->
<!--    <div class="column-title"><h2 class="f18">新增-查询条件管理页面</h2></div>-->


    <div class="filter-area">
        <div class="tab"><a href="retrieve.php" >快速检索</a><a href="people.php" >我的病人</a><a href="advanced-retrieve.php" class="on">高级检索</a></div>
        <div class="block">
            <div class="mb15">请选择需要输出的结果</div>
            <div class="tab-nav clearfix">
            <div class="tab-nav-left">
                <ul>
                    <li class="activeTab" tabId="tab-nav-con1">病人基本信息</li>
                    <li tabId="tab-nav-con2">病历</li>
                    <li tabId="tab-nav-con3">诊断</li>
                    <li tabId="tab-nav-con4">医嘱</li>
                    <li tabId="tab-nav-con5">处方</li>
                    <li tabId="tab-nav-con6">住院记录</li>
                    <li tabId="tab-nav-con7">检查报告</li>
                </ul>
            </div>
            <div class="tab-nav-con" id="tab-nav-con">
                <div id="tab-nav-con1" style="display:block;">
                    <ul>
                        <li><label class="checkbox" data-id="1" data-field="AGE" >年龄</label></li>
                        <li><label class="checkbox" data-id="2" data-field="SEX_NAME"  >性别</label></li>
                        <li><label class="checkbox" data-id="3" data-field="MARITAL_STATUS">婚姻状况</label></li>
                        <li><label class="checkbox" data-id="4" data-field="CREATE_DATETIME" >建档日期时间</label></li>
                        <li><label class="checkbox" data-id="5" data-field="CREATE_NAME">建档者姓名</label></li>
                        <li><label class="checkbox" data-id="6" data-field="NATION">民族</label></li>
                        <li><label class="checkbox" data-id="7" data-field="OCCUPATIENTION">职业</label></li>
                        <li><label class="checkbox" data-id="8" data-field="NATIONNALITY">国籍</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con2" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="2" data-field="DEPT_NAME">科室</label></li>
                        <li><label class="checkbox" data-id="3" data-field="ALLERGY_HISTORY_FLAG">过敏史标志</label></li>
                        <li><label class="checkbox" data-id="4"  data-field="CHIEF_COMPLAINT" >主诉</label></li>
                        <li><label class="checkbox" data-id="5" data-field="PRESENT_DISEASE_HISTORY">现病史</label></li>
                        <li><label class="checkbox" data-id="6" data-field="PAST_HISTORY">既往史</label></li>
                        <li><label class="checkbox" data-id="7" data-field="PATIENT_SOURCE">病历患者来源</label></li>
                        <li><label class="checkbox" data-id="8" data-field="OUTP_COST_AMOUNT">门诊总费用</label></li>
                        <li><label class="checkbox" data-id="9"  data-field="PHYSICAL_EXAM">体格检查</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con3" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="3" data-field="DEPT_NAME">科室</label></li>
                        <li><label class="checkbox" data-id="4" data-field="DIAG_NAME">诊断名称</label></li>
                        <li><label class="checkbox" data-id="5" data-field="MASTER_FLAG">主从诊断</label></li>
                        <li><label class="checkbox" data-id="6" data-field="TREAT_RESULT">治愈情况</label></li>
                        <li><label class="checkbox" data-id="7" data-field="DIAG_DATETIME">诊断时间</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con4" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="4" data-field="ADVICE_ITEM_CONTENT">医嘱项目内容</label></li>
                        <li><label class="checkbox" data-id="5" data-field="ADVICE_REMARK">医嘱备注信息</label></li>
                        <li><label class="checkbox" data-id="6" data-field="ADVICE_OPEN_DATETIME">医嘱开立日期时间</label></li>
                        <li><label class="checkbox" data-id="7" data-field="ADVICE_SOURCE">医嘱来源</label></li>
                        <li><label class="checkbox" data-id="8" data-field="DRUG_SPEC">药物规格</label></li>
                        <li><label class="checkbox" data-id="9" data-field="DRUG_DOSAGE">药物使用次剂量</label></li>
                        <li><label class="checkbox" data-id="10" data-field="DRUG_UNIT">药物使用剂量单位</label></li>
                        <li><label class="checkbox" data-id="1" data-field="DRUG_USAGE_WAY">药物使用途径标识</label></li>
                        <li><label class="checkbox" data-id="2" data-field="DRUG_USAGE_FREQUENCY">药物使用频率</label></li>
                        <li><label class="checkbox" data-id="3" data-field="DURATION_TIME">持续时间</label></li>
                        <li><label class="checkbox" data-id="11" data-field="DURATION_TIME_UNIT">持续时间单位</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con5" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="5" data-field="RECIPE_TYPE_CODE">处方类别标识</label></li>
                        <li><label class="checkbox" data-id="6" data-field="RECIPE_OPEN_DATE">处方开立日期</label></li>
                        <li><label class="checkbox" data-id="7" data-field="RECIPE_EFFECTIVE_DAY">处方有效天数</label></li>
                        <li><label class="checkbox" data-id="8" data-field="RECIPE_OPENDOCTOR_NAME">处方开立医师</label></li>
                        <li><label class="checkbox" data-id="9" data-field="ALLOCATE_PERSON_NAME">处方调配药剂师</label></li>
                        <li><label class="checkbox" data-id="10" data-field="VERIFY_PERSON_NAME">处方核对药剂师</label></li>
                        <li><label class="checkbox" data-id="1" data-field="DISPENSING_PERSON_NAME">处方发药药剂师</label></li>
                        <li><label class="checkbox" data-id="2" data-field="RECIPE_COSTS_AMOUNT">处方药品金额</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con6" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="6" data-field="AREA_NAME">病区名称</label></li>
                        <li><label class="checkbox" data-id="7" data-field="DEPT_NAME">科室名称</label></li>
                        <li><label class="checkbox" data-id="8" data-field="ROOM_NO">病房号</label></li>
                        <li><label class="checkbox" data-id="9" data-field="BED_NO">病床号</label></li>
                        <li><label class="checkbox" data-id="10" data-field="INP_DATE">入院日期时间</label></li>
                        <li><label class="checkbox" data-id="1" data-field="COMMUNICABLE_DISEASES_HISTORY">传染病史</label></li>
                        <li><label class="checkbox" data-id="2" data-field="OPERATION_HISTORY">手术史</label></li>
                        <li><label class="checkbox" data-id="3" data-field="BLOOD_TRANSFUSION_HISTORY">输血史</label></li>
                        <li><label class="checkbox" data-id="4" data-field="ALLERGY_HISTORY">过敏史</label></li>
                        <li><label class="checkbox" data-id="5" data-field="DISHOSPITAL_DATETIME">出院日期时间</label></li>
                        <li><label class="checkbox" data-id="11" data-field="DISHOSPITAL_SITUATION">出院情况</label></li>
                    </ul>
                </div>
                <div id="tab-nav-con7" style="display:none;">
                    <ul>
                        <li><label class="checkbox" data-id="7" data-field="SYMPTOM_DESC">症状描述</label></li>
                        <li><label class="checkbox" data-id="8" data-field="INTERFERE_NAME">介入物名称</label></li>
                        <li><label class="checkbox" data-id="9" data-field="OPERATION_DATE">操作日期时间</label></li>
                        <li><label class="checkbox" data-id="10" data-field="EXAM_RESULT">检查结果标识</label></li>
                        <li><label class="checkbox" data-id="1" data-field="ALLERGY_TYPE">过敏类型</label></li>
                        <li><label class="checkbox" data-id="2" data-field="ALLERGY_DRUG_NAME">过敏药物名称</label></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div class="mt30"><h3 class="f16 c-555">输出结果集合</h3></div>
        <div class="tab-result">
            <ul class="clearfix">

            </ul>
        </div>
        <div class="t-c pt40 pb40"><a class="btn mr20" href="advanced-retrieve.php">上一步</a><a class="btn btn-blue" id="step1Btn" href="advanced-retrieve-results.php">下一步</a></div>
    </div>
</div>

<?php include_once "footer.php"; ?>
</body>
</html>