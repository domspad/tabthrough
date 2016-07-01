
var htags = document.querySelectorAll("h1, h2, h3, h4");

var arrayLength = htags.length;

for (var i = 0; i < arrayLength; i++){
	htags[i].setAttribute("tabindex",String(i+1))
}

console.log("Tab Through extension activated!")