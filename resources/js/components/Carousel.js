import React, { Component } from "react";

class Carousel extends Component {
    render() {
        return (
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="cover" src="img/fly_background.png" alt="First slide" />
                <div className="container">
                  <div className="carousel-caption text-left">
                    <h1>Fly the Zero Sky</h1>
                    <p>From Software to Hardware. IoT, Windows, Mac, Linux, Android or iOS.<br/>Name the Tech you want, and we make it Fly.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="cover" src="img/zero_background.png" alt="Second slide" />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Fly Anywhere</h1>
                    <p>Join us as software developer and work remotely anywhere you like in the world.
                    <br/>Be ready, couse' your digital nomad life is about to begin.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Apply Cv</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="cover" src="img/sky_background.png" alt="Third slide" />
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>Make a Better World</h1>
                    <p>Help the poorest countries in the world. Make the Difference.
                    <br/>By chosing us for business you are automatically contributing to improve the world.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
    }
}

export default Carousel;
