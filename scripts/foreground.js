//get show

function getShow(url) {
	if (/^https:\/\/4anime.to/.test(current_tab_info.url)) {
		var show = document.getElementById('titleleft').getAttribute('title');
	}
	return show;
}