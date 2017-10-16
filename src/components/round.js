import React from 'react';

function Round(props) {
  return (
    <tr>
      <td>{props.course_id}</td>
      <td>{props.score}</td>
      <td>{props.par}</td>
    </tr>
  )
};

export default Round;
