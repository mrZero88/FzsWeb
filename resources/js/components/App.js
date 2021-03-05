import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
