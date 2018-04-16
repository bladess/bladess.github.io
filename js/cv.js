$('#age').text(moment().diff('1994-03-19', 'years')+" ans");

var container = document.getElementById('htmlcss');
var container2 = document.getElementById('php');
var container3 = document.getElementById('js');
var container4 = document.getElementById('eng');


var barHtml = new ProgressBar.Circle(container, {
   strokeWidth: 10,
   easing: 'easeInOut',
   duration: 1000,
   color: 'royalblue',
   trailColor: 'white',
   trailWidth: 0,
   svgStyle: null
});
barHtml.setText('Html/Css');
barHtml.text.style.color='#29303d';
barHtml.animate(0.9);

var barPhp = new ProgressBar.Circle(container2, {
   strokeWidth: 10,
   easing: 'easeInOut',
   duration: 1000,
   color: 'royalblue',
   trailColor: 'white',
   trailWidth: 0,
   svgStyle: null
});
barPhp.setText('Symfony')
barPhp.text.style.color='#29303d';
barPhp.animate(0.8);


var barJs = new ProgressBar.Circle(container3, {
   strokeWidth: 10,
   easing: 'easeInOut',
   duration: 1000,
   color: 'royalblue',
   trailColor: 'white',
   trailWidth: 0,
   svgStyle: null
});
barJs.setText('Javascript')
barJs.text.style.color='#29303d';
barJs.animate(0.85);


var barEn = new ProgressBar.Circle(container4, {
   strokeWidth: 10,
   easing: 'easeInOut',
   duration: 1000,
   color: 'royalblue',
   trailColor: 'white',
   trailWidth: 0,
   svgStyle: null
});
barEn.setText('Anglais')
barEn.text.style.color='#29303d';
barEn.animate(0.90);