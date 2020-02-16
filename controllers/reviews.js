const db = require('../db');

// GET /api/reviews
function reviewsIndex(req, res, next) {
  db.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(data.rows);
  });
}

// GET /api/reviews
function reviewsShow(req, res, next) {
  db.query('SELECT * FROM reviews WHERE id = $1 LIMIT 1', [req.params.id], (err, data) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(data.rows[0]);
  });
}

function reviewsLike(req, res, next) {
  db.query('UPDATE reviews SET likes = likes + 1 WHERE id = $1', [req.params.id], (err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ 'message': 'Blog post liked successfully.' });
  });
}

module.exports = {
  index: reviewsIndex,
  show: reviewsShow,
  like: reviewsLike
};
