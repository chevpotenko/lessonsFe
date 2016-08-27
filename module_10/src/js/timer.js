$(function(){
	var timer = (function (box) {
		var display = $('.' + box).find('input[type="text"]');
		var count;
		var sec = 0;
		var min = 0;
		var status = false;
		var valid = true;

		function run() {
			++sec;
			if (sec > 59) { sec = 0; ++min; };
			if (min > 59) { min = 0;};
			display.val(min + ':' + sec);
		}
		
		function render(){
			var str = display.val();
			var arr = str.split(':');
			min = arr[0];
			sec = arr[1];
			for (i=0; i<arr.length; ++i){
				check(arr[i], 59);
				if(!valid){
					return;
				}
			}
		};
		
		function check (val, correct){
			if(isNaN(val) || val > correct){
				alert('value is incorrect')
				return valid = false;
			}else{
				return valid = true;
			}
		}
		
		return{
			init: function(el){
				
			},
			start: function(){
				render();
				if(!status && valid){
					status = true;
					count = setInterval(run, 10);
				}
			},
			stop: function(){
				status = false;
				clearInterval(count);
			},
			clear: function(){
				status = false;
				clearInterval(count);
				sec = min = 0;
				display.val('0:0');
			}
		}
	})('box');
	
	
	$('.start').on('click', timer.start);
	$('.stop').on('click', timer.stop);
	$('.clear').on('click', timer.clear);
})
