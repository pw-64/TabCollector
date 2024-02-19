if (confirm("Collect Tabs?\nThis will clear any unsaved data for tabs in this window")) { // confirm the user wants to collect & destroy tabs
    chrome.tabs.query({currentWindow: true}, (tabs) => { // get tabs in this window
        let data = []; // array to hold extracted tab information
        tabs.forEach(tab => {
            // for each tab, retrieve the favicon URL, title (tab name) and URL
            data.push({
                favIconUrl: tab.favIconUrl,
                title: tab.title,
                url: tab.url
            });
            chrome.tabs.remove(tab.id); // close the tab
        });
        Storage.set("tabs", data); // store that tab data in the extension storage
        chrome.tabs.create({url: "collection.html"}); // open the collection tab
    });
}
window.close(); // close the popup