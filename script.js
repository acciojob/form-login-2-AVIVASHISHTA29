//your JS code here. If required.
let form = document.getElementById("form1");
form.addEventListener("submit",(e)=>
	{
	e.preventDefault();
		let myStr = "";
		for(let i=0;i<form.length;i++){
			if(form.elements[i].value!=="Submit"){
				myStr+= form.elements[i].name+": "+form.elements[i].value+"\n";
			}
		}
		alert(myStr);
	
})