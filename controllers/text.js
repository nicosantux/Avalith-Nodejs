const { response } = require('express');
const fs = require('fs').promises;

const readText = async (req, res = response) => {
	try {
		const text = await fs.readFile('./text.txt', 'utf-8');

		res.send(text);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = { readText };
