var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema(
  {
    content: String,
    author: { type: mongoose.Schema.type.ObjectId },
    article: String,
  },
  { timestamps: true }
);
var Comments = mongoose.model('Comment', commentSchema);
module.exports = Comments;