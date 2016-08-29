$(function(){
	/*task #1----------------------------------------*/
	var counter = (function counter(){
		var val = 0;
		return {
			count: function(){
				return ++val;
			}
		}
	})();
	
	$('.first').on('click', function(e){
		e.preventDefault();
		$('.count').html(counter.count());
	});
	
	
	/*task #3----------------------------------------*/
	var links = $('.links')
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = (function(i) {
			return function(e){
				e.preventDefault();
				console.log(i);
			}
		})(i);
	}
})

/*task #2----------------------------------------*/

var HelloPage = {
	name: 'GoIT',
	init: function() {
		console.log('Hello, ' + this.name);
	}
}

Function.prototype.bind = function (scope) {
	var fn = this;
	return function () {
		return fn.apply(scope);
	};
}

window.onload = HelloPage.init.bind(HelloPage);
