const path = require('path');

const express = require('express');

const router = express.Router();

const adminData = require('./admin');

const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
    const products = adminData.products;
    // express
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
    //pug
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true});
});

module.exports = router;