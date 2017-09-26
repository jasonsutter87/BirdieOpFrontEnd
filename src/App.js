import React from 'react';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import ClosestCourse from './components/closestCourses';



class App extends React.Component{
  render(){
    return(
      <div>
        <SignIn />
        <SignUp />
        <ClosestCourse />
      </div>
    )
  }
}


export default App;
