const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/course-categories.json');
const courses = require('./data/course.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Course API is Running')
})
app.get('/course-categories', (req, res) => {
    res.send(categories)
});
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourse = courses.filter(course => course.category_id === id);
    res.send(categoryCourse);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course._id === id);
    res.send(courseDetails);
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course._id === id);
    res.send(courseDetails);
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.listen(port, () => {

})