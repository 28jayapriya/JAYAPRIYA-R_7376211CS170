import express from 'express';
const router = express.Router()
import { getProducts, getProductById } from '../controllers/product.js';

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
