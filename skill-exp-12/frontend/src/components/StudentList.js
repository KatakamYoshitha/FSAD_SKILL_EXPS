import React, { useEffect, useState } from "react";
import API from "../api";
function StudentList() {
  const [students, setStudents] = useState([]);
  const fetchStudents = () => {
    API.get("/students")
      .then(res => setStudents(res.data)); };
  useEffect(() => {
    fetchStudents(); }, []);
  const deleteStudent = (id) => {
    API.delete(`/students/${id}`)
      .then(() => fetchStudents()); };
  return (
    <div>
      <h2>Student List</h2>
      <table border="1">
        <thead>
          <tr> <th>ID</th>  <th>Name</th>  <th>Email</th> <th>Course</th> <th>Actions</th> </tr>
        </thead> <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button> </td> </tr>
          ))}
        </tbody>
      </table>
    </div> ); }
export default StudentList;