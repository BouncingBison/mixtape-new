import React, { Component } from "react";

import { SketchPicker } from "react-color";


class SongContainer extends Component {

    constructor(props) {
        super(props);

        this.updateColor = this.updateColor.bind(this);
        this.closeColorPicker = this.closeColorPicker.bind(this);
        this.toggleColorPicker = this.toggleColorPicker.bind(this);

        this.state = {
            displayColorPicker: false,
            color: "grey"
        };
    }

    closeColorPicker() {
        this.setState({ displayColorPicker: false })
    };

    toggleColorPicker() {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    updateColor(newColor) {
        console.log("New Color", newColor);
        this.setState({
           color: newColor.hex
        });
    }

    render() {

        const styles = {
            songContainer: {
                margin: "0 auto",
                width: "400px",
                height: "100px",
                background: this.state.color,
                border: "1px solid black"
            },
            colorButton: {
                width: "100px",
                padding: "5px",
                background: "white",
                borderRadius: "2px"
            }
        };


        return (
            <div>
                <h2>
                    Song Container
                </h2>
                <div
                    style={ styles.songContainer }
                    onClick = { this.handleClick }
                >
                    <button
                        style= { styles.colorButton }
                        type="button"
                        onClick={ this.toggleColorPicker }
                    >
                        { this.state.displayColorPicker ?
                            `Confirm`
                            :
                            `Pick a Color`
                        }
                    </button>
                    { this.state.displayColorPicker ?
                        <SketchPicker
                            onClick={this.toggleColorPicker}
                            color={ this.state.color }
                            onChange={ this.updateColor }
                            disableAlpha="true"
                        />
                        :
                        null
                    }

                </div>
            </div>
        )
    }
}

export default SongContainer;