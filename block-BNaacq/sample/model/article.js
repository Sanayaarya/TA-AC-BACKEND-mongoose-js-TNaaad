var mongoose = require('module');
var Schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: String,
    like: Number,
    author: { type: mongoose.Schema.type.ObjectId },
    comments: String,
  },
  { timestamps: true }
);

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;