import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
const $ = require("jquery");

class NewRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_srokes: this.props.total_strokes,
      course: '',
      course_id: '',
      holes: 0,
      date: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({course_id: event.target.value.split(',***,')[0]})
    this.setState({course: event.target.value.split(',***,')[1]})
    this.setState({holes: event.target.value.split(',***,')[2]})

  }



  handleSubmit(event) {
    event.preventDefault();
    if(this.state.course !== '' && this.state.course !== 'Pick a course' ){
      this.props.addNewRound(this.state.course, this.state.holes, 0, new Date().toDateString().toString())
    }
    $('#modalNewRoundClose').click()
  }




  render(props) {
    return (
      <div>
        <div className='modal-round'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select name="courses" className="form-control" onChange={this.handleChange}>
              <option value={undefined}>Pick a course</option>
              {this.props.courses.map((item) => <option value={[item._id, "***", item.name, "***", item.hole_count]}>{item.name}</option>)}
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToProps (state){
  return {
    course: state.course,
    holes: state.holes,
    total_srokes: state.total_srokes,
    date: state.date,
  }
}

export default connect(
  mapStateToProps,
  Actions
)(NewRound);
