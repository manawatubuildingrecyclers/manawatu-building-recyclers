```
$ npm init
$ npm install express
$ npm install node-sass --save-dev
$ npm install scss-compile --save-dev
$ npm run watch
$ npm start
```

Will need to add the following to `scripts` in the package.json file:

```
"test": "npm run scss-compile",
"scss-compile": "node-sass -rw assets/scss -o assets/css",
"watch": "npm run scss-compile"
 ```
