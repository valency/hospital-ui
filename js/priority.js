/**
 * Created by Dawn on 2016/6/8.
 */
$(document).ready(function () {
    check_login();
    $(".nav-block li:eq(3)").addClass("active");
    $('#create-time').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    },
    function(start, end, label) {
        //operation
    });

    $("#priority-table").DataTable({
        language: DT_LANG
    });
});