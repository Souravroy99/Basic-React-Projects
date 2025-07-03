import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { connectDB } from './config/db.js'
import notesRouter from './routes/notesRoutes.js'
import rateLimiter from './middleware/rateLimiter.js'

const app = express()
app.use(rateLimiter)

app.use(express.json())


app.use("/api/notes", notesRouter)


const port = process.env?.PORT || 6001

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port no: ${port}`);
    })
})
.catch(() => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
})