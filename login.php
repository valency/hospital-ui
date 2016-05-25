<html>
<head>
    <?php include_once "lib.php"; ?>
    <link rel="stylesheet" href="css/login.css"/>
    <script src="js/login.js"></script>
    <title>湘雅医疗大数据平台 - 登录</title>
</head>
<body>
<form action="javascript:void(0)">
    <button class="submit" onclick="login();"><i class="fa fa-lock"></i></button>
    <span class="user"><i class="fa fa-user"></i></span>
    <input type="text" id="username" placeholder="用户名"/>
    <span class="pass"><i class="fa fa-key"></i></span>
    <input type="password" id="password" placeholder="密码"/>
</form>
</body>
</html>
