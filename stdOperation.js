const Student = require("./models/stdModel.js");

const createStudent = async (id, name, age, grade) => {
    try {
        const student = new Student({ id, name, age, grade });
        await student.save();
        return student;
    } catch (error) {
        throw error;
    }
};

const getAllStudents = async () => {
    try {
        const students = await Student.find();
        return students;
    } catch (error) {
        throw error;
    }
};

const deleteStudent = async (studentId) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        return deletedStudent;
    } catch (error) {
        throw error;
    }
};

const updateStudent = async (studentId, newName, newGrade) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            { name: newName, grade: newGrade },
            { new: true }
        );
        return updatedStudent;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    deleteStudent,
    updateStudent,
};
