const inp = document.getElementById("box");
const btn = document.getElementById("butt");

function submit() {
	document.cookie = "token=" + inp.value + ";Secure ;SameSite=strict";
	location.reload();
}

btn.onclick = submit
inp.onkeypress = function(e){
	if (!e) e = window.event;
	var keyCode = e.code || e.key;
	if (keyCode == 'Enter'){
		return submit();
	}
}