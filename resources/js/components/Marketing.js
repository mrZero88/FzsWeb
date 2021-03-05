import React, { Component } from "react";

class Marketing extends Component {
    render() {
        return (
            <div className="container marketing">
                {/*
                <div className="row">
                    <div className="col-lg-4">
                        
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="img/me.jpg" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Daniel Correia</h2>
                        <p>
                            Founder, a Computer Engineer with a programming background.
                            "What I really always wanted in my life was 
                            to work wherever I want in the World. The
                            freedom of knowing new places and people."
                        </p>
                        <p>
                            <a
                                className="btn btn-secondary"
                                href="#"
                                role="button"
                            >
                                View details »
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        
                    </div>
                </div>

                <hr className="featurette-divider" />

                */}

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            {" "}
                            <span className="text-muted">
                                We.
                            </span>
                        </h2>
                        <p className="lead">
                            We are not an oridnary company with offices, suits and ties. We are a company which gives you the freedom of working dressed how you like,
                            wherever in the world you like to do it. We are prepared to be a fully virtual comapany with virtual meetings, different timezones, and with experts all over the world of any country.
                            Our Customers can also be from anywhere in the world, from a Private Person with some kind of tech project, to Companies helping them on their businesses.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            className="cover featurette-image img-fluid mx-auto rounded-corners"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            src="img/icon_marketing_fly.png"
                            data-holder-rendered="true"
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            {" "}
                            <span className="text-muted">
                                Freedom.
                            </span>
                        </h2>
                        <p className="lead">
                            Fly Zero Sky stands for a World where you are free as our plane in the pictures, a Zero, to fly wherever you like to in the sky. We want you to fly fast and with joy, courage and freedom.
                            We see a world where people can work wherever they want, from its home, office, or some paradise island, enjoying our beautifull world.
                            We believe, our people should be empowered from this freedom to do the most robust and demanding work they can do.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img
                            className="cover featurette-image img-fluid mx-auto rounded-corners"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            src="img/icon_marketing_zero.png"
                            data-holder-rendered="true"
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            {" "}
                            <span className="text-muted">
                                A Better World.
                            </span>
                        </h2>
                        <p className="lead">
                            We're up to stablich connections with many foundations around the World on the poorest countries to aid them with 10% of our profits on each business we do.
                            So, when choosing us, you are automatically helping to improve the world and to give perhaps a future for someone who has no opportunity right now.
                            This is our side goal, to improve the world as long as we improve and grow ourselves.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img
                            className="cover featurette-image img-fluid mx-auto rounded-corners"
                            data-src="holder.js/500x500/auto"
                            alt="500x500"
                            src="img/icon_marketing_sky.png"
                            data-holder-rendered="true"
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <h2 className="featurette-heading">
                    Contact Us.{" "}
                    <span className="text-muted">
                        About your Project on daniel.correia@flyzerosky.com
                    </span>
                </h2>
                {{/*
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Your Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" id="message" rows="5" aria-describedby="messageHelp" placeholder="Enter message" />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                        Or send an email directly to daniel.correia@flyzerosky.com
                    </div>
                </div> */
                }}

                <hr className="featurette-divider" />
            </div>
        );
    }
}

export default Marketing;
