$(function(){
	//个人信息
	$('.person-info').hover(function() {
		$(this).children('a.nic-name').addClass('cur');
		$(this).children('ul').removeClass('dis-no');
	}, function() {
		$(this).children('a.nic-name').removeClass('cur');
		$(this).children('ul').addClass('dis-no');
	});

	$('.list').hover(function() {
		$(this).addClass('on');
	}, function() {
		$(this).removeClass('on');
	}).click(function(event) {
		if($(this).next("dl").html() == null){
			$('.list').removeClass('cur').siblings('dl').addClass('dis-no');
			$(this).addClass('cur');
		}else{
			$('.list').find('em.arrow').removeClass('down');
			$('.list').removeClass('cur').siblings('dl').addClass('dis-no');
			$(this).find('em.arrow').addClass('down');
			$(this).addClass('cur').siblings('dl').removeClass('dis-no');
		}
		
	});

	$('.subwidget dd').click(function(event) {
		$('.subwidget dd').removeClass('curr');
		$(this).addClass('curr');
	}).hover(function() {	
		$(this).addClass('on');
	}, function() {
		$(this).removeClass('on');
	});

	$('.hastips em').tipsy({gravity:'s',live: true});
	$('.new-test-task i').tipsy({gravity:'se',live: true});
	$('.tab li').live('click', function(event) {
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.tab-cont').hide();
		$('.tab-cont').eq($(this).index()).show();
	});
	
	var open = 0;
	$(".choose-cdn em").live('click', function(){	
		if(open == 0){
			$(this).siblings("ul").slideDown('fast');
			open = 1;
		}else{
			$(this).siblings("ul").slideUp('400');
			open = 0;
		}
	});

	function trHighLight(id){
		$(id).live({
			mouseenter:function(){
				$(this).addClass('high-light');
			},
			mouseleave:function(){
				$(this).removeClass('high-light');
			}
		});
	}

	trHighLight('.table table tr');
	trHighLight('.tables tr');
	//tab
	$('.addcont02-tit li').click(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.item01').eq($(this).index()).removeClass('dis-no').siblings().addClass('dis-no');
	});
	//tab
	$('.addcont03-tit li').click(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.item02').eq($(this).index()).removeClass('dis-no').siblings().addClass('dis-no');
	});
	//tab
	$('.add_cp_tab_tit li a').click(function() {
		$(this).parent().addClass('current').siblings().removeClass('current');
		$('.add-content01').eq($(this).parent().index()).removeClass('dis-no').siblings().addClass('dis-no');
	});
	 $('.time').click(function(event) {
		$(this).addClass('on').siblings('.time').removeClass('on');
		});
	$('.define-btn').click(function(){
		$('.define-cont').show();
		 });
    $(document).on('click', '.sure-btn', function(event){
   		 $(this).parent().hide();
		});
});