const router = require('express').Router()
let Person = require('../models/person.model')

// Get categories
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        if (!people) throw Error('No items');

        res.status(200).json(people)
    } catch (e) {
        res.status(400).json('error: ' + e.message)
    }
})

// Add single Person
router.post('/add', async(req, res) => {
    const { name, nickname, phone, email } = req.body;

    const newPerson = new Person({name, nickname, phone, email});
    try {
        const item = await newPerson.save();
        if (!item) throw Error('Something went wrong saving the person');

        res.status(200).json(item);
    } catch (e) {
        res.status(400).json('error: ' + e.message)
    }
})

module.exports = router;