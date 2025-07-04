import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from "cors"

import notesRouter from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'


const app = express()
const port = process.env?.PORT || 6001

// Middleware
app.use(cors({
    origin: ["http://localhost:5173"],
}))
app.use(express.json())
app.use(rateLimiter)


app.use("/api/notes", notesRouter)


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