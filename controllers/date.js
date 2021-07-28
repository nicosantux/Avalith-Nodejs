const { response } = require('express');

const getDate = (req, res = response) => {
	const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const date = new Date();

	res.json({
		date: `${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`,
	});
};

module.exports = { getDate };
