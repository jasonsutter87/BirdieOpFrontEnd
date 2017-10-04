import React from 'react';

function NewHole(props) {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <label>
          Hole Numer:<br />
          <input onChange={props.onChange} id="hole_num" type="number"/>
          </label><br />
          <label>
          Par Count:<br />
          <input onChange={props.onChange} id="par" type="number"/>
          </label><br />
          <label>
          Stroke Count<br />
          <input onChange={props.onChange} id="stoke_count" type="number"/>
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default NewHole;
