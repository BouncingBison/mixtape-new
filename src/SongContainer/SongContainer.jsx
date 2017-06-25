import React, { Component } from "react";
import { PhotoshopPicker } from "react-color";
import SongEmotion from "./SongEmotion";
import SongColor from "./SongColor";
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class SongContainer extends Component {

    constructor(props) {
        super(props);

        this.updateColor = this.updateColor.bind(this);

        this.state = {
            backgroundColor: "grey",
            emotion: ""
        };
    }

    updateColor = (color) =>
        this.setState({
            backgroundColor: color
        });

    render() {

        const styles = {
            songContainer: {
                margin: "0 auto",
                padding: "10px",
                width: "600px",
                height: "200px",
                backgroundColor: this.state.backgroundColor,
                border: "1px solid black"
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
                    <SongEmotion/>
                    <br></br>
                    <SongColor
                        updateColor = { this.updateColor }
                        background = { this.state.backgroundColor }
                    />

                </div>
            </div>
        )
    }
}

export default SongContainer;