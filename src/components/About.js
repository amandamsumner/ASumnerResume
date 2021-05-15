import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom">
              <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              mauris a diam maecenas sed enim. Sed turpis tincidunt id aliquet
              risus feugiat in ante metus. Sit amet nisl suscipit adipiscing
              bibendum est ultricies integer. Enim nec dui nunc mattis enim ut
              tellus. Scelerisque viverra mauris in aliquam sem fringilla ut
              morbi tincidunt. Ultricies tristique nulla aliquet enim tortor at
              auctor urna. Quam adipiscing vitae proin sagittis.
            </p>
          </div>
          <div className="card-action">
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
              <div className="col s12 m6 l6 x16">
                <p>
                  <strong>Address:</strong>5305 N Boulevard Unit 208 Tampa, FL
                  33603
                </p>
                <p>
                  <strong>Email:</strong>amandamsumner@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong>206-351-0887
                </p>
              </div>
              <div className="s12 m6 l6 x16">
                <p>
                  <strong>Main Language:</strong>English
                </p>
                <p>
                  <strong>Pronouns:</strong>She, Her, They
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
