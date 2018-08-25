const express = require('express');
const browserSync = require('browser-sync');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
app.use(express.static('./src'));

browserSync({
    server: './src',
    files: ["src/*.html", "src/css/*.css", "src/js/*.js"],
    open: false
});