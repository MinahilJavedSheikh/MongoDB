const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const { createStudent, getAllStudents, deleteStudent, updateStudent } = require('./stdOperation');

mongoose.connect('mongodb://127.0.0.1:27017/StudentDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to Mongoose');


    let student = await createStudent(1, 'Jane Smith', 20, 'A');
    console.log(student);

    let allStudents = await getAllStudents();
    console.log(allStudents);

    console.log(await deleteStudent('65737a2eaec70d4eb2f9eb9b'));

    let updatedStudent = await updateStudent('65737a2eaec70d4eb2f9eb9b', "john", "A");
    console.log(updatedStudent);

  })
  .catch((err) => {
    console.log('Error detected');
    console.log(err);
  });

app.listen(3000);
