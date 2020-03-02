const db = require('../db');

// GET /api/reviews
function reviewsIndex(req, res) {
  db.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      res.status(500).json({ 'message': 'Get reviews query error.' });
    }
    res.status(200).json(data.rows);
  });
}

// GET /api/reviews
function reviewsShow(req, res) {
  db.query('SELECT * FROM reviews WHERE id = $1 LIMIT 1', [req.params.id], (err, data) => {
    if (err) {
      res.status(500).json({ 'message': 'Get review query error.' });
    }
    res.status(200).json(data.rows[0]);
  });
}

function reviewsLike(req, res) {
  db.query('UPDATE reviews SET likes = likes + 1 WHERE id = $1', [req.params.id], (err) => {
    if (err) {
      res.status(500).json({ 'message': 'Like review query error.' });
    }
    res.status(200).json({ 'message': 'Blog post liked successfully.' });
  });
}

module.exports = {
  index: reviewsIndex,
  show: reviewsShow,
  like: reviewsLike
};
