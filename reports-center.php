<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 报表内容管理</title>
    <link rel="stylesheet" href="css/retrieve.css"/>
    <script src="js/reports.js"></script>
</head>
<body>
<?php include_once "header-without-menu.php"; ?>
<!-- header -->

<div class="main main2 clearfix">
    <div class="left leftsidebar">
        <h2 class="title">报表大厅</h2>
        <h1><a href="#">皮肤科</a></h1>
        <div>
            <ul class="navmenu-v clearfix">
                <li><a href="report-center.html">疾病趋势分析</a></li>
                <li><a href="report-center2.html" title="某疾病与性别,高血脂,高血尿酸研究">某疾病与性别</a></li>
            </ul>
        </div>
        <h1><a href="#">外科</a></h1>
        <h1><a href="#">内科</a></h1>
    </div>
    <div class="content">
        <div class="main_content">
            <div class="column-title"><h2 class="f20">疾病趋势分析</h2></div>
            <div class="row">
                <div class="box left">
                    <img src="../module/images/views/pic06.png" />
                </div>
                <div class="box right">
                    <img src="../module/images/views/pic05.png" />
                </div>
            </div>
            <div class="row">
                <div class="box left">
                    <img src="../module/images/views/pic01.png" />
                </div>
                <div class="box right">
                    <img src="../module/images/views/pic02.png" />
                </div>
            </div>
            <div class="row">
                <div class="box left">
                    <img src="../module/images/views/pic04.png" />
                </div>
                <div class="box right">
                    <img src="../module/images/views/pic03.png" />
                </div>
            </div>
            <div class="row">
                <div class="box left">
                    <img src="../module/images/views/pic07.png" />
                </div>
                <div class="box right">
                    <img src="../module/images/views/pic08.png" />
                </div>
            </div>
        </div>


<?php include_once "footer.php"; ?>
</body>
<script type="text/javascript">
    $(".leftsidebar").accordion();   //左侧导航
    $(".leftsidebar").css('minHeight',$(".content").height());
</script>
</html>