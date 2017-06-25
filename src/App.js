import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongContainer from "./SongContainer/SongContainer";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <SongContainer />
            </MuiThemeProvider>
        );
    }
}

export default App;