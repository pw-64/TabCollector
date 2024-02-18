if (confirm("Collect Tabs?")) {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
        let data = [];
        tabs.forEach(tab => {
            data.push({
                favIconUrl: tab.favIconUrl,
                title: tab.title,
                url: tab.url
            });
            chrome.tabs.remove(tab.id);
        });
        Storage.set("tabs", data);
        chrome.tabs.create({url: "collection.html"});
    });
}
// window.close();