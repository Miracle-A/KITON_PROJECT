function fixedHeader(){
	let ypos = window.pageYOffset;
	if(ypos > 200){
document.getElementById("headerWrapper").style.position="fixed";
}else{
document.getElementById("headerWrapper").style.position="relative";
}
window.addEventListener("scroll",fixedHeader);

     function enlarge() {
     	let size =document.getElementById("down_navigation")
     	size.style.color="purple"

     }

document.getElementById("down_navigation").addEventListener("mouseover",enlarge);