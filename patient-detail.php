<!DOCTYPE html>
<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>湘雅医疗大数据平台 - 智能检索</title>
    <link rel="stylesheet" href="css/retrieve.css"/>
    <script src="js/retrieve.js"></script>
    <script src="js/patient-detail.js"></script>
</head>
<body>
<?php include_once "header.php"; ?>
<!-- header -->
<div class="main clearfix mb15">
    <div class="left leftsidebar">
        <h2 class="title">病历</h2>
        <h1>病案首例</h1>
        <div>
            <ul class="navmenu-v clearfix">
                <li><a href="" id="empiUrl" class="time">2016-04-11 11:30:30</a></li>
            </ul>
        </div>
        <h1>诊断</h1>
        <div>
            <ul class="navmenu-v clearfix">
                <li><a href="javascript:;">入院诊断</a></li>
                <li><a href="javascript:;">门诊诊断</a></li>
                <li><a href="javascript:;">出院诊断</a></li>
            </ul>
        </div>
        <h1>病程</h1>
        <div>
            <ul class="navmenu-v clearfix">
                <li><a href="javascript:;">入院记录</a></li>
                <li><a href="javascript:;">病程记录</a></li>
                <li class="sub"><a href="javascript:;">手术<em class="icon"></em></a>
                    <ul>
                        <li><a href="javascript:;">术前讨论</a></li>
                        <li><a href="javascript:;">术前小结</a></li>
                        <li><a href="javascript:;">手术记录</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;">知情文件</a></li>
                <li><a href="javascript:;">其他记录</a></li>
                <li><a href="javascript:;">出院小结</a></li>
                <li><a href="javascript:;">出院记录</a></li>
            </ul>
        </div>
        <h1>医嘱记录</h1>
        <div>
            <ul class="navmenu-v clearfix">

            </ul>
        </div>
        <h1>检查结果记录</h1>
        <div>
            <ul class="navmenu-v clearfix">
                <li><a href="javascript:;">实验室检查</a></li>
                <li><a href="javascript:;">X射线检查</a></li>
                <li class="sub"><a href="javascript:;">CT检查<em class="icon"></em></a>
                    <ul class="time">
                        <li><a href="javascript:void(0);" id="ctUrl">2015-04-11 11:31:20</a></li>
                    </ul>
                </li>
                <li><a href="javascript:;">心电图检查</a></li>
                <li><a href="javascript:;">超声检查</a></li>
                <li><a href="javascript:;">DSA检查</a></li>
                <li><a href="javascript:;">病理检查</a></li>
            </ul>
        </div>
    </div>
    <div class="content">
        <div class="main_content">
            <div class="column-title"><h2 class="f20">病案首例</h2></div>
            <div class="row">
                <table width="100%">
                    <tbody id="pInfoTable">
                    <tr>
                        <td>就诊机构<span></span></td><td colspan="2">医疗付费方式<span class="size6"></span></td>
                    </tr>
                    <tr>
                        <td>健康卡号<span></span></td><td>住院次数<span></span></td><td>住&nbsp;&nbsp;院&nbsp;&nbsp;号<span></span></td>
                    </tr>
                    <tr>
                        <td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名<span></span></td><td>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别<span></span></td><td>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄<span></span></td>
                    </tr>
                    <tr>
                        <td>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍<span></span></td><td>出&nbsp;&nbsp;生&nbsp;&nbsp;地<span></span></td><td>籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯<span></span></td>
                    </tr>
                    <tr>
                        <td>身份证号<span></span></td><td>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业<span></span></td><td>现住地址<span></span></td>
                    </tr>
                    <tr>
                        <td>电话号码<span></span></td><td>婚姻状况<span></span></td><td>户口地址<span></span></td>
                    </tr>
                    <tr>
                        <td>工作单位<span></span></td><td>邮编号码<span></span></td><td>工作地址<span></span></td>
                    </tr>
                    <tr>
                        <td>联系人姓名<span class="size5"></span></td><td>关&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系<span></span></td><td>联系地址<span></span></td>
                    </tr>
                    <tr>
                        <td>联系人电话<span class="size5"></span></td><td colspan="2">入园途径<span class="w65"></span>（1.门诊  2.急诊  3.专院）</td>
                    </tr>
                    <tr>
                        <td>入院日期<span></span></td><td>入院科别<span></span></td><td>病&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房<span></span></td>
                    </tr>
                    <tr>
                        <td>转科科室<span></span></td><td>出院日期<span></span></td><td>入院科别<span></span></td>
                    </tr>
                    <tr>
                        <td>病&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房<span></span></td><td>实际住院天数<span class="size6"></span></td><td>门急诊诊断<span class="size5"></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <h5 class="f18 t-c mb15">主要诊断</h5>
                <table class="table" width="100%">
                    <tbody>
                    <tr><th>出院诊断</th><th>诊断编码</th><th>入院病情</th></tr>
                    <tr><td><em class="blue">结肠造口术后</em></td><td>Z43.32</td><td>入院病情不稳定</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <h5 class="f18 t-c mb15">其它诊断</h5>
                <table class="table" width="100%">
                    <tbody>
                    <tr><th>出院诊断</th><th>诊断编码</th><th>入院病情</th></tr>
                    <tr><td><em class="blue">肠粘连</em></td><td>K66.002</td><td>入院病情不稳定</td></tr>
                    <tr><td><em class="blue">手术后对症治疗</em></td><td>Z48.901</td><td>入院病情不稳定</td></tr>
                    <tr><td><em class="blue">结肠造口术后</em></td><td>Z43.32</td><td>入院病情不稳定</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <table width="100%">
                    <tbody id="mainInfo">
                    <tr>
                        <td>药物过敏<span class="w65"></span>（1.无  2.有）</td><td>过敏药物<span></span></td><td>死亡患者尸检<span class="w65"></span>（1.无  2.有）</td>
                    </tr>
                    <tr>
                        <td colspan="3">血&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型<span class="w65"></span>（1.A  2.B  3.O  4.AB  5.不详  未查）<em class="mr20"></em>RH<span class="w65"></span>（1.阴  2.阳  3.不详  4.未查）</td>
                    </tr>
                    <tr>
                        <td>科&nbsp;&nbsp;主&nbsp;&nbsp;任<span></span></td><td>主（副主）任医师<span class="w144"></span></td><td>主治医师<span></span></td>
                    </tr>
                    <tr>
                        <td>责任护士<span></span></td><td>进修医师<span></span></td><td>实习医师<span></span></td>
                    </tr>
                    <tr>
                        <td>编&nbsp;&nbsp;码&nbsp;&nbsp;员<span></span></td><td>案例质量<span class="w65"></span>（1.甲  2.乙  3.丙）</td><td>质控医师<span></span></td>
                    </tr>
                    <tr>
                        <td>质控护士<span></span></td><td colspan="2">质控日期<span></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <h5 class="f18 t-c mb15">其它诊断</h5>
                <table class="table" width="100%">
                    <tbody>
                    <tr><th>手术及操作编码</th><th>手术及操作日期</th><th>手术及操作名称</th><th>手术级别</th><th>手术、操作医师</th><th>切口愈合等级别</th><th>手术麻醉方式</th><th>麻醉医生</th></tr>
                    <tr><td><em class="blue">*******</em></td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td></tr>
                    <tr><td><em class="blue">*******</em></td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td></tr>
                    <tr><td><em class="blue">*******</em></td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td><td>*******</td></tr>
                    </tbody>
                </table>
            </div>
<!--            <div class="row">-->
<!--                <img src="images/empi01.png" />-->
<!--            </div>-->
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