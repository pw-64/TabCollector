import json

VERSION = "1.1"

with open("../source/common/version.js", "w") as file:
    file.write(f"const VERSION = {VERSION};")

with open("../source/vendor/chrome/manifest.json", "r+") as file:
    manifest = json.load(file)
    manifest["version"] = VERSION
    file.seek(0)
    file.write(json.dumps(manifest, indent=4))

with open("../source/vendor/firefox/manifest.json", "r+") as file:
    manifest = json.load(file)
    manifest["version"] = VERSION
    file.seek(0)
    file.write(json.dumps(manifest, indent=4))