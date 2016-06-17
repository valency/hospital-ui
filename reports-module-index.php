<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 报表模板管理</title>
    <link rel="stylesheet" href="css/reports.css"/>
    <script src="js/reports-module.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<!-- header -->

<div class="main clearfix">
                <div class="search-area">
                    <form class="form-inline">
<!--                    <div class="row">-->
<!--                        <div class="col-xs-13">-->
<!--                            <div class="row">-->
                                <div class="form-group">
                                    <label>报表名称：</label><input type="text" class="form-control" id="report-name">
                                </div>
                                <div class="form-group">
                                    <label>创建时间：</label> <input id="create-time" class="form-control time"/>
                                </div>
                                <div class="form-group">
                                    <label for="department">科室选择：</label>
                                    <select id="department" class="form-control">
                                        <option value="0">全部</option>
                                        <option value="1">皮肤科</option>
                                        <option value="2">心外科</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <div  style="float: left">
                                        <a class="btn" id="searchBtn">查询</a>
                                        <div class="line"></div>
                                        <a class="btn btn-blue add" href="reports-add.php">添加</a>
                                    </div>
                                </div>


                     </form>
                </div>
	<div class="task-list block">
        <table class="table table-striped" id="report-content-table">
            <thead>
                <tr>
                    <th class="t-l">模板名称</th>
                    <th class="t-l">备注</th>
                    <th class="t-l">模板类型</th>
                    <th class="t-l">创建时间</th>
                    <th class="t-r">操作</th>
                </tr>
			</thead>
			<tbody id="totalTbody">
                         <tr id="task-item-1" data-id="1">
                            <td>疾病趋势分析</td>
                            <td>常见</td>
                            <td>皮肤科</td>
                            <td>2016-04-14</td>
                            <td class="t-r">
                                <a class="op js-detail" href="javascript:;" data-url="ajax/view.html" title="报表预览"></a>
                                <a class="op del" href="javascript:;"></a>
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
                                <a class="op mod" href="#"></a>
                                <a class="op del js-del" href="javascript:;"></a>
                            </td>
                        </tr>

                    </tbody>
		</table>
	</div>
</div>


<?php include_once "footer.php"; ?>
</body>
</html>