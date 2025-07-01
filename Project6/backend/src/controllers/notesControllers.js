export const getAllNotes = (req, res) => {
    res.status(200).send("Notes are fetched!")
}

export const createNote = (req, res) => {
    res.status(201).json({message: "Notes created successfully"})
}

export const updateNote = (req, res) => {
    res.status(200).json({message: "Notes updated successfully"})
}

export const deleteNote = (req, res) => {
    res.status(200).json({message: "Notes deleted successfully"})
}
