const router = require('express').Router()
let Category = require('../models/category.model')

router.route('/').get((req, res) => [
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('error: ' + err))
])

router.route('/add').post((req, res) => {
    const { name, image } = req.body;

    const newCategory = new Category({name, image});

    newCategory.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then((data) => {
            console.log("data", data);
            if (!data) throw Error('No category found');
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json('error: ' + err))
})

module.exports = router;