const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    title: String
}, {
    timestamps: true,
});

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    email: String,
    comments: [commentSchema]
}, {
    timestamps: true,
});

const Person = model("Person", personSchema);

module.exports = Person; 