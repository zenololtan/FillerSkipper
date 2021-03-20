chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		if (/^https:\/\/4anime.to/.test(current_tab_info.url)) {
			chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i injected'))
		}
	});
});
