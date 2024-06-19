import express from 'express';
// Create Express server
const app = express();
// Define a route handler
app.get('/', (req, res) => {
    res.send('Hello, TypeScript + Express..!');
});
// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
