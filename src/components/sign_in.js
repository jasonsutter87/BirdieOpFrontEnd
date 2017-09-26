import React from 'react';
/*
  Sign_in Component

  I want there to be a link. "New user create an accont (here)"
  There should be 2 fields Email, and password.
  The fields should be wrapped in a form tag with an submit button.

   use flash messages
  Validation
    - use Validation to check if the users email was real

  Bcrypt
    - Users password should come in like 'tacos' become hasd => 'hFDg89s48SsD79V3uds8vu'
      - then compare users password to users file. if match put request to users with log in
*/

function SignIn(props) {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <label>
          Email:<br />
          <input onChange={props.onChange} id="email" type="email"/>
          </label><br />
          <label>
          Password:<br />
          <input onChange={props.onChange} id="users_passord" type="password"/>
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default SignIn;
