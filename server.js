const express = require('express');
const browserSync = require('browser-sync');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
app.use(express.static('app'));

/*app.get('/', (req, res) => {
    res.sendFile('index.html',  {root : __dirname + '/app'});
});*/

browserSync({
    server: 'app',
    files: ["app/*.html", "app/css/*.css", "app/js/*.js"],
    open: false
});