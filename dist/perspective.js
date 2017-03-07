/*
	****   Prespective V1.0.0 by Ahmed Tarek ****
	****   Licensed Under the MIT License ****
*/

function perspective(a,b) {
	if(b === undefined){
		var e = document.querySelector('['+'p-'+a+']')
		var c = e.getAttribute("style")
		e.setAttribute("style", c+';'+a+':'+e.getAttribute('p-'+a)+';')
	}
	else {
		var e = document.querySelector('['+'p-'+a+'-'+b+']')
		var c = e.getAttribute("style")
		e.setAttribute("style", c+';'+a+'-'+b+':'+e.getAttribute('p-'+a+'-'+b)+';')
	}
}