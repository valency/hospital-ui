<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 智能检索</title>
    <link rel="stylesheet" href="css/retrieve.css"/>
    <script src="js/retrieve.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<!-- header -->
<div class="main clearfix">
    <div class="filter-area">
        <div class="tab"><a href="retrieve.php" >快速检索</a><a href="people.php" class="on">我的病人</a><a href="advanced-retrieve.php">高级检索</a></div>
        <div class="con">
            <div class="filter-box filter-bg">
                <form class="form-inline">
                    <div class="form-group">
                        <label>患者名称：</label><input type="text" class="form-control" id="patientName">
                    </div>
                    <div class="form-group">
                        <label for="search-time-range">时间范围：</label>
                        <input id="search-time-range" class="form-control time" style=""/>
                    </div>
                    <div class="form-group">
                        <a class="btn btn-blue" href="javascript:doSearch()">查询</a>
<!--                        <span class="line"></span>-->
<!--                        <a class="btn btn-blue add" href="javascript:;" data-url="ajax/add.html">添加</a>-->
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div>
        <table class="table table-striped" id="total-table">
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
            <tr>
                <td>刘实名1</td>
                <td>男</td>
                <td>36</td>
                <td>2016－01－04</td>
                <td>2016－04－04</td>
                <td>甲</td>
                <td class="t-r">
                    <a class="op" href="patient-detail.php?id=1" title="查看详情"></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>