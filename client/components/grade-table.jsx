import React from 'react';

function Grade(props) {
  // if (!props.name) {
  //   return (
  //     <p>No grades recorded</p>
  //   );
  // }
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <table className="table table-striped table-dark col-8 mr-5">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grades => {
          return (
            <Grade
              key={grades.id}
              name={grades.name}
              course={grades.course}
              grade={grades.grade}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default GradeTable;
