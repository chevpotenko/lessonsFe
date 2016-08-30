$(function() {
	var result;
	$.ajax({
		url:'http://api.joind.in/v2.1/events?filter=hot',
		success: function(data){
			result = data.events;
			render(result);
		} 
	});
	
	function render(data){
		var results = document.getElementById("results");
		results.innerHTML = tmpl("item_tmpl", {data:data});
	}
	
	function sortDate(data, direction){
		data.sort(function (a, b){
			if (direction){
				return new Date(a.start_date) - new Date (b.start_date);
			}else{
				return new Date(b.start_date) - new Date (a.start_date);
			}
		})
	}
	
	function searchText(data, str){
		if(str.length ==0){
			render(data);
			return;
		}
		var newArr = data.filter(function(val){
			return val.description.search(str) != -1;
		});
		render(newArr);
	}
	
	$('.ascending').on('click', function(){
		sortDate(result, true);
		render(result);
	});
	
	$('.descending').on('click', function(){
		sortDate(result, false);
		render(result);
	})
	
	$('.search').on('keyup', function(){
		var str = $(this).val();
		searchText(result, str);
	});
});
