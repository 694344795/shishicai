$(function() {
	//这里都是gameBet页面效果
	$('.ball-number').click(function() {
		$(this).toggleClass('ball-number-current');
	})
	$('.ball-control').find('a:first').click(function() {
		$(this).parent().prev('.ball-content').find('a').addClass('ball-number-current');
	})
	$('.ball-control').find('a:eq(1)').click(function() {
		$(this).parent().prev('.ball-content').find('a').removeClass('ball-number-current').slice(5, 10).addClass('ball-number-current');
	})
	$('.ball-control').find('a:eq(2)').click(function() {
		$(this).parent().prev('.ball-content').find('a').removeClass('ball-number-current').slice(0, 5).addClass('ball-number-current');
	})
	$('.ball-control').find('a:eq(3)').click(function() {
		$(this).parent().prev('.ball-content').find('a').removeClass('ball-number-current').filter(':odd').addClass('ball-number-current');
	})
	$('.ball-control').find('a:eq(4)').click(function() {
		$(this).parent().prev('.ball-content').find('a').removeClass('ball-number-current').filter(':even').addClass('ball-number-current');
	})
	$('.ball-control').find('a:eq(5)').click(function() {
		$(this).parent().prev('.ball-content').find('a').removeClass('ball-number-current');
	})
	//	$('.game_money_list').click(function(){
	//		$(this).find('.choose-list').css('display','block').blur(function(){
	//			$(this).css('display','none');
	//		});
	//	})
	$('.ball-control').find('a').click(function() {
		$('.ball-control').find('a').removeClass('current');
		$(this).addClass('current');
	})
	//倒计时
	var times = setInterval(function() {
		var oldda = new Date('2017/09/20 00:00:00')
		var da = new Date();
		var t = oldda - da;
		var min = Math.floor(t / 1000 / 60 % 60);
		var sec = Math.floor(t / 1000 % 60);
		min < 10 ? min = '0' + min : min;
		sec < 10 ? sec = '0' + sec : sec;
		min = min + "";
		sec = sec + "";
		var min1 = min.charAt(0);
		var min2 = min.charAt(1);
		var sec1 = sec.charAt(0);
		var sec2 = sec.charAt(1);
		$('.min-left').html(min1);
		$('.min-right').html(min2);
		$('.sec-left').html(sec1);
		$('.sec-right').html(sec2);
	}, 1000);
})