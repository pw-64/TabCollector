(async () => {
    let data = await Storage.get("tabs");
    let output = [];
    data.forEach(tab => {
        let container = document.createElement("div");
        let favicon = document.createElement("img");
        favicon.src = tab.favIconUrl;
        let link = document.createElement("a");
        link.textContent = tab.title;
        link.href = "#";
        link.onclick = () => {chrome.tabs.create({url: tab.url})};
        container.replaceChildren(favicon, link);
        output.push(container);
    });
    $("#output")[0].replaceChildren(...output);
})();