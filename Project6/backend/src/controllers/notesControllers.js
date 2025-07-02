import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }) // Newest One
        res.status(200).json(notes)
    } 
    catch (error) {
        console.log(`GET_ALL_NOTES ERROR: ${error}`);    
        res.status(500).json({message: `Internal Server Error`})
    }
}

export const getNoteById = async(req, res) => {
    try {
        const {id} = req.params
        const note = await Note.findById(id) ;

        if(!note) return res.status(404).json({message: "Note not found"}) ;

        res.status(200).json(note) ;
    } 
    catch (error) {
        console.log(`GET_NOTE_BY_ID ERROR: ${error}`) ;    
        res.status(500).json({message: `Internal Server Error`}) ;
    }
}

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body
        console.log(title, content) ;

        const newNote = new Note({title, content}) ;
        const savedNote = await newNote.save() ;
        res.status(201).json(savedNote) ;
    } 
    catch (error) {
        console.log(`CREATE_NOTE ERROR: ${error}`) ;    
        res.status(500).json({message: `Internal Server Error`}) ;
    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const {title, content} = req.body

        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true})

        if(!updatedNote) return res.status(404).json({message: "Note not found!"}) ;

        return res.status(200).json({message: "Note updated successfully", updatedNote}) ;
    } 
    catch (error) {
        console.log(`UPDATE_NOTE ERROR: ${error}`) ;    
        res.status(500).json({message: `Internal Server Error`}) ;
    }
}

export const deleteNote = async (req, res) => {
    try {
        const {id} = req.params    
        const deletedNote = await Note.findByIdAndDelete(id, {new: true})

        if(!deletedNote) return res.status(404).json({message: "Note not found!"})
        res.status(200).json({message: "Note deleted successfully!", deletedNote}) ;
    } 
    catch (error) {
        console.log(`DELETE_NOTE ERROR: ${error}`) ;    
        res.status(500).json({message: `Internal Server Error`}) ;
    }
}
