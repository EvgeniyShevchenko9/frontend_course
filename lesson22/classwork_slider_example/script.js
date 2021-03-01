//let spans = document.querySelectorAll('span');
//for(let i = 0; i < spans.length; i++){
//	spans[i].innerHTML = 'POWERCODE'
//}
//
//


let spans = $('span');
spans.html('POWERCODE');
spans.addClass('test')

let button = $('.show');

console.log(button.css('background-color'))
button.css('background-color', '#f00')


$('.menu-button').click(function(){
	$('.menu-drop').slideToggle(1000);
})








