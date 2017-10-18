import React, { Component } from 'react';
import Header from './header';
import Info from './info';
import Courses from './courses';
import Rounds from './rounds';
import Holes from './holes';
import Footer from './footer';


class Dashboard extends Component {
  render(props) {
    return (
      <div>
        <Header store={this.props.store}/>
        <Info />
        <Courses />
        <Rounds />
        <Holes  store={this.props.store}/>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
