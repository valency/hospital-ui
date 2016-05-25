<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台</title>
</head>
<body>
<!-- header -->
<div class="header clearfix">
    <div class="logo left">
        <a href="retrieve/index.html" title="湘雅大数据BI系统" alt="湘雅大数据BI系统"></a>
    </div>
    <div class="right">
        <div class="report-center left"><a href="ucenter/report-center.html" class="icon" title="报表中心"></a></div>
        <div class="collect left"><a href="ucenter/collect.html" class="icon"><em>12</em></a></div>
        <div class="person-info left">
            <a class="nic-name" href="#"><img src="public/images/user_img.png" width="32" height="32"></img>aishuohua<em class="arrow icon"></em></a>
            <!--<ul class="dis-no">
                <li><a href="#">设置</a></li>
                <li><a href="#">退出</a></li>
            </ul>-->
        </div>
    </div>
</div>
<div class="nav">
    <ul>
        <li><a href="retrieve/index.html"><em class="icon icon2"></em>智能检索</a></li>
        <li><a href="module/index.html"><em class="icon icon3"></em>报表模板管理</a></li>
        <li class="cur"><a href="reports.php"><em class="icon icon4"></em>报表内容管理</a></li>
        <li><a href="priority/index.html"><em class="icon icon5"></em>报表权限管理</a></li>
        <!-- <li><a href="#"><em class="icon icon6"></em>用户设置</a></li> -->
    </ul>
</div>
<!-- header -->
<div class="main clearfix">
    <div class="filter-box clearfix">
        <label>报表名称</label><input id="reportName" type="text" class="text left w200"/>
        <label>创建时间</label><input type="text" class="text left w200" id="beginDate"/>
        <a id="searchBtn" class="btn" href="javascript:;">查询</a><span class="line"></span><a class="btn btn-blue" href="add.html">添加</a>
    </div>
    <div class="task-list block">
        <table class="table">
            <thead>
            <tr>
                <th class="t-l" width="250">报表名称</th>
                <th class="t-l">所属分类</th>
                <th class="t-l">所属科室</th>
                <th class="t-l">创建时间</th>
                <th class="t-r">操作</th>
            </tr>
            </thead>
            <tbody id="totalTbody">
            <!-- 				<tr id="task-item-1" data-id="1">
                                <td>疾病趋势分析</td>
                                <td>常见</td>
                                <td>皮肤科</td>
                                <td>2016-04-14</td>
                                <td class="t-r">
                                    <a class="op js-detail" href="javascript:;" data-url="ajax/view.html" title="报表预览"></a>
                                    <a class="op pause" href="#"></a>
                                    <a class="op del js-del" href="javascript:;"></a>
                                </td>
                            </tr>
                            <tr id="task-item-2" data-id="2">
                                <td>某疾病与性别,高血脂,高血尿研究</td>
                                <td>常见</td>
                                <td>皮肤科</td>
                                <td>2016-04-14</td>
                                <td class="t-r">
                                    <a class="op js-detail" href="javascript:;" data-url="ajax/view2.html"  title="报表预览"></a>
                                    <a class="op pause" href="#"></a>
                                    <a class="op del js-del" href="javascript:;"></a>
                                </td>
                            </tr>	 -->
            </tbody>
        </table>
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
        $("#beginDate").datepicker();

        var h = document.documentElement.clientHeight || document.body.clientHeight;
        var right = $(".main").height();
        var diff = h - $("html").height();
        if (diff > 0) {
            $(".main").css('minHeight', (right + diff));
        }
    });
</script>
</body>
</html>