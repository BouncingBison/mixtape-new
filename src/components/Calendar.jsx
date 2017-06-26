import React, { Component } from "react";
import DatePicker from 'material-ui/DatePicker';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disabledDates: null
        };
    }

    render() {

        const styles = {
            calendar: {
                margin: "0 auto",
                width: "600px",
            }
        };

        return (
            <div
                className="container"
                style={ styles.calendar }
            >
                <div className="row">
                    <div className="col-lg-6">
                        <DatePicker
                            hintText="Add a New Song"
                            mode="landscape"
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default Calendar;
