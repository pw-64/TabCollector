# Remove existing builds
rm -r build 2> /dev/null

# Make vendor dirs
mkdir -p build/chrome build/firefox

# Copy common source files
cp -r ../source/common/. build/chrome
cp -r ../source/common/. build/firefox

# Copy browser-specific files
cp -r ../source/vendor/chrome/. build/chrome
cp -r ../source/vendor/firefox/. build/firefox