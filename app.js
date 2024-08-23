// Requiring express
const express = require('express');
// Requiring Path
const path = require('path');

// Creating my express app
const app = express();

// Setting up my static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Serving my landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirnamw, 'public', 'index.html'));
});

// PORT code here
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});