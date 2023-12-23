let saveButton = document.querySelector("#js-save-button");
let cancelButton = document.querySelector("#js-cancel-button");
let formOptions = document.querySelector("#js-options-form");
let baseUrl;

// Rescue stored value
chrome.storage.local.get(["cbBaseUrl"]).then((result) => {
    if (result.cbBaseUrl != "") {
        formOptions.cbUrlBase.value = result.cbBaseUrl;
    }
});

saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    var urlBase = formOptions.cbUrlBase.value;
    if (isUrl(urlBase)) {
        chrome.storage.local.set({ "cbBaseUrl": urlBase });
    }
    else {
        document.querySelector(".js-text-info").innerHTML = "É necessário informar uma URL válida.";
    }
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    chrome.tabs.remove();
})

const isUrl = (url) => {
    return url.match(/^(https?:\/\/)(www\.)?([\.\da-z]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?&#]{1}[\da-z\.]+)*[\/\?]?$/gi);
}

chrome.management.getSelf()
    .then( (result) => {
        document.querySelector(".vtag").innerHTML = "v" + result.version
    });