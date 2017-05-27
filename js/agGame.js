//这是gameBet页面的事件
var agGame = angular.module('agGame', []);
agGame.controller('gameController', ['$scope', '$compile', function($scope, $compile) {
	$scope.choosePour = 0;
	$scope.allPour = 0;
	$scope.allSum = 0;
	$scope.delPour = 0;
	$scope.numI = 0;
	$scope.nextSum = "0.00";
	$('.ball-section').click(function() {
		var ball_sel_length = $('.ball-number-current').length - 0;
		$('.choose_bet_num').html(ball_sel_length);
		var sum = ball_sel_length * 0.2;
		$('#J-balls-statistics-amount').html(sum.toFixed(2));
		//		$scope.chooseBetNum = ball_sel_length*0.2;
	})
	//添加事件
	$scope.selAdd = function() {
		//		console.log($('.ball-number-current').length);
		var ball_sel_length = $('.ball-number-current').length - 0;
		var sum = ball_sel_length * 0.2;

		$scope.choosePour = ball_sel_length;
		$scope.chooseSum = sum.toFixed(2) - 0;
		$scope.chooseMul = 1;
		if(!$scope.choosePour) {
			$('.j-ui-miniwindow').css({
				'display': 'block',
				'z-index': '999'
			});
			$('.j-ui-mask').css({
				'display': 'block'
			});
			$('.closeTip').click(function() {
				$('.j-ui-miniwindow').css('display', 'none');
				$('.j-ui-mask').css({
					'display': 'none'
				});

			})
			$('.closeBtn').click(function() {
				$('.j-ui-miniwindow').css('display', 'none');
				$('.j-ui-mask').css({
					'display': 'none'
				});

			})
			return
		}
		fiveEach();
		appendList();
		init();
		all();
		//创建li
		function appendList() {
			$scope.numI++;
			//有删除
			//			var oli = $compile('<li><div class="result"><span class="bet">' + $scope.choosePour +
			//				'注</span><span class="multiple">' + $scope.chooseMul +
			//				'倍</span><span class="price"><dfn>¥</dfn><span class="choosesum">' + $scope.chooseSum +
			//				'</span></span><span class="close" ><a href="javascript:;" title="删除" ng-click="selDel('+$scope.numI+')" >删除</a></span></div>' +
			//				'<span>[一星_复式]</span><span style="position:relative">' + $scope.chooseNum + '</span>')($scope);
			//			$(oli).prependTo($('#J-balls-order-container'));
			//无删除
			var oli = $compile('<li><div class="result"><span class="bet">' + $scope.choosePour +
				'注</span><span class="multiple">' + $scope.chooseMul +
				'倍</span><span class="price"><dfn>¥</dfn><span class="choosesum">' + $scope.chooseSum +
				'</span></span></div>' +
				'<span>[一星_复式]</span><span style="position:relative">' + $scope.chooseNum + '</span>')($scope);
			$(oli).prependTo($('#J-balls-order-container'));
		}
		console.log($scope);
		//遍历插入ul
		function fiveEach(obj) {
			var selNum = [];
			for(var i = 0; i < 5; i++) {
				var fivenum = '';
				var obj = '.ball-content:eq(' + i + ')';
				$(obj).find('a').filter('.ball-number-current').each(function(indx, ele) {
					fivenum += ele.innerHTML;
				});
				if(fivenum == "") {
					selNum.push('-');
				} else {
					selNum.push(fivenum);
				}
			}
			$scope.chooseNum = selNum;
		}

		//初始
		function init() {
			$('.ball-control').find('a').removeClass('current');
			$('.ball-content').find('a').removeClass('ball-number-current');
			$('.choose_bet_num').html(0);
			$('#J-balls-statistics-amount').html("0.00");
		}
		//all
		console.log($scope.delPour);

		//统计
		function all() {
			$scope.allPour += $scope.choosePour;
			//		$scope.allSum += $scope.chooseSum;
			$scope.allSum += $scope.chooseSum.toFixed(2) - 0;
			$scope.nextSum = $scope.allSum.toFixed(2);
		}

	};
	//删除
	$scope.selDel = function(num) {
		console.log(-num);
		console.log($('#J-balls-order-container').children().eq(-num));
		var nextPour = parseInt($('#J-balls-order-container').children().eq(-num).find('.bet').html());
		var nextMon = $('#J-balls-order-container').children().eq(-num).find('.choosesum').html() - 0;
		nextMon = nextMon.toFixed(2);
		$scope.allPour -= nextPour;
		$scope.nextSum -= nextMon;
		$('#J-balls-order-container').children().eq(-num).remove();

	}
}])