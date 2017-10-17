import React, { Component } from 'react';
import Round from './round';
import { connect } from 'react-redux';

class Rounds extends Component {
  constructor(props){
    super(props)
  }
  render(props) {
    const { rounds } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto">
            <h3 className="table-title">Played Rounds</h3>
            <table style={{'width': '100%'}}>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Hole Count</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {
                rounds.map((round) =>
                  <Round
                    key={JSON.stringify(new Date().getTime())}
                    course={round.course}
                    holes={round.holes}
                    users_score={round.users_score}
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
    rounds: state.rounds,
  }
}

export default connect(
  mapStateToProps
)(Rounds);
