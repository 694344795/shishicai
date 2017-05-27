$(function(){
	//登录
	$('.login_btn').click(function(){
		if ($('.user-name').val()=='') {
			$('.msg-show').css({'display':'block'}).html('用户名不能为空')
			
		} else if($('.user-password').val()==''){
			$('.msg-show').css({'display':'block'}).html('密码不能为空')
		}else{
			$(this).attr('href','gameBet.html');
		}
	})
	
})