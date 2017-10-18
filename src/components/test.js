import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.increaseStroke(this.props.total_srokes, 5)
  }

  render() {
    return (
      <div>
        <div>
          count: {this.props.total_srokes}
        </div>
        <div>
          <input type='button' value='increase' onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}


function mapStateToProps (state){
  return {
    total_srokes: state.total_srokes,
  }
}

export default connect(
  mapStateToProps,
  Actions
)(Dashboard);
