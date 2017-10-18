import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
const $ = require("jquery");

class NewHole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_srokes: this.props.total_strokes,
      users_score: 0,
      course: '',
      course_id: '',
      holes: 0,
      hole_num: 0,
      par: 0,
      strokes: 0,
      holes: 0,
      date: '',
    }
    this.handleChangeRound = this.handleChangeRound.bind(this);
    this.handleChangeHole = this.handleChangeHole.bind(this);
    this.handleSubmitRound = this.handleSubmitRound.bind(this);
    this.handleSubmitHole = this.handleSubmitHole.bind(this);
  }

  handleChangeRound(event) {
    event.preventDefault();
    this.setState({course_id: event.target.value.split(',***,')[0]})
    this.setState({course: event.target.value.split(',***,')[1]})
    this.setState({holes: event.target.value.split(',***,')[2]})

  }

  handleChangeHole(event) {
    event.preventDefault();
    if(event.target.name === 'hole_num'){
      this.setState({hole_num: event.target.value})
    }else if(event.target.name === 'par'){
      this.setState({par: event.target.value})
    }else{
      this.setState({strokes: event.target.value})
    }
  }

  handleSubmitRound(event) {
    event.preventDefault();
    $('.modal-round').hide()
    $('.modal-hole').show()
  }

  handleSubmitHole(event) {
    event.preventDefault();
    if(this.state.hole_num !== 0 && this.state.par !== 0  && this.state.strokes !== 0){
      this.props.increaseStroke(this.props.total_srokes, parseInt(this.state.strokes))
      this.props.rounds[0].users_score += parseInt(this.state.strokes)
      this.props.addNewHole(this.state.course_id, this.state.course, this.state.hole_num, this.state.par , this.state.strokes)
    }

    if( (this.state.par - 1) == this.state.strokes) {
      this.props.increaseBirdies(this.props.birdies, parseInt(this.state.strokes))
    }


    $('#modalNewHoleClose').click()
    $('.modal-round').show()
    $('.modal-hole').hide()
     window.location.reload();
  }



  render(props) {
    return (
      <div>

        <div className='modal-round'>
          <form onSubmit={this.handleSubmitRound}>
            <div className="form-group">
              <select name="courses" className="form-control" onChange={this.handleChangeRound}>
              <option value={undefined}>Pick a course</option>
              {this.props.courses.map((item) => <option value={[item._id, "***", item.name, "***", item.hole_count]}>{item.name}</option>)}
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>

        <div className='modal-hole' style={ {display: 'none'} }>
          <form onSubmit={this.handleSubmitHole}>

            <div className="form-group">
              <label>Hole Number:</label><br />
              <input type='text' name="hole_num" className="form-control" onChange={this.handleChangeHole} />
            </div>

            <div className="form-group">
              <label>Par:</label><br />
              <input type='text' name="par" className="form-control" onChange={this.handleChangeHole} />
            </div>

            <div className="form-group">
              <label>Strokes:</label><br />
              <input type='text' name="strokes" className="form-control" onChange={this.handleChangeHole} />
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
    users_score: state.users_score,
    date: state.date,
  }
}

export default connect(
  mapStateToProps,
  Actions
)(NewHole);
