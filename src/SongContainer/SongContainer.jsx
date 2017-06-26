import React, { Component } from "react";
import SongEmotion from "./components/SongEmotion";
import SongColor from "./components/SongColor";
import SongNotes from "./components/SongNotes";

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class SongContainer extends Component {

    constructor(props) {
        super(props);

        this.updateColor = this.updateColor.bind(this);

        this.state = {
            backgroundColor: "#FD5B78",
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
                backgroundColor: this.state.backgroundColor,
                border: "1px solid black",
                borderRadius: "5px",
                boxShadow: "2px 2px 5px"
            },
            songHeader: {
                margin: "0"
            }
        };

        return (
            <div
                className="container"
                style={ styles.songContainer }
            >
                <div className="row">
                    <div className="col-lg-6">
                        <h2 style={ styles.songHeader }>
                            Song Name
                        </h2>
                        <SongEmotion/>
                        <br />
                        <SongColor
                            updateColor = { this.updateColor }
                            backgroundColor = { this.state.backgroundColor }
                        />
                    </div>
                    <div className="col-lg-6">
                        <SongNotes />
                    </div>
                </div>
            </div>
        )
    }
}

export default SongContainer;