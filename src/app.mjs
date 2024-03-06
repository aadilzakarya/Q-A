import './config.mjs'
import mongoose from 'mongoose'
import express from 'express'
import Question from './db.mjs'
import url from 'url'
import path from 'path'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json());


app.get('/questions/', async (req, res) => {
  try {
      // Assuming 'Question' is your Mongoose model and it has a reference to 'answers'
      const questions = await Question.find().populate('answers'); // Modify based on your schema

      // Send the result as a JSON response
      res.json(questions);
    
  } catch (error) {
      // Error handling
      res.status(500).json({ message: 'Error fetching questions', error: error.toString() });
  }
});




app.post('/questions/', async (req, res) => {
  try {
      const newQuestion = new Question({
          question: req.body.question,
          answers: [] // Assuming questions initially have no answers
      });

      const savedQuestion = await newQuestion.save();
      res.json(savedQuestion); // Send back the saved question object
  } catch (error) {
      res.status(500).json({ error: error.message }); // Send back error message
  }
});


app.post('/questions/:id/answers/', async (req, res) => {
  const update = { "$push": { answers: req.body.answer } }
  try {
    const result = await Question.findByIdAndUpdate(req.params.id, update, { "new": true })
    res.json({ success: 'Added an answer' })
  } catch(e) {
    res.status(500).json({ error: 'Failed to add answer' })
  }
})

app.get('/questions/', async (req, res) => {
  // TODO: finish implementation
})


const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`Server is listening on ${port}`)})
