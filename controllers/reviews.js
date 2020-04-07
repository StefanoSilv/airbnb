const Reviews = require('../models/reviews');
const router = require('express').Router();

router.get('/', (req, res) => {
	Reviews.find(req.query)
		.populate({
			path: 'author',
			select: 'name avatar location'
		})
		.then(reviews => {
			res.send(reviews);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		});
});

module.exports = router;
