'use strict';
$(function(){
	function Timer(box){
		let display = $('.' + box).find('input[type="text"]');
		let count;
		let sec = 0;
		let min = 0;
		let status = false;
		let valid = true;
		
		let run = () => {
			++sec;
			if (sec > 59) { sec = 0; ++min; };
			if (min > 59) { min = 0;};
			display.val(min + ':' + sec);
		}
		
		let render = () => {
			let str = display.val();
			let arr = str.split(':');
			min = arr[0];
			sec = arr[1];
			for (let i=0; i<arr.length; ++i){
				check(arr[i], 59);
				if(!valid){
					return;
				}
			}
		}
		
		let check = (val, correct) => {
			if(isNaN(val) || val > correct){
				alert('value is incorrect')
				return valid = false;
			}else{
				return valid = true;
			}
		}
		
		class Info {
			start(){
				render();
				if(!status && valid){
					status = true;
					count = setInterval(run, 1000);
				}
			}
			
			stop(){
				status = false;
				clearInterval(count);
			}
			
			clear(){
				status = false;
				clearInterval(count);
				sec = min = 0;
				display.val('0:0');
			}
		};
		return new Info();
	}
	
	let timer1 = new Timer('box1');
	$('.start').on('click', timer1.start);
	$('.stop').on('click', timer1.stop);
	$('.clear').on('click', timer1.clear);
	
	let timer2 = new Timer('box2');
	$('.start2').on('click', timer2.start);
	$('.stop2').on('click', timer2.stop);
	$('.clear2').on('click', timer2.clear);
});
