const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data1.json');

app.get('/users', (req, res) => {
    res.send('Welcome to backend server');
});

app.get('/api/users', async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        const users = JSON.parse(data);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        const users = JSON.parse(data);

        const newUser = req.body;
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        newUser.id = newId;
        users.push(newUser);

        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2));
        res.status(200).json({ message: 'Data Received', data: newUser });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});