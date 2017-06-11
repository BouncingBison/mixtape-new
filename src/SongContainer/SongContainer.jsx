import React, { Component } from "react";

import SongColor from "./SongColor";

import './SongContainer.css';

class SongContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "forestgreen",
        };
    }



    render() {

        const divStyle = {
            backgroundColor: this.state.color
        };

        return (
            <div>
                <h2>
                    Song Container
                </h2>
                <div
                    id="SongContainer"
                    style={divStyle}
                >
                    <SongColor />
                </div>
            </div>
        )
    }
}

export default SongContainer;