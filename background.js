
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active && tab.url && tab.url.includes('primevideo.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
  }
});
