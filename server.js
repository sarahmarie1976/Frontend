const express = require('express')
const cors = require('cors');
const app = express()
const port = 9000


const users = [
	{
		"id": 1,
		"name": "Micky Mouse",
		"username": "mm@gmail.com",
		"password": "123"
	},
	{
		"id": 2,
		"name": "Minnie Mouse",
		"username": "mm2@gmail.com",
		"password": "456"
	},
	{
		"id": 3,
		"name": "user3",
		"username": "user3@gmail.com",
		"password": "a password hash string"
	}
];

app.use(cors());
app.use(express.json());

app.get('/api/login', (req, res) => {
  res.send('We are Logged in!')
})

app.get('/api/users', (req, res) => {
  res.json(users);
})

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;

  const newUsers = users.filter((user) => user.id == id );

  res.json(newUsers);
})

app.get('/api/projects', (req, res) => {
  res.send('projects have uploaded successfully!')
})

app.post("/api/login", (req, res) => {
  res.json(req.body.password);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})