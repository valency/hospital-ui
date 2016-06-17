<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 报表权限</title>
    <link rel="stylesheet" href="css/priority.css"/>
    <script src="js/priority.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<!-- header -->

<div class="main clearfix">
    <div class="search-area">
            <form class="form-inline">
                    <div class="form-group">
                        <label>名称：</label><input type="text" class="form-control" id="searchName">
                    </div>
                    <div class="form-group">
                        <label>创建时间：</label> <input id="create-time" class="form-control time"/>
                    </div>
                    <div class="form-group">
                        <label for="search-room-range">分配类型：</label>
                        <select id="search-room-range" class="form-control">
                            <option value="0">全部</option>
                            <option value="1">角色</option>
                            <option value="2">个人</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <div  style="float: left">
                            <a class="btn" href="javascript:doSearch()">查询</a><span class="line"></span><a class="btn btn-blue add" href="javascript:;" data-url="ajax/add.html">添加</a>
                        </div>
                    </div>
            </form>
        </div>
	<div class="block">
        <table class="table table-striped" id="priority-table">
            <thead>
                <tr>
                    <th class="t-l">名称</th>
                    <th class="t-l">分配类型</th>
                    <th class="t-l" width="40%">报表内容权限</th>
                    <th class="t-l">创建时间</th>
                    <th class="t-r">操作</th>
                </tr>
			</thead>
			<tbody id="dataTs">
                <tr id="task-item-1" data-id="1">
                <td>管理员1</td><td>角色</td><td>糖尿病报表;高血压报表</td><td>2016-04-10</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-2" data-id="2">
                <td>曹伞</td><td>个人</td><td>高血压报表;高血脂报表</td><td>2016-04-06</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-3" data-id="3"><td>严帅</td><td>个人</td><td>高血脂报表;心力衰竭报表</td><td>2016-04-03</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"><a class="op mod" href="javascript:;" title="修改"></a></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-4" data-id="4"><td>华二</td><td>个人</td><td>心力衰竭报表;先心病报表</td><td>2016-04-07</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"><a class="op mod" href="javascript:;" title="修改"></a></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-5" data-id="5"><td>管理员2</td><td>角色</td><td>先心病报表;银血病报表</td><td>2016-04-06</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"><a class="op mod" href="javascript:;" title="修改"></a></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-6" data-id="6"><td>魏美丽</td><td>个人</td><td>银血病报表;皮炎报表</td><td>2016-04-07</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-7" data-id="7"><td>陶然</td><td>个人</td><td>皮炎报表;湿疹报表</td><td>2016-04-03</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-8" data-id="8"><td>姜研</td><td>个人</td><td>湿疹报表;糖尿病报表</td><td>2016-04-04</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"><a class="op mod" href="javascript:;" title="修改"></a></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-9" data-id="9"><td>管理员3</td><td>角色</td><td>糖尿病报表;高血压报表</td><td>2016-04-14</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
                <tr id="task-item-10" data-id="10"><td>管理员4</td><td>角色</td><td>高血压报表;高血脂报表</td><td>2016-04-09</td><td class="t-r"><a class="op js-detail" href="javascript:;" title="查看详情"></a><a class="op mod" href="javascript:;" title="修改"></a><a class="op del js-del" href="javascript:;"></a></td></tr>
		    </tbody>
		</table>
	</div>
</div>


<?php include_once "footer.php"; ?>
</body>
</html>