console.log('im here!');
chrome.tabs.onActivated.addListener(tab => {
	chrome.tabs.get(tab.tabId, current_tab_info => {
		if (/^https:\/\/4anime.to/.test(current_tab_info.url)) {
			chrome.tabs.executeScript(null, {file: './scripts/foreground.js'}, () => console.log('Foreground script injected'))
		}
	});
});
