(function(window, $){
    var HDOWIM = window.HDOWIM || {};    //全局对象 huge data hu nan site analysis
    HDOWIM.timer="";

    //Date类型转换成时间参数格式：20150313
    HDOWIM.getTimePer = function(now){
        if (now instanceof Date){
            var year = now.getFullYear() + "",
                month = (now.getMonth()+1) < 10 ? "0" + (now.getMonth()+1) : "" + (now.getMonth()+1),
                day = now.getDate() < 10 ? "0" + now.getDate() : "" + now.getDate();
            return year + month + day;
        }else{
            return "";
        }
    };

    //Date类型转换成时间字符串格式：2015-03-13
    HDOWIM.getTimeStr = function(now){
        if (now instanceof Date){
            var year = now.getFullYear() + "",
                month = (now.getMonth()+1) < 10 ? "0" + (now.getMonth()+1) : "" + (now.getMonth()+1),
                day = now.getDate() < 10 ? "0" + now.getDate() : "" + now.getDate();
            return year + "-" + month + "-" + day;
        }else{
            return "";
        }
    };

    //字符串转换： 20150313 转成 2015-03-13
    HDOWIM.timePerToStr = function(per){
        var str = "";
        if (per.length === 8) {
            str = per.substr(0,4) + "-" + per.substr(4,2) + "-" + per.substr(6,2);
        }
        return str;
    };

    //获取时间
    HDOWIM.getTimeDate = function(type){
        var date = new Date();
        switch (type) {
            case "0" : break;   //今天
            case "1" : date.setTime(date.getTime() - 1 * 24 * 60 * 60 * 1000);break;  //昨天
            case "2" : date.setTime(date.getTime() - 2 * 24 * 60 * 60 * 1000);break;  //最近3天
            case "3" : date.setTime(date.getTime() - 6 * 24 * 60 * 60 * 1000);break;  //最近7天
            case "4" : date.setTime(date.getTime() - 4 * 24 * 60 * 60 * 1000);break;  //最近4天
            case "5" : date.setTime(date.getTime() - 7 * 24 * 60 * 60 * 1000);break;  //最近7天
           // case "4" : date.setTime(date.getTime() - 29 * 24 * 60 * 60 * 1000);break; //最近1月
            case "13" : date.setTime(date.getTime() - 13 * 24 * 60 * 60 * 1000);break;//最近两个星期
            case "14" : date.setTime(date.getTime() - 14 * 24 * 60 * 60 * 1000);break;//最近两个星期
            case "36" : date.setTime(date.getTime() - 36 * 24 * 60 * 60 * 1000);break;//最近36天
            case "30" : date.setTime(date.getTime() - 30 * 24 * 60 * 60 * 1000);break;//最近30天

        }
        return date;
    };

    //获取时间
    HDOWIM.getTimeDateCNZZ = function(type){
        var date = new Date();
        switch (type) {
            case "0" : break;   //今天
            case "1" : date.setTime(date.getTime() - 1 * 24 * 60 * 60 * 1000);break;  //昨天
            case "2" : date.setTime(date.getTime() - 6 * 24 * 60 * 60 * 1000);break;  //最近7天
            case "3" : date.setTime(date.getTime() - 29 * 24 * 60 * 60 * 1000);break;  //最近30天
        }
        return date;
    };
    //获取时间最近7天
    HDOWIM.getTimeDateForAWeek = function(type){
        var date = new Date();
        switch (type) {
            case "0" : break;   //今天
            case "1" : date.setTime(date.getTime() - 1 * 24 * 60 * 60 * 1000);break;  //昨天
            case "2" : date.setTime(date.getTime() - 2 * 24 * 60 * 60 * 1000);break;
            case "3" : date.setTime(date.getTime() - 3 * 24 * 60 * 60 * 1000);break;
            case "4" : date.setTime(date.getTime() - 4 * 24 * 60 * 60 * 1000);break;
            case "5" : date.setTime(date.getTime() - 5 * 24 * 60 * 60 * 1000);break;
            case "6" : date.setTime(date.getTime() - 6 * 24 * 60 * 60 * 1000);break;
            case "7" : date.setTime(date.getTime() - 7 * 24 * 60 * 60 * 1000);break;
            case "8" : date.setTime(date.getTime() - 8 * 24 * 60 * 60 * 1000);break;
            case "9" : date.setTime(date.getTime() - 9 * 24 * 60 * 60 * 1000);break;
            case "10" : date.setTime(date.getTime() - 10 * 24 * 60 * 60 * 1000);break;
            case "11" : date.setTime(date.getTime() - 11 * 24 * 60 * 60 * 1000);break;
            case "12" : date.setTime(date.getTime() - 12 * 24 * 60 * 60 * 1000);break;
            case "13" : date.setTime(date.getTime() - 13 * 24 * 60 * 60 * 1000);break;
            case "14" : date.setTime(date.getTime() - 14 * 24 * 60 * 60 * 1000);break;
        }
        return date;
    };

    // 这个函数用来把字符串转换为日期格式：2015-03-13  转为  2015/03/13  然后再解析为日期类型
    HDOWIM.parseDate = function(str){
        return new Date(Date.parse(str.replace(/-/g,"/")));
    };

    HDOWIM.getTitleTimeStr = function(timeType, st, et){
        var type = timeType || this.timeCNZZ.timeTye;
        var startTime = st || this.timeCNZZ.st;
        var endTime = et || this.timeCNZZ.et;
        var str = "";
        if (type == "0") {        //今天
            str = this.getTimeStr(this.getTimeDateCNZZ("0")) + " 00:00 至 "
                + this.getTimeStr(HDOWIM.getTimeDateCNZZ("0")) + " " + (new Date().getHours() - 1) + ":00，"
                + (new Date().getHours() - 1) + "小时的网站数据";
        } else if (type == "1") {
            str = this.getTimeStr(this.getTimeDateCNZZ("1")) + " 00:00 至 "
                + this.getTimeStr(HDOWIM.getTimeDateCNZZ("1")) + " 23:59，"
                + "1天的网站数据";
        } else if (type == "2") {
            str = this.getTimeStr(this.getTimeDateCNZZ("2")) + " 至 "
                + this.getTimeStr(HDOWIM.getTimeDateCNZZ("0")) + "，"
                + "7天的网站数据";
        } else if (type == "3"){
            str = this.getTimeStr(this.getTimeDateCNZZ("3")) + " 至 "
                + this.getTimeStr(HDOWIM.getTimeDateCNZZ("0")) + "，"
                + "30天的网站数据";
        } else if (type == "4"){
            var startStr = this.timePerToStr(startTime);
            var endStr = this.timePerToStr(endTime);
            var days = 1 + (this.parseDate(endStr).getTime() - this.parseDate(startStr).getTime()) / (1 * 24 * 60 * 60 * 1000);
            str = startStr + " 至 " + endStr + "，" + days + "天的网站数据";
        }
        return str;
    };

    //echarts相关
    HDOWIM.echarts = {};
    HDOWIM.echarts.noDataLoadingOption = {
        "text" : "暂无数据",
        "effect" : 'bubble'
    };
    //CNZZ的时间对象属性用于行为分析的
    HDOWIM.timeCNZZ={
        "timeTye":localStorage.getItem("timeType"),
        "st":localStorage.getItem("st"),
        "et":localStorage.getItem("et")
    };
    HDOWIM.lastMonday = function(){
    	var date = new Date();
    	var monday = date.getDay() + 6;
    	return HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDateForAWeek(monday.toString())));
    };
    HDOWIM.lastSunday = function(str){
    	var date = new Date();
    	var sunday = date.getDay();
    	return HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDateForAWeek(sunday.toString())));
    };
    //页面参数，以及下拉框和时间的事件调用方法
    HDOWIM.per = {
        "st" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("0"))),          //开始时间
        "yt" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("1"))),          //开始时间
        "ytOWeek" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("5"))),          //开始时间
        "et" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("3"))),          //结束时间
        "yet" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("4"))),          //结束时间
        "ets" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("2"))),
        "ytTWeek" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("1"))),          //开始时间
        "eytTWeek" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("14"))),
        "stTWeek" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("0"))),          //开始时间
        "etTWeek" : HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("13"))),          //结束时间最近一周
        "lastThirtyDay":HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("36"))),//最近37天时间
        "tirthDay":HDOWIM.timePerToStr(HDOWIM.getTimePer(HDOWIM.getTimeDate("30"))),//最近30天时间
        "siteId" : "",      //下拉框选中的网址ID
        "siteName" : "",    //下拉框选中的网址名称
        "url" : "",
        "siteUrl":"",
        "resultId":"",
        "siteUserId":"",
        "cnzzId":"",
        "loc":""
    };
    HDOWIM.siteListEventFun = function(e,$this,per){
    };
    window.HDOWIM = HDOWIM;
})(window, jQuery);