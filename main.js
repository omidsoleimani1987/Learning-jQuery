/*
start with jquery:
    jquery.com -> download / CDN / version / minified
*/

// selectors
$('h1').hide();
$('p span').css('color', 'red');
$('h1#heading1').hide();
$('h1.heading2').hide();
$('.heading2').hide();

$('ul#list li:first').css('color', 'blue');
$('ul#list li:last').css('color', 'blue');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', '#cccccc');
$('ul#list li:nth-child(3n)').css('list-style', 'none');

$(':button').hide();
$(':submit').hide();
$(':text').hide();

$('[href]').css('color', 'orange');
$('a[href="http://yahoo.com"]').css('color', 'green');

// $('*').hide();
