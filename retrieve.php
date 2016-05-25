<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 智能检索</title>
    <script src="js/retrieve.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>

<!-- header -->
<div class="main clearfix">
    <div class="filter-area">
        <div class="tab"><a href="index.html" class="on">快速检索</a><a href="people.html">我的病人</a><a href="../module/add.html">高级检索</a></div>
        <div class="con">
            <div class="search-area">
                <div class="search-box">
                    <div class="lt-select">
                        <a href="javascript:;"></a>
                        <p id="sp" selType="1" style="margin-left:-12px;">基本信息</p>
                        <ul>
                            <li selType="1">基本信息</li>
                            <li selType="2">病历</li>
                            <li selType="3">诊断</li>
                            <li selType="4">医嘱</li>
                            <li selType="5">处方</li>
                            <li selType="6">住院记录</li>
                            <li selType="7">检查报告</li>
                        </ul>
                    </div>
                    <input id="serText" type="text" value="" placeholder="快速检索只支持输入一个具体条件"/>
                    <a href="#" class="search-btn"></a>
                </div>
                <label class="checkbox checked">去重</label>
            </div>
            <div class="filter-box filter-bg">
                <label>时间范围</label><input type="text" class="text left w160 time" value="" id="inputDate">
                <label>数据范围</label>
                <div class="lt-select"><a href="javascript:;"></a>
                    <p>湘雅一院</p></div>
                <label>科室选择</label>
                <div class="lt-select"><a href="javascript:;"></a>
                    <p id="depart" selType="0">全部</p>
                    <ul>
                        <li selType="0">全部</li>
                        <li selType="0">皮肤科</li>
                        <li selType="1">泌尿外科</li>
                        <li selType="1">内科</li>
                        <li selType="1">外科</li>
                        <li selType="1">神经内科</li>
                        <li selType="1">运动医学</li>
                        <li selType="1">神经外科</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="task-list block">
        <table class="table" id="totalTable">
            <thead>
            <tr>
                <th class="t-l">姓名</th>
                <th class="t-l">性别</th>
                <th class="t-l">年龄</th>
                <th class="t-l">入院时间</th>
                <th class="t-l">出院时间</th>
                <th class="t-l">案例质量</th>
                <th class="t-r">操作</th>
            </tr>
            </thead>
            <tbody id="totalTbody">
            <!-- 				<tr>
                                <td>刘实名1</td>
                                <td>男</td>
                                <td>36</td>
                                <td>2016－01－04</td>
                                <td>2016－04－04</td>
                                <td>甲</td>
                                <td class="t-r">
                                    <a class="op" href="../retrieve/EMPI.html?id=1" title="查看详情"></a>
                                </td>
                            </tr> -->
            </tbody>
        </table>
        <div id="pager1" class="page clearfix">
            <div class="right">
                <form>
                    <em>共<input type="text" style="width:30px;" disabled="disabled" class="totalSize w-40 bord-no"/>条记录，每页
                        <select class="pagesize">
                            <option selected="selected" value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>条，<input disabled="disabled" type="text" style="width: 60px;" class="pagedisplay page-cout  w40 bord-no"/>
                    </em>
                    <a class="first">首页</a>
                    <a class="prev">上一页</a>
                    <a class="next">下一页</a>
                    <a class="last">末页</a>

                    <input class="pagesizeGoVal w20" type="text" value="1"/>
                    <a class="pagesizeGo go" href="javascript:void(0)">GO</a>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="footer">
    <p class="pos-r">
        <a rel="nofollow" style="text-decoration:none;" target="_blank" href="http://hugedata.com.cn/index/introduction.jsp">关于hugedata</a>|
        <a rel="nofollow" style="text-decoration:none;" target="_blank" href="http://hugedata.com.cn/index/contact.jsp">联系我们</a>|
        <a target="_blank" href="http://b.qq.com/webc.htm?new=0&amp;sid=800040626&amp;eid=2188z8p8p8p8Q8p8x8K8x&amp;o=www.webxmf.com&amp;q=7" style="display:inline-block;text-decoration:none;"> 在线客服：<img src="http://im.bizapp.qq.com:8000/zx_qq.gif" style="vertical-align:middle;"></a>
    </p>
    <p>Copyright (C)2012-2018. Hugedata All Rights Reserved. | ICP证： 苏ICP备15024893号-1</p>
</div>
<script type="text/javascript">
    $(function () {
        $('#inputDate').daterangepicker(
            {
                startDate: moment().subtract('days', 30),//开始选中的时间，29天前
                endDate: moment().subtract('days', 0),//结束选中的时间，昨天
                minDate: moment().subtract('days', 365),//'01/01/2012',可选择最早时间，30天前
                maxDate: moment().subtract('days', 0),//'12/31/2014',可选择最晚时间，昨天
                dateLimit: {days: 365},
                timePickerIncrement: 1,
                opens: 'right',
                buttonClasses: ['btn btn-default'],
                applyClass: 'btn-small btn-primary',
                cancelClass: 'btn-small',
                format: 'YYYY-MM-DD',//'MM/DD/YYYY',
                separator: ' 至 ',
                locale: {
                    applyLabel: '确认',
                    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    firstDay: 1
                }
            },
            function (start, end) {
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );
    });
</script>
</body>
</html>