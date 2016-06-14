<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 报表内容管理</title>
    <link rel="stylesheet" href="css/reports.css"/>
    <script src="js/reports.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<!-- header -->

<div class="main clearfix">
            <div class="form-inline">
                <div class="search-area">
                        <div class="form-group">
                            <label>报表名称</label><input type="text" class="form-control" id="report-name">
                            <label>创建时间</label> <input id="create-time" class="form-control time"/>
                            <label for="search-room-range">科室选择</label>
                            <select id="search-room-range" class="form-control">
                                <option value="0">全部</option>
                                <option value="1">皮肤科</option>
                                <option value="2">心外科</option>
                            </select>
                            <label for="search-room-range">分类</label>
                            <select id="search-room-range" class="form-control">
                                <option value="0">全部</option>
                                <option value="1">常用</option>
                                <option value="2">心脏</option>
                            </select>

                            <a class="btn" id="searchBtn">查询</a><span class="line"></span><a class="btn btn-blue add" href="javascript:;" data-url="ajax/add.html">添加</a>
                        </div>
                </div>
            </div>
	<div class="task-list">
        <table class="table table-striped" id="report-content-table">
            <thead>
                <tr>
                    <th class="t-l">报表名称</th>
                    <th class="t-l">所属分类</th>
                    <th class="t-l">所属科室</th>
                    <th class="t-l">创建时间</th>
                    <th class="t-r">操作</th>
                </tr>
			</thead>
			<tbody id="totalTbody">
                   <!--      <tr id="task-item-1" data-id="1">
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
                        </tr> -->

                    </tbody>
		</table>
	</div>
</div>


<?php include_once "footer.php"; ?>
</body>
</html>