const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('reviews', {
	author: {
		type: ObjectId,
		ref: 'users',
		required: [true, 'author is required']
	},
	date: {
		type: Date,
		default: Date.now
	},
	rating: {
		type: Number,
		default: 0
	},
	content: {
		type: String,
		required: [true, 'content is required']
	},
	house: {
		type: ObjectId,
		ref: 'houses',
		required: [true, 'house is required']
	}
});
