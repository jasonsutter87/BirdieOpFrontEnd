import React from 'react';

function Modal() {
  return(
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title center">New Round</h4>
          </div>
          <div className="modal-body">
            Course name,
            hole count
          </div>
          <div className="modal-footer">
            <button type="button" id='modalNewPostClose' className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Modal;
