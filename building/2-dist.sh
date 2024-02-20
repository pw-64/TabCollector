# Remove existing distibutables
rm -r dist 2> /dev/null

# Make vendor dirs
mkdir -p dist/chrome dist/firefox

# Pack chrome extension and move crx to vendor distibutables dir
(
    echo ===== CHROME ===== &&\
    cp chrome.pem build &&\
    cd build &&\
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --pack-extension="chrome" --pack-extension-key="chrome.pem" &&\
    mv chrome.crx ../dist/chrome/ &&\
    echo DONE
)

# Pack firefox extension and move zip to vendor distibutables dir
(
    echo ===== FIREFOX ===== &&\
    cd build/firefox &&\
    web-ext build &&\
    mv web-ext-artifacts/tabcollector-1.zip ../../dist/firefox/tabcollector.zip &&\
    echo DONE
)