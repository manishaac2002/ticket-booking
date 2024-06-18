"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create Express server
const app = (0, express_1.default)();
// Define a route handler
app.get('/', (req, res) => {
    res.send('Hello, TypeScript + Express..!');
});
app.get('/hello1', (req, res) => {
    res.send('hello user444...!');
});
app.get('/hello2', (req, res) => {
    res.send('hello user...!');
});
// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
