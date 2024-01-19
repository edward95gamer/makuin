chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "index.html"
 });
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: "index.html"});
    chrome.tabs.create({ url: "https://www.ubg4all.com/game/cars-lightning-speed/"});
});


if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://www.ubg4all.com/game/cars-lightning-speed/');
} else {
}
