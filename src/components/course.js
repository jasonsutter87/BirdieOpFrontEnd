import React from 'react';

function Course(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.hole_count}</td>
      <td>{props.difficulty}</td>
      <td>{props.course_avg}</td>
      <td>{props.players_avg}</td>
    </tr>
  )
};

export default Course;
