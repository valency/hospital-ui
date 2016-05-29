$(document).ready(function () {
    check_login();
    $(".nav-block li:eq(0)").addClass("active");
    $('#search-time-range').daterangepicker({
        startDate: moment().subtract(30, 'days'),
        endDate: moment().subtract(0, 'days'),
        minDate: moment().subtract(365, 'days'),
        maxDate: moment().subtract(0, 'days'),
        dateLimit: {days: 365},
        locale: {
            format: 'YYYY-MM-DD',
            separator: " 至 ",
            applyLabel: '确认',
            cancelLabel: '取消',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    });
    $("#total-table").DataTable({
        language: DT_LANG
    });
});