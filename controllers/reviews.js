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

module.exports = {
  index: reviewsIndex
};
