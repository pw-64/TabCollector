let tabs = JSON.parse(decodeURIComponent(window.location.search.slice(1)));
let output = []; // array to hold HTML elements
tabs.forEach(tab => {
    // create HTML elements and append to the output array
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
$("#output")[0].replaceChildren(...output); // add the generated HTML to the document