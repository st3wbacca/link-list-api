const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

class Node {
	constructor(value) {
		this.value = value;
		this.link = null;
	};
};

const head = new Node();

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
	res.send('root get route');
});

// append
app.post('/append', (req, res) => {
	const { value } = req.body;

	if (!head.value) {
		head.value = value;
		return res.status(201).send('Head created.');
	} else {
		let checkNode = head;
		console.log(checkNode.value);
		while (checkNode.link) {
			checkNode =checkNode.link;
			console.log(checkNode.value);
		};
		checkNode.link = new Node(value);
		return res.status(201).send('Node created');
	}
	
	// if no other status then it failed
	return res.status(400).send('Error');
});

// prepend node

// append node

// insert node

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});
