import React from 'react';

/*
  Sign_up Component

  There should be a link 'Already a user? Sign in (here)'
  There should be a fields for:
    Full name:
    email:
    password to be hashed:
    password comformation:

    under the hood
      total_average: 0,
      total_courses: []
      total_stokes: 0
    	signed_on: false
    	site_admin: false

    Validation:
    makes sure password is 6 in length
      check if email exist in database
        =>yes: flash error email already taken
        =>no create user
      check if passwords match
        => no: flash error

    Bcrypt
      - Users password should come in like 'tacos' become hasd => 'hFDg89s48SsD79V3uds8vu'
*/
function SignUp(props) {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <label>
          Name:<br />
          <input onChange={props.onChange} id="name" type="text"/>
          </label><br />
          <label>
          Email:<br />
          <input onChange={props.onChange} id="email" type="email"/>
          </label><br />
          <label>
          Password: must be longer than 5 characters long<br />
          <input onChange={props.onChange} id="users_passord" type="password"/>
          </label><br />
          <label>
          Comfirm Password:<br />
          <input onChange={props.onChange} id="users_passordComfirm" type="password"/>
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default SignUp;
