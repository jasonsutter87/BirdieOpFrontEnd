import React from 'react';

function Header() {
  return(
    <header className="masthead bg-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Birdie Op!</h1>
              <span className="subheading">A page to keep track of your birdies!</span><br />
              <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">New Round?</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
