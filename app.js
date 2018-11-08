const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout.hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

//const rootDir = require('./util/path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('page-not-found', {docTitle: '404', path: '404'})
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
});

app.listen(3000);