const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/data', (req, res) => res.json({ message: 'Here is your data!' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});