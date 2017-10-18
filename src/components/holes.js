import React, { Component } from 'react';
import Hole from './hole';
import '../styles/index.css';
import { connect } from 'react-redux';

class Holes extends Component {
  constructor(props){
    super(props)
  }
  render(props) {
    const { holes } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <h3 className="table-title">Played Holes</h3>
            <table style={{'width': '100%'}}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Course Name</th>
                  <th>Hole Number</th>
                  <th>Par</th>
                  <th>Stroke</th>
                </tr>
              </thead>
              <tbody className="scrollable">
                {
                holes.map((hole) =>
                  <Hole
                    key={JSON.stringify(new Date().getTime())}
                    date={this.props.store.getState().rounds[0].date}
                    course={hole.course}
                    hole_num={hole.hole_num}
                    par={hole.par}
                    strokes={hole.strokes}
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
    holes: state.holes,
  }
}

export default connect(
  mapStateToProps
)(Holes);
