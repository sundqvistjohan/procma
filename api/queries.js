const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "procma_api",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
});

const getArticles = (request, response) => {
  pool.query("SELECT * FROM articles ORDER BY id ASC", (error, results) => {
    if (error) {
      response.status(400).json(error);
    } else {
      response.status(200).json(results.rows);
    }
  });
};

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * from articles WHERE id = $1", [id], (error, results) => {
    if (error) {
      response.status(400).json(error);
    } else {
      response.status(200).json(results.rows);
    }
  });
};

const createArticle = (request, response) => {
  const { title, body, date } = request.body;

  pool.query(
    "INSERT INTO articles (title, body, date) VALUES ($1, $2, $3) RETURNING id",
    [title, body, date],
    (error, results) => {
      if (error) {
        response.status(400).json(error);
      } else {
        response
          .status(201)
          .send(`Article added with ID ${results.rows[0].id}`);
      }
    }
  );
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle
};
