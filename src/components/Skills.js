import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>PROFESSIONAL SKILLS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>HTML</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col s6">
                <p>CSS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col s6">
                <p>JavaScript</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col s6">
                <p>React</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col s6">
                <p>React Native</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col s6">
                <p>NodeJS; ExpressJS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
