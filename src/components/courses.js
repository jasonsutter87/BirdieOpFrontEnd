import React, { Component } from 'react';
import Course from './course';
import { connect } from 'react-redux';

class Courses extends Component {
  constructor(props){
    super(props)
  }
  render(props) {
    const { courses } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <p className="table-title">Past Search Results</p>
            <table style={{'width': '100%'}}>
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>Hole Count</th>
                  <th>Difficulty</th>
                  <th>Course Avg</th>
                  <th>Players Avg</th>
                </tr>
              </thead>
              <tbody>
                {
                courses.map((courses) =>
                  <Course
                    key={JSON.stringify(new Date().getTime())}
                    name={courses.name}
                    hole_count={courses.hole_count}
                    difficulty={courses.difficulty}
                    course_avg={courses.course_avg}
                    players_avg={courses.players_avg}
                  />
                )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    courses: state.courses,
  }
}

export default connect(
  mapStateToProps
)(Courses);
