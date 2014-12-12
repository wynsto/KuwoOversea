var js=document.querySelectorAll('script')
js.item(1).innerHTML=''
js.item(js.length-1).innerHTML=''
document.head.querySelectorAll('script').item(1).innerHTML=''
var removeAd=function(){
	
var sc=document.querySelectorAll('script')
for(var i=0;i<sc.length;i++){
	if(sc.item(i).src=="http://wa.kuwo.cn/lyrics/img/kwgg/personalAd.js"||sc.item(i).src=="")
	sc.item(i).remove()
}
document.querySelector('#down_tan').remove()
document.querySelector('#web_back_div_0').remove()
 sc.item(1).innerHTML=''
sc.item(1).remove()
sc.item(2).remove()
sc.item(3).remove()
}

//setTimeout(removeAd(),2000)
window.onload=removeAd()