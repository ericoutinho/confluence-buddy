let extensionInfo;
chrome.management.getSelf()
    .then( result => extensionInfo = result );


chrome.runtime.onInstalled.addListener(({ reason }) => {
    chrome.storage.local.set({ "cbBaseUrl" : "https://www.atlassian.com/br/" });
});