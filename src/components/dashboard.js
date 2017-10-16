import React, { Component } from 'react';
import Header from './header';
import Info from './info';
import Courses from './courses';
// import Rounds from './rounds';
import Footer from './footer';

//TODO: ADD to dashboard render components
// <Rounds />

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Courses />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
