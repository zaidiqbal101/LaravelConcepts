import React from "react";

function Table() {
  const students = [
    { id: 1, name: "Zaid", age: 20, Class: "BTech" },
    { id: 2, name: "Punit", age: 22, Class: "BCA" }
  ];

  return (
    <div>
      <h1>Student Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
                
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.Class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
