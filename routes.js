const router = require('express').Router();
const review = require('./controllers/review');
const email = require('./controllers/email');

router.route('/')
  .get((req, res) => {
    res.status(200).json({ 'message': 'Welcome to George\'s API.' });
  });

router.route('/review')
  .get(review.index);

router.route('/review/:id')
  .get(review.show)
  .post(review.like);

router.route('/email')
  .post(email.create);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
