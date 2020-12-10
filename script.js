

function changeBackground()
{
	var text = document.getElementById("a").style.backgroundColor ="red";


}

function backToNormal()
{
	var text = document.getElementById("a").style.backgroundColor ="";

}



var header = document.getElementById("header");
console.log("Premier H1 -> contenu:" +header.textContent);

var a = document.getElementById("a");
console.log(a.firstElementChild.innerHTML);

var a = document.getElementById("a");
console.log(a.lastElementChild.innerHTML);

console.log(a.children[2].innerHTML);

var ulistEl = document.querySelector('ul');
// Parent of UL --
console.log(ulistEl.parentElement.innerHTML);


console.log(a.children[3].innerHTML);
