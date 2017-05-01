var mag = document.getElementsByClassName('mag');
var cnt = document.getElementsByClassName('cnt');
var part1 =document.getElementsByClassName('part1');
var part2 =document.getElementsByClassName('part2');
for (var i = mag.length - 1; i >= 0; i--) {
	mag[i].onmouseover = function(e){
		this.style.background='rgba(0,0,0,0)';
	}
	mag[i].onmouseout = function(e){
		if (e.target||window.event.srcElement) {
			setTimeout(function(){
			e.target.style.background='rgba(0,0,0,1)';
			},500);
		}
}
}
setTimeout(function(){

},10000)
