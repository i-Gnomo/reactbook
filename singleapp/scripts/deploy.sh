# delete last version
rm -rf __deployme
mkdir __deployme

# build script
sh scripts/build.sh

# compressed js
uglifyjs bundle.js --comments -m -o __deployme/bundle.js
# compressed css
cssshrink bundle.css > __deployme/bundle.css
# copy HTML and images
cp index.html __deployme/index.html
cp -r images/ __deployme/images/

# done
date; echo;