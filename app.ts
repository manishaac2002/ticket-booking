import express, { Request, Response } from 'express'

// Create Express server
const app = express()

// Define a route handler
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Express..!')
})

app.get('/hello1', (req: Request, res: Response) => {
  res.send('hello user444...!')
})
app.get('/hello2', (req: Request, res: Response) => {
    res.send('hello user...!')
})


// Start the Express server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})