import React from 'react';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import Hole from './components/hole';



class App extends React.Component{
  render(){
    return(
      <div>
        <SignIn />
        <SignUp />
        <Hole />
      </div>
    )
  }
}


export default App;
