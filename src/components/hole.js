import React from 'react';

function Hole(props) {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.course}</td>
      <td>{props.hole_num}</td>
      <td>{props.par}</td>
      <td>{props.strokes}</td>
    </tr>
  )
};

export default Hole;
