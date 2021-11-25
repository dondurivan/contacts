const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Comment = model("Comment", commentSchema);

module.exports = Comment; 