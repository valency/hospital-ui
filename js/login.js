$(document).ready(function () {
    $(".user").focusin(function () {
        $(".inputUserIcon").css("color", "#e74c3c");
    }).focusout(function () {
        $(".inputUserIcon").css("color", "white");
    });
    $(".pass").focusin(function () {
        $(".inputPassIcon").css("color", "#e74c3c");
    }).focusout(function () {
        $(".inputPassIcon").css("color", "white");
    });
});

function login() {
    var username = $("#username").val();
    var password = CryptoJS.MD5($("#password").val()).toString();
    $.ajax({
        type: "POST",
        url: API_SERVER + "user/register-or-sign-in/",
        data: {
            username: username,
            password: password
        },
        success: function (data) {
            Cookies.set('hospital_id', data["id"]);
            Cookies.set('hospital_username', username);
            Cookies.set('hospital_ticket', data["ticket"]);
            window.location.href = ".";
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var error_msg = "登录服务器未响应，您可能遇到了一个网络问题，请检查您的网络。";
            switch (xhr.status) {
                case 404:
                    error_msg = "用户不存在！";
                    break;
                case 401:
                    error_msg = "用户名或密码错误！";
                    break;
            }
            alert(error_msg);
        },
        dataType: "json"
    });
}
