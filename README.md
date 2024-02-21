# TabCollector
A browser extension that collects a list of open tabs, then closes them to save resources.

## Installation
> [!IMPORTANT]
> Distributables will not be generated anymore starting v1.4, since they require signing from the vendor's extension store. I am in the process of sorting this out. Any distributables from previous releases will not work.
> 
> The distributables will be replaced by zips of the `/building/build/*` folders for each browser.

### Chrome
1. Download the [latest release](https://github.com/pw-64/TabCollector/releases/latest) and extract
2. Open `chrome://extensions`
3. Enable `Developer Mode`
4. Click `Load unpacked`
5. Provide the extracted folder

### Firefox
Firefox doesn't allow unverified extensions, unless you want to use temporary mode. That means you have to re-install the extension every time you start the browser. Until there is a signed release, it will be unuseable on Firefox for normal users until it is signed.

However, there is a workaround:
1. Clone the repo
2. Install Mozilla's [`web-ext`](https://github.com/mozilla/web-ext) tool
3. Run `cd building && bash 1-build.sh` to build the extension (or use the zipped
4. Run `cd build/firefox && web-ext run` to launch Firefox with the extension installed
5. (optional) Link Firefox to that command: `nano ~/.bashrc` and add `alias firefox='cd PATH_TO_REPO/building/build/firefox && web-ext run'`
6. ^ Now you can launch Firefox (with the extension installed) simply by running `firefox` in the terminal

### Other Browsers
If you would like to see this extension in another browser, please open an issue with the `[FEATURE]` tag. While I am in the process of sorting out the Chrome and Firefox signing, further browser support is on hold, but please do open the issue so we can evaluate it in the future.

## Feedback
Please share any thoughts in the [v1 Feedback Discussion](https://github.com/pw-64/TabCollector/discussions/1).

### Bug Reporting
Please share any bugs or errors you experience in an issue with the `[BUG]` tag.
Please include your browser, browser version, and extension version.
**Please search the open and closed issues to help avoid creating duplicates.**

## Credits
Thank you to the following projects and websites:
- [jQuery](https://github.com/jquery/jquery) - DOM manipulation and helpful utilities
- [LESS](https://github.com/less/less.js) - CSS precompiler
- [svgrepo](https://www.svgrepo.com) - Open-license SVG icons
- [svgcrop](https://svgcrop.com) - Remove empty space around SVGs

## Screenshots
### It is in active development so these will change
![](before.jpg)
![](during.jpg)
![](after.jpg)
