
const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents, deleteStudent, updateStudent } = require('./stdOperation');

router.get("/", function (req, res) {
  res.send("Students");
});

router.get("/search", function (req, res) {
  res.send("Student Search");
});

router.get("/students", async function (req, res) {
  try {
    const allStudents = await getAllStudents();
    res.send(allStudents);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/students/:id", async function (req, res) {
  const studentId = req.params.id;
  try {
    const student = await getStudent(studentId);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.send(student);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/students/:id", async function (req, res) {
  const studentId = req.params.id;
  try {
    const updatedStudent = await updateStudent(studentId, req.body.name, req.body.grade);
    if (!updatedStudent) {
      return res.status(404).send("Student not found");
    }
    res.send(updatedStudent);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/students/:id", async function (req, res) {
  const studentId = req.params.id;
  try {
    const deletedStudent = await deleteStudent(studentId);
    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }
    res.send(deletedStudent);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/students", async function (req, res) {
  try {
    const newStudent = await createStudent(req.body.id, req.body.name, req.body.age, req.body.grade);
    res.send(newStudent);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
