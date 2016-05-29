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
        <div class="tab"><a href="retrieve.php" class="on">快速检索</a><a href="people.php">我的病人</a><a href="reports.php">高级检索</a></div>
        <div class="con">
            <div class="search-area">
                <div class="form-inline">
                    <div class="form-group">
                        <select class="form-control">
                            <option value="1">基本信息</option>
                            <option value="2">病历</option>
                            <option value="3">诊断</option>
                            <option value="4">医嘱</option>
                            <option value="5">处方</option>
                            <option value="6">住院记录</option>
                            <option value="7">检查报告</option>
                        </select>
                        <input class="form-control" placeholder="快速检索只支持输入一个具体条件"/>
                        <button class="btn btn-primary"><i class="fa fa-search"></i></button>
                        <label class="checkbox-inline"><input type="checkbox"> 去重</label>
                    </div>
                </div>
            </div>
            <div class="filter-box filter-bg">
                <div class="form-inline">
                    <div class="form-group">
                        <label for="search-time-range">时间范围</label>
                        <input id="search-time-range" class="form-control time"/>
                        <label for="search-data-range">数据范围</label>
                        <select id="search-data-range" class="form-control">
                            <option value="1">湘雅一院</option>
                        </select>
                        <label for="search-room-range">科室选择</label>
                        <select id="search-room-range" class="form-control">
                            <option value="0">全部</option>
                            <option value="1">皮肤科</option>
                            <option value="2">泌尿外科</option>
                            <option value="3">内科</option>
                            <option value="4">外科</option>
                            <option value="5">神经内科</option>
                            <option value="6">运动医学</option>
                            <option value="7">神经外科</option>
                        </select>
                    </div>
                </div>
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
                    <a class="op" href="../retrieve/EMPI.html?id=1" title="查看详情"></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<?php include_once "footer.php"; ?>
</body>
</html>