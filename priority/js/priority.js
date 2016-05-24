    $(function(){
        initDate(dataObj);

        $(".add").on('click',function(){  //添加权限
            $(".checkbox").each(function(){
                $(this).removeClass("checked");
            });
            var url = $(this).attr('data-url');
            $.post(url,function(data){
                Prompt.init({
                    title: '添加权限',
                    width: 600,
                    shade : true,
                    html : data,
                    ConfirmFun : submit,
                    CancelFun : true
                });
                $(".show-list").on('click','.all-selected',function(){
                    $(this).closest('.checkboxarea').find('.sub label').addClass('checked');
                });
                $(".show-list").on('click','.all-selected.checked',function(){
                    $(this).closest('.checkboxarea').find('.sub label').removeClass('checked');
                });
                $(".show-list").on('click','.all-selected-sub',function(){
                    $(this).closest('.sub').find('.checkbox_area').children().addClass('checked');
                });
                $(".show-list").on('click','.all-selected-sub.checked',function(){
                    $(this).closest('.sub').find('.checkbox_area').children().removeClass('checked');
                });
            },'html');
        });

        $(document).on('click','.js-detail',function(){  //查看权限
            var id = $(this).parent().parent().attr('data-id');
            var html = '';

            $(dataObj).each(function(idex,item){
                if(item.id+1 == id)
                {
                    $("#type2").empty().html(item.role);
                    $("#name2").empty().html(item.name);

                    $(".checkbox").each(function(){
                        $(this).removeClass("checked");
                    });
                    $(".checkbox").each(function(){
                        var tempType = $(this).text().replace("报表","");
                        var report = item.report;
                        if(report.indexOf(tempType) >= 0)
                        {
                            $(this).addClass("checked");
                        }
                    });
                }
            });

            html += $("#popId").html();
            $.post('ajax/view.html',function(data){
                Prompt.init({
                    title: '查看详情',
                    width: 600,
                    shade : true,
                    html : html
                });
            },'html');
        });

        $(document).on('click','.js-del',function(){//删除权限
            var id = $(this).parent().parent().attr('data-id');
            Prompt.init({
                title: '删除权限',
                width: 460,
                height: 200,
                shade : true,
                html : '<div class="zl_wy_sc">您确认删除此权限吗？</div><input id="task-id" type="hidden" value="'+id+'">',
                ConfirmFun : save,
                CancelFun : true
            });
        });
    });


    /*******************造data********************************/
    var xingArr = ['管理员1','曹伞','严帅','华二','管理员2','魏美丽','陶然','姜研','管理员3','管理员4','管理员m','马花藤','苗铺','凤发','管理员p','方看看','王伟','王生','管理员a','管理员e'];
    var roleArr = ['角色','个人','个人','个人','角色','个人','个人','个人','角色','角色','角色','个人','个人','个人','角色','个人','个人','个人','角色','角色','个人','角色','角色',];
    var reportArr = ['糖尿病','高血压','高血脂','心力衰竭','先心病','银血病','皮炎','湿疹','糖尿病','高血压','高血脂','心力衰竭','先心病','银血病','皮炎','湿疹','糖尿病','高血压','高血脂','心力衰竭','先心病','银血病','皮炎','湿疹'];
    var dataObj = [];

    for(var i=0; i < 20; i++)
    {
        var data = {};
        var tempRole = roleArr[i];
        var name = xingArr[i];

        var tempReport = reportArr[i]+"报表;"+reportArr[i+1]+"报表";

        data.id = i;
        data.name = name;
        data.role = tempRole;
        data.report= tempReport;
        var ss = Math.ceil(Math.random()*14);
        data.time = '2016-04-'+ (ss < 10 ? '0'+ss : ss) ;
        dataObj.push(data);
    }
    /********************end data*******************************/
    function initDate(data)
    {
        var html = '';
        $(data).each(function(idex,item){
            html += '<tr id="task-item-'+(idex+1)+'" data-id="'+(idex+1)+'">';
            html +='<td>'+item.name+'</td>';
            html +='<td>'+item.role+'</td>';
            html +='<td>'+item.report+'</td>';
            html +='<td>'+item.time+'</td>';
            html += '<td class="t-r">';
            html += '<a class="op js-detail" href="javascript:;" title="查看详情"></a>';
            html += '<a class="op del js-del" href="javascript:;"></a></td>';
            html += '</tr>';
        });
        $("#dataTs").empty().append(html);

        $("#pager1").show();
        $("#myTead").tablesorter({cssHeader: "", headers: {1: {sorter: false}, 0: {sorter: false},2:{sorter:false},3:{sorter:false},4:{sorter:false},5:{sorter:false}}}).tablesorterPager({container: $("#pager1"), size: $("#pager1 .pagesize").val()});
    }

    function submit(){
        var data = {};
        var role = $(".radio.checked").html();
        var name = $("#unicName").val();
        var report = '';
        $(".checkbox_area .checked").each(function(){
            report += $(this).html()+";";
        });
        var time = getNowFormatDate();

        data.id = 0;
        data.name = name;
        data.role = role;
        data.report= report;
        data.time = time;

        var addDateArr = [];
        addDateArr.push(data);
        $(dataObj).each(function(idex,item){
           item.id += 1;
            addDateArr.push(item);
        });

        dataObj = addDateArr;
        initDate(dataObj);
    }


    function save(){
        var id = $("#task-id").val();
        $.post('ajax/del.html',{id:id},function(data){
            if (data.success) {
                MU.msgTips('success',data.message);
                //$("#task-item-"+id).remove();
                debugger;
                var tempData =[];
                $(dataObj).each(function(idex,item){
                    if((item.id+1) != id)
                    {
                        item.id = item.id -1;
                        tempData.push(item);
                    }
                });

                initDate(tempData);
                Prompt.hide();
            }else{
                MU.msgTips('error',data.message);
            };
        },'json')
    }

    function doSearch()
    {
        var name = $("#searchName").val();
        var beginDate =  $("#beginDate").val();
        var searchType = $("#searchType").html();

        var tempData = [];
        if(name == "")
        {
            if(beginDate == "")
            {
                if(searchType == "" || searchType == "全部")
                {
                    tempData = dataObj;
                }
                else
                {
                    $(dataObj).each(function(idex,item){
                        if(item.role == searchType)
                        {
                            tempData.push(item);
                        }
                    });
                }
            }
            else
            {
                if(searchType == "" || searchType == "全部")
                {
                    $(dataObj).each(function(idex,item){
                        if(item.time == beginDate)
                        {
                            tempData.push(item);
                        }
                    });
                }
                else
                {
                    $(dataObj).each(function(idex,item){
                        if(item.time == beginDate && item.role == searchType)
                        {
                            tempData.push(item);
                        }
                    });
                }
            }
        }
        else
        {
            if(beginDate == "")
            {
                if(searchType == "" || searchType == "全部")
                {
                    $(dataObj).each(function(idex,item){
                        if(item.name.indexOf(name) >= 0)
                        {
                            tempData.push(item);
                        }
                    });
                }
                else
                {
                    $(dataObj).each(function(idex,item){
                        if(item.name.indexOf(name) >= 0 && item.role == searchType )
                        {
                            tempData.push(item);
                        }
                    });
                }
            }
            else
            {
                if(searchType == "" || searchType == "全部")
                {
                    $(dataObj).each(function(idex,item){
                        if(item.name.indexOf(name) >= 0 && item.time == beginDate )
                        {
                            tempData.push(item);
                        }
                    });
                }
                else
                {
                    $(dataObj).each(function(idex,item){
                        if(item.name.indexOf(name) >= 0 && item.time == beginDate && item.role == searchType)
                        {
                            tempData.push(item);
                        }
                    });
                }
            }

        }

        initDate(tempData);
    }

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }