import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calendar from "./components/Calendar";
import SongContainer from "./SongContainer/SongContainer";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <div className="row">
                        <Calendar />
                    </div>
                    <div className="row">
                        <SongContainer />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;