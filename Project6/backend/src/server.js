import express from 'express'
import notesRouter from './routes/notesRoutes.js'

const app = express()
app.use("/api/notes", notesRouter)


const port = 5001
app.listen(port, () => {
    console.log(`Server listening on port no: ${port}`);
})