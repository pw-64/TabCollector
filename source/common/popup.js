$("#version")[0].textContent = "v" + VERSION;
$("#message").hide();

let toggle_all = $("#toggle-all");
toggle_all.hide();

let checkboxes = [], filtered_tabs = [];

chrome.tabs.query({currentWindow: true}, tabs => {
    let children = [];
    tabs.forEach(tab => {
        if (!tab.url.includes(vendor.extension_url)) {
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
    if (filtered_tabs.length === 0) {$("#collect").hide(); $("#message").show();}
    if (filtered_tabs.length > 1) {toggle_all.show();}
});

toggle_all[0].onclick = () => {
    // // if a checkbox is ticked, +1 to sum. if not, -1 to sum
    // // if sum is more than 0, there are more ticked than unticked
    // let majority_ticked = 0 < checkboxes.reduce((sum, checkbox) => sum + (checkbox.checked ? 1 : -1), 0);
    // if (majority_ticked) {checkboxes.forEach(checkbox => checkbox.checked = false);}
    // else {checkboxes.forEach(checkbox => checkbox.checked = true);}

    // if a checkbox is ticked, sum + 1 (because 1 == true)
    // otherwise, sum is unchanged (because 0 == false)
    // if all are ticked, then sum will equal the number of checkboxes
    let all_ticked = checkboxes.length === checkboxes.reduce((sum, checkbox) => sum + checkbox.checked, 0);
    if (all_ticked) {checkboxes.forEach(checkbox => checkbox.checked = false);}
    else {checkboxes.forEach(checkbox => checkbox.checked = true);}
};

$("#collect")[0].onclick = () => {
    if (checkboxes.map(checkbox => checkbox.checked).includes(true)) { // if at least one checkbox is ticked
        let i = 0, data = [];
        filtered_tabs.forEach(tab => {
            if (checkboxes[i++].checked) { // if the checkbox corresponding to that tab is checked
                data.push({
                    favIconUrl: tab.favIconUrl,
                    title: tab.title,
                    url: tab.url,
                    tab_id: tab.id,
                });
            }
        });
        chrome.tabs.create({url: `collection.html?${encodeURIComponent(JSON.stringify(data))}`}); // open `collection.html` with the encoded data
        data.forEach(tab => chrome.tabs.remove(tab.tab_id)); // close the selected tabs
        window.close(); // close the popup
    }
};