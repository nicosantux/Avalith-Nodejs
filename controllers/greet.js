const { response } = require('express');

const greetUser = (req, res = response) => {
	const { name } = req.body;

	name
		? res.json({
				greet: `Hello ${name}`,
		  })
		: res.status(400).json({
				msg: 'Name is required',
		  });
};

module.exports = { greetUser };
