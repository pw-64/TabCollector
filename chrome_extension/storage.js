class Storage {
    static set(key, value) {
        chrome.storage.local.set({[key]:value});
    }
    static async get(key) {
        let value;
        await chrome.storage.local.get(key).then((json) => {value = json[key];});
        return value;
    }
}