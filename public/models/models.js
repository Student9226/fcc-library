const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsSchema = new Schema({
  comments: [String]
});
const bookSchema = new Schema({
  title: { type: String, required: true },
  comments: [commentsSchema]
});

module.exports.Book = mongoose.model("book", bookSchema);
module.exports.Comments = mongoose.model("comments", commentsSchema);
