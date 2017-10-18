import React, { Component } from 'react';

import NewRound from './newround';
import NewHole from './newHole';

class ModalRound extends Component {
  constructor(props){
    super(props)
  }
  render(props) {
  const { courses } = this.props.store.store.getState();
  return(
    <div id="myModalRound" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title center">New Round</h4>
          </div>
          <div className="modal-body">
            <NewRound courses={courses}/>
          </div>
          <div className="modal-footer">
            <button type="button" id='modalNewRoundClose' className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

class ModalHole extends Component {
  constructor(props){
    super(props)
  }
  render(props) {
  const { courses } = this.props.store.store.getState();
  return(
    <div id="myModalHole" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title center">New Hole</h4>
          </div>
          <div className="modal-body">
            <NewHole courses={courses}/>
          </div>
          <div className="modal-footer">
            <button type="button" id='modalNewHoleClose' className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}


function Header(props) {
  return(
  <div>
    <div>
      <header className="masthead bg-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Birdie Op!</h1>
                <span className="subheading">A page to keep track of your birdies!</span><br />
                <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModalRound">New Round?</button>
                <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModalHole">New Hole?</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div>
      <ModalRound store={props}/>
      <ModalHole store={props}/>
    </div>
  </div>
  )
}

export default Header;
