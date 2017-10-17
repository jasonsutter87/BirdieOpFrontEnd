import React from 'react';

function Round(props) {
  console.log(props)
  return (
    <tr>
      <td>{props.course}</td>
      <td>{props.holes}</td>
      <td>{props.users_score}</td>
    </tr>
  )
};

export default Round;
