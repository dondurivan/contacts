const router = require('express').Router()
let Category = require('../models/category.model')

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) throw Error('No items');

        res.status(200).json(categories)
    } catch (e) {
        res.status(400).json('error: ' + e.message)
    }
})

router.post('/add', async(req, res) => {
    const { name, image } = req.body;

    const newCategory = new Category({name, image});
    try {
        const item = await newCategory.save();
        if (!item) throw Error('Something went wrong saving the category');

        res.status(200).json(item);
    } catch (e) {
        res.status(400).json('error: ' + e.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const item = await Category.findById(req.params.id);
        if (!item) throw Error('No category found');

        res.status(200).json(item);
    } catch (e) {
        res.status(400).json('error: ' + e.message)
    }
})

module.exports = router;