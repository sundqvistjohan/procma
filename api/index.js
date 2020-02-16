const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require('./queries')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.get('/articles', db.getArticles)
app.get('/articles/:id', db.getArticleById)
app.post('/articles', db.createArticle)
