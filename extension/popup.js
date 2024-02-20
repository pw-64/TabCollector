let checkboxes = [], filtered_tabs = [];

chrome.tabs.query({currentWindow: true}, tabs => {
    let children = [];
    tabs.forEach(tab => {
        if (!tab.url.includes("chrome-extension://" + chrome.runtime.id)) {
            let container = $("<div>")[0];
            let checkbox = $("<input>", {type: "checkbox"})[0];
            let tab_title = $("<span>")[0];
            tab_title.textContent = tab.title;
            container.append(checkbox, tab_title);
            children.push(container);
            checkboxes.push(checkbox);
            filtered_tabs.push(tab);
        }
    });
    $("#tabs")[0].replaceChildren(...children);
    $("#message").hide();
    if (filtered_tabs.length === 0) {
        $("#collect").hide();
        $("#message").show();
    }
});

$("#collect")[0].onclick = () => { // bind to button press
    if (checkboxes.map(checkbox => checkbox.checked).includes(true)) { // if at least one checkbox is ticked
        let i = 0, data = [];
        filtered_tabs.forEach(tab => {
            if (checkboxes[i++].checked) {
                data.push({
                    favIconUrl: tab.favIconUrl,
                    title: tab.title,
                    url: tab.url,
                    tab_id: tab.id,
                });
            }
        });
        Storage.set("tabs", data);
        chrome.tabs.create({url: "collection.html"});
        data.forEach(tab => chrome.tabs.remove(tab.tab_id));
    }
};