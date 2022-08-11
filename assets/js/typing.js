var part = 0;
var partIndex = 0;
var content = [$('meta[name=author]').prop('content'), "@" + $('meta[name=github]').prop('content')];
var typingObj = document.querySelector("#typing");
var interval = setInterval(Typing, 100);

function Typing() { 
	var text =  content[part].substring(0, partIndex + 1);
	typingObj.innerHTML = text;
	partIndex++;

	if(text === content[part]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	var text =  content[part].substring(0, partIndex - 1);
	typingObj.innerHTML = text;
	partIndex--;

	if (text === '') {
		clearInterval(interval);

		if(part == (content.length - 1))
			part = 0;
		else
			part++;
		
		partIndex = 0;

		setTimeout(function() {
			interval = setInterval(Typing, 100);
		}, 200);
	}
}
