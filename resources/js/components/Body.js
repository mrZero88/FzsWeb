import React, { Component } from "react";
import Carousel from "./Carousel";
import Marketing from "./Marketing"

class Body extends Component {
    render() {
        return (
            <main role="main">
                <Carousel />
                <Marketing />
            </main>
        );
    }
}

export default Body;
