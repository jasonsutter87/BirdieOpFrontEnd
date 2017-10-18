import React from 'react';

function Round(props) {
  return (
    <tr>
      <td>{props.course}</td>
      <td>{props.holes}</td>
      <td>{props.users_score}</td>
      <td>{props.date}</td>
    </tr>
  )
};

export default Round;
