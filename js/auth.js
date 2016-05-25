function check_login(callback) {
    if (Cookies.get('hospital_id') == undefined || Cookies.get('hospital_id') == null) {
        window.location.href = "login.php";
    } else {
        $.get(API_SERVER + "user/verify/?id=" + Cookies.get('hospital_id') + "&ticket=" + Cookies.get('hospital_ticket'), function (r) {
            if (callback) callback();
            else {
                $(".username").html(Cookies.get('hospital_username'));
            }
        }).fail(function () {
            window.location.href = "login.php";
        });
    }
}

function logout() {
    Cookies.remove("hospital_id");
    Cookies.remove("hospital_username");
    Cookies.remove("hospital_ticket");
    window.location.href = ".";
}

function change_password() {
    var html = "<p><input type='password' id='change_password_old' class='form-control select2' placeholder='原密码'/></p>";
    html += "<p><input type='password' id='change_password_new' class='form-control select2' placeholder='新密码'/></p>";
    html += "<p><input type='password' id='change_password_new_repeat' class='form-control select2' placeholder='重复输入新密码'/></p>";
    bootbox.dialog({
        title: "修改密码",
        message: html,
        buttons: {
            "确定": function () {
                if ($("#change_password_new").val() != $("#change_password_new_repeat").val()) {
                    bootbox.alert(error_message("错误：两次输入的新密码并不相符！"), function () {
                        change_password();
                    });
                } else {
                    $.ajax({
                        type: "POST",
                        url: API_SERVER + "user/change-password/",
                        data: {
                            id: Cookies.get('hospital_id'),
                            old: CryptoJS.MD5($("#change_password_old").val()).toString(),
                            new: CryptoJS.MD5($("#change_password_new").val()).toString()
                        },
                        success: function (data) {
                            bootbox.hideAll();
                            bootbox.alert(success_message("密码修改成功，请重新登录。"), function () {
                                window.location.href = "login.php";
                            });
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            var error_msg = "登录服务器未响应！";
                            if (xhr.status >= 400) {
                                switch (xhr.status) {
                                    case 406:
                                        error_msg = "新密码与原密码相同！";
                                        break;
                                    case 401:
                                        error_msg = "原密码不正确！";
                                        break;
                                }
                                bootbox.hideAll();
                                bootbox.alert(error_message("错误：" + error_msg), function () {
                                    change_password();
                                });
                            } else {
                                bootbox.hideAll();
                                bootbox.alert(success_message("密码修改成功，请重新登录。"), function () {
                                    window.location.href = "login.php";
                                });
                            }
                        },
                        dataType: "json"
                    });
                }
            }
        }
    });
}