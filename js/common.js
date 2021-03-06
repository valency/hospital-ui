function success_message(msg) {
    return "<span class='text-success'><i class='fa fa-check-circle'></i> " + msg + "</span>";
}

function error_message(msg) {
    return "<span class='text-danger'><i class='fa fa-times-circle'></i> " + msg + "</span>";
}

function warning_message(msg) {
    return "<span class='text-warning'><i class='fa fa-exclamation-circle'></i> " + msg + "</span>";
}

function loading_message(msg) {
    return "<span class='text-info'><i class='fa fa-spinner'></i> " + msg + "</span>";
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function random_color() {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}

function get_url_parameter(p) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == p) {
            return sParameterName[1];
        }
    }
}