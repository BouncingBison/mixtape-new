import React, { Component } from "react";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

const EMOTIONS = require("../constants/emotions");
let EMOTIONS_DROPDOWN = "";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class SongEmotion extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: null
        };
    }

    componentWillMount() {
        EMOTIONS_DROPDOWN = EMOTIONS.map((emotion, i) => {
            return (
                <MenuItem key={i} value={emotion} primaryText={emotion}/>
            )
        })
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        return (
                <div>
                    <SelectField
                        value={this.state.value}
                        maxHeight={300}
                        onChange={this.handleChange}
                        floatingLabelText="Choose an Emotion"
                        floatingLabelStyle={{color: 'black'}}
                    >
                        { EMOTIONS_DROPDOWN }
                    </SelectField>
                </div>
        )
    }

}

export default SongEmotion;
