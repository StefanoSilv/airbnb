const mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	name: {
		type: String,
		required: [true, 'name is required']
	},
	email: {
		type: String,
		required: [true, 'email is required']
	},
	avatar: {
		type: String,
		default:
			'https://res.cloudinary.com/dsko6ntfj/image/upload/v1579743039/users/user-null.jpg'
	},
	location: {
		type: String
	},
	password: {
		type: String,
		required: [true, 'password is required']
	}
});
