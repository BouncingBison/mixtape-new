import React, { Component } from "react";
import TextField from 'material-ui/TextField';

class SongNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: null
        };
    }

    render() {

        return (
            <div>
                <TextField
                    floatingLabelText="JOURNAL ENTRY"
                    hintText="What are you thinking right now?"
                    multiLine={true}
                    rowsMax={4}
                />
            </div>
        )
    }

}

export default SongNotes;
