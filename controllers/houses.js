const Houses = require('../models/houses');
const router = require('express').Router();

router.get('/', (req, res) => {
	Houses.find(req.query)
		.select('title type price city region images bedrooms lat lng rating')
		.populate('type')
		.lean()
		.then(data => {
			let houses = data.map(p => {
				p.image = p.images[0];
				delete p.images;
				return p;
			});
			res.send(houses);
		})
		.catch(err => {
			res.send(err);
		});
});

router.get('/:id', (req, res) => {
	Houses.findById(req.params.id)
		.populate('type')
		.populate('amenities')
		.populate({
			path: 'host',
			select: 'name avatar'
		})
		.then(house => {
			res.send(house);
		})
		.catch(err => {
			res.send(err);
		});
});

module.exports = router;
