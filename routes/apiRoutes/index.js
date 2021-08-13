const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', (req, res) => {
    let results = db;
    console.log(results)
    res.json(results);
});

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).
//  npm i nanoid


router.post('/notes', (req, res) =>{
    // req.body to save incoming content
    console.log(req.body);
    // add note to jon file
    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;