const express = require('express');

const app = express();

const PORT = 4000;

//public dir
app.use(express.static('public'));

//read and parse body
app.use(express.json());

//routes
app.use('/', require('./routes/date'));

app.use('/', require('./routes/text'));

app.use('/', require('./routes/greet'));

//listen
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
