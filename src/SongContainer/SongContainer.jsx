import React, { Component } from "react";

import { PhotoshopPicker } from "react-color";


class SongContainer extends Component {

    constructor(props) {
        super(props);

        this.queueColor = this.queueColor.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.closeColorPicker = this.closeColorPicker.bind(this);
        this.openColorPicker = this.openColorPicker.bind(this);

        this.state = {
            displayColorPicker: false,
            backgroundColor: "grey",
            pickerColor: "grey"
        };
    }

    closeColorPicker() {
        this.setState({
            pickerColor: this.state.backgroundColor,
            displayColorPicker: false })
    };

    openColorPicker() {
        this.setState({ displayColorPicker: true })
    };

    queueColor(newColor) {
        this.setState({
            pickerColor: newColor.hex
        })
    }
    updateColor() {
        this.setState({
            displayColorPicker: false,
            backgroundColor: this.state.pickerColor
        });
    }

    render() {

        const styles = {
            songContainer: {
                margin: "0 auto",
                width: "400px",
                height: "100px",
                backgroundColor: this.state.backgroundColor,
                border: "1px solid black"
            },
            colorButton: {
                width: "110px",
                padding: "5px",
                backgroundColor: "white",
                border: "2px solid black",
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
                >
                    <button
                        style= { styles.colorButton }
                        type="button"
                        onClick={ this.openColorPicker }
                    >
                        Pick a Color
                    </button>
                    { this.state.displayColorPicker ?
                        <PhotoshopPicker
                            color={ this.state.pickerColor }
                            onChange={ this.queueColor }
                            onAccept={ this.updateColor }
                            onCancel={ this.closeColorPicker }
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