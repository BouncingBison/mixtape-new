import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import { PhotoshopPicker } from "react-color";


class SongColor extends Component {

    constructor(props) {
        super(props);

        this.queueColor = this.queueColor.bind(this);
        this.updateColor = this.updateColor.bind(this);
        this.closeColorPicker = this.closeColorPicker.bind(this);
        this.openColorPicker = this.openColorPicker.bind(this);

        this.state = {
            displayColorPicker: false,
            pickerColor: this.props.backgroundColor
        };
    }

    closeColorPicker() {
        this.setState({
            pickerColor: this.props.backgroundColor,
            displayColorPicker: false
        })
    };

    openColorPicker() {
        this.setState({
            displayColorPicker: true
        })
    };

    queueColor(newColor) {
        this.setState({
            pickerColor: newColor.hex
        })
    }
    updateColor() {
        this.setState({
            displayColorPicker: false
        })
        this.props.updateColor(this.state.pickerColor)
    }

    render() {

        return (
            <div>
                <RaisedButton
                    label="Choose a Color"
                    onClick={ this.openColorPicker }
                />
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
        )
    }

}

export default SongColor;
