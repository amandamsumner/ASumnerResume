import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>EXPERIENCES</strong>
            </h6>
            <div className="row">
              <div className="col s12 m4 l4 x14">
                <p className="teal year_exp white-text">
                  Nov
                  <strong> 2020</strong> - April
                  <strong> 2021</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 x18">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>FLEET COORDINATOR</strong>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tellus mauris a diam maecenas sed enim. Sed turpis
                    tincidunt id aliquet risus feugiat in ante metus.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
