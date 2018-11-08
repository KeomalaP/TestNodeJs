const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path')

const products = [];
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product', addProduct: true, productsCSS: true});
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title, price: req.body.price, desc: req.body.desc })
    res.redirect('/');
});

exports.routes = router;
exports.products = products;