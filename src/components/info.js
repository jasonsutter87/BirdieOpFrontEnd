import React, { Component } from 'react';
import { connect } from 'react-redux';

class Info extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <div className="site-heading">
              <h3>Your Birdie Op! Info</h3>
              <p>Total Strokes: {this.props.total_srokes}</p>
              <p>Total Games: {this.props.rounds.length}</p>
              <p>Total Played Courses: {this.props.courses.length}</p>
              <p>Total Birdies: {this.props.birdies}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    total_srokes: state.total_srokes,
    courses: state.courses,
    rounds: state.rounds,
    birdies: state.birdies,
  }
}

export default connect(
  mapStateToProps
)(Info);
