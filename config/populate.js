require('dotenv').config();
const database = require('../db');
const Houses = require('../models/houses');
Houses.create(require('./v1/data.json'))
	.then(houses => {
		console.log('Success');
		process.exit();
	})
	.catch(err => {
		console.log({ err });
		process.exit();
	});
