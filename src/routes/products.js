const { Router } = require('express');
const router = Router();
const Product = require('../models/Product');

const PAGINATE_LIMIT_DEFAULT = 10;
const PAGINATE_PAGE_DEFAULT = 1;

router.get('/products', async (req, res) => {
  const limit = req.query.limit || PAGINATE_LIMIT_DEFAULT;
  const page = req.query.page || PAGINATE_PAGE_DEFAULT;
  const products = await Product.paginate({}, { limit, page });
  res.json(products);
});
router.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  const productSaved = await newProduct.save();
  res.send(productSaved);
});

module.exports = router;