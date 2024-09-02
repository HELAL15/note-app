
const generator = require('../utils/generator');
const memStorage = require('../utils/memory.storage');
const model = require('../models/note.model');



// get all notes
exports.getAllNotes = (req, res) => {
    var values = memStorage.getValues(memStorage.store);
    return res.status(200).send( {
        status: "success",
        msg: "Notes retrieved successfully",
        notes: values
    });
    } 


    // get single note
exports.getNote = (req, res) => {
    const { id: noteId } = req.params;
    if (!noteId) {
        res.status(500).send({ status: "failed", msg: "the id of note is missed" });
    }
    var values = memStorage.store.getItem(noteId);
    return res.status(200).send( {
        status: "success",
        msg: "Note retrieved successfully",
        notes: values
    });

}

// create note
exports.createNote = (req, res) => {
    const seqId = generator.generate();
    const createdBy = "admin";
    const createdAt = new Date();
    const { title, content } = req.body; 

    if (!title || !content) {
        res.status(500).send({ status: "failed", msg: "Please enter title and content" });
    }

    var Note = model.Note;
    var noteObj = new Note(seqId , title , content , createdBy , createdAt );
    memStorage.store.setItem(seqId, noteObj); 

    res.status(201).send({ status: "success", msg: "Note created successfully", noteObj });
};



// update note
exports.updateNote = (req, res) => {
    const createdBy = "admin";
    const createdAt = new Date();
    const {title, content } = req.body; 
    const { id: noteId } = req.params;

    if (!noteId) {
        res.status(500).send({ status: "failed", msg: "the id of note is missed" });
    }

    if (!title || !content) {
        res.status(500).send({ status: "failed", msg: "Please enter title and content" });
    }

    var Note = model.Note;
    var noteObj = new Note(noteId , title , content , createdBy , createdAt );
    memStorage.store.setItem(noteId, noteObj); 

    res.status(201).send({ status: "success", msg: "Note updated successfully", noteObj });
}



// delete note
exports.deleteNote = (req, res) => {
    const { id: noteId } = req.params;
    if (!noteId) {
        res.status(500).send({ status: "failed", msg: "the id of note is missed" });
    }
    var values = memStorage.store.removeItem(noteId);
    return res.status(200).send( {
        status: "success",
        msg: "Note removed successfully",
        notes: values
    });
}
