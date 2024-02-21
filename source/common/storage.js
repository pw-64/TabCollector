// for interfacing with the extension storage
class Storage {
    static async set(key, value) {return await vendor.storage.local.set({[key]:value});}
    static async get(key) {return await vendor.storage.local.get(key).then(json => json[key]);}
}