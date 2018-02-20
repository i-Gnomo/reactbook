```
install node 
$ npm --version
$ npm install --global babel-cli
$ babel --version
$ npm install --global browserify
$ browserify --version

$ npm install --save-dev react
$ npm install --save-dev react-dom
$ npm install --save-dev babel-preset-react
$ npm install --save-dev babel-preset-es2015

$ babel --presets react,es2015 js/source -d js/build
$ browserify js/build/app.js -o bundle.js
cat/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
```
scripts/build.sh
```
# js transform
babel --presets react,es2015 js/source -d js/build
# js package
browserify js/build/app.js -o bundle.js
# css package
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# done
date; echo;
```
```
$ npm install -global watch
$ watch "sh scripts/build.sh" js/source css
```
```
$ sh scripts/watch.sh
```
```
$ npm install uglify-js -g
$ npm install cssshrink -g
```
scripts/deploy.sh
```
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
```
```
$ sh scripts/deploy.sh
```






