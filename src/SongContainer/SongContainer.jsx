import React, { Component } from "react";

import { SketchPicker } from "react-color";


class SongContainer extends Component {

    constructor(props) {
        super(props);

        this.updateColor = this.updateColor.bind(this);

        this.state = {
            color: "white",
        };
    }

    updateColor(newColor) {
        console.log("New Color", newColor);
        this.setState({
           color: newColor.hex
        });
    }

    render() {

        const divStyle = {
            margin: "0 auto",
            width: "400px",
            height: "100px",
            backgroundColor: this.state.color,
            border: "1px solid black"
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
                    <SketchPicker
                        color={ this.state.color }
                        onChange={ this.updateColor }
                    />

                </div>
            </div>
        )
    }
}

export default SongContainer;