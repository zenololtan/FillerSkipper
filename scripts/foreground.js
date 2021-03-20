//get show

function getShow() {
		var show = document.getElementById('titleleft').getAttribute('title');
	return show;
}

function getJson(show) {
	fetch()
	.then(response => {
		return response.json();
	})
}
console.log('i fukcing injected cunt');