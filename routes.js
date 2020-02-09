const router = require('express').Router();
const reviews = require('./controllers/reviews');

router.route('/')
  .get((req, res) => {
    res.status(200).json('Welcome to George\'s API.');
  });

router.route('/reviews')
  .get(reviews.index);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
