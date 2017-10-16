import React, { Component } from 'react';
import Header from './header';
import Modal from './modal';
import Info from './info';
import Courses from './courses';
import Rounds from './rounds';
import Footer from './footer';

//TODO: ADD to dashboard render components
// <Rounds />

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Modal />
        <Info />
        <Courses />
        <Rounds />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
