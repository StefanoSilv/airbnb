const Amenities = require('../models/amenities');

module.exports = (req, res) => {
	Amenities.find(req.query)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		});
};
