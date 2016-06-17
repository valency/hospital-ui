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
	<div class="list-crumb">
		<ul class="breadcrumb">
			<li><a href="reports.php">报表内容管理</a> <span class="divider"></span></li>
			<li class="active">新增报表内容</li>
		</ul>
	</div>
<!--   <div class="list-crumb"><a href="reports.php">报表内容管理</a> &gt; <em>新增报表内容</em></div>-->
<!--   	<div class="column-title"><h4 class="f18">新增报表内容</h4></div>-->
   	<div class="block clearfix nopadding">
   		<div class="c-info-box">
   			<div class="mb15"><h4 class="f16 c-555">报表基本信息</h4></div>
<!--   			<div class="filter-box filter-bg">-->

   			<div class="filter-box filter-bg">
				<div class="row">
					<div class="col-xs-12">
						<div class="row">
							<div class="col-xs-6"><label>报表名称：</label><input id="reportName" type="text" class="form-control w200" /></div>
							<div class="col-xs-6"><label>报表分类：</label>
								<select id="search-room-range" class="form-control w200">
									<option value="0">常用</option>
									<option value="1">心血管</option>
									<option value="2">耳鼻喉</option>
								</select>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-6"><label>备注信息：</label><input id="remarkInfo" type="text" class="form-control w200" /></div>
						</div>
					</div>
				</div>
			</div>
   			<!--
   			    <table border="0" cellpadding="0" cellspacing="0" width="auto">
                    <tbody id="allTbody">
                            <tr>
                                <td>
                                  <label>报表名称</label><input id="reportName" type="text" class="form-control" />
                                </td>
                                <td>
								</td>
                                <td>
                                	<label>报表分类</label>
                                    <select id="search-room-range" class="form-control">
                                       <option value="0">常用</option>
                                       <option value="1">心血管</option>
                                       <option value="2">耳鼻喉</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                  <label>备注信息</label><input id="remarkInfo" type="text" class="form-control" />
                                </td>
                                <td>
                                   </td>
                            </tr>
                    </tbody>
   			    </table>
   			</div> -->

   			<div class="mb15 mt30"><h4 class="f16 c-555">报表内容</h4></div>
   			<div class="c-info c-info-init">
   				<a href="javascript:;" class="btn btn-blue">添加模块</a>
   			</div>
   		</div>
   		<div class="right c-add-list">
   			<div class="c-set-box">
   				<table border="0" cellpadding="0" cellspacing="0">
   					<tbody id="allTbody">
   					<tr>
   						<td>
   						    <select id="search-room-range" class="form-control">
                                <option value="某疾病患者中高血脂人数占比分析">某疾病患者中高血脂人数占比分析</option>
                                <option value="某疾病患者中高血尿酸人数占比分析">某疾病患者中高血尿酸人数占比分析</option>
                                <option value="城镇农村基本死亡率TOP10">城镇农村基本死亡率TOP10</option>
                            </select>
   						</td>
   						<td><a href="javascript:;" class="add">新增一列</a></td>
   					</tr>
   					</tbody>
   				</table>
   				<div class="mt10 mb15"><a id="saveTotal" href="javascript:void(0);" class="btn btn-blue btn-small">保存</a><a href="javascript:;" class="btn btn-gray btn-small ml10 cancel">取消</a></div>
   			</div>
   		</div>
   	</div>
</div>


<?php include_once "footer.php"; ?>
</body>
</html>