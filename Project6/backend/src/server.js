import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { connectDB } from './config/db.js'


const app = express()
app.use(express.json())

import notesRouter from './routes/notesRoutes.js'
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