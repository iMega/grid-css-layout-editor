import React from "react";
import PropTypes from "prop-types";
import Subscriber from "../Subscriber";

const ThemeContext = React.createContext("theme");

const ThemeEvent = props => ({
    theme: props.theme,
    size: props.size
});

ThemeEvent.propTypes = {
    theme: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};

const ThemeEventID = "21cafaed-3d2e-4384-b37d-7a1dbb47391c";

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme,
            size: this.props.size
        };
    }

    subscribeTheme = ({ body }) => {
        if (this.state.theme != body.theme || this.state.size != body.size) {
            this.setState(body);
        }
    };

    buildTheme = ({ theme, size }) => ({
        ...this.props.themes[theme](
            this.props.themes[size](this.props.themes.basic())
        ),
        name: theme,
        size: size
    });

    render = () => (
        <React.Fragment>
            <Subscriber eventID={ThemeEventID} callback={this.subscribeTheme} />
            <ThemeContext.Provider
                {...this.props}
                value={{
                    theme: this.buildTheme(this.state)
                }}
            />
        </React.Fragment>
    );
}

ThemeProvider.propTypes = {
    theme: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    themes: PropTypes.shape({
        basic: PropTypes.func.isRequired,
        normal: PropTypes.func.isRequired
    })
};

const withTheme = Component => props => (
    <ThemeContext.Consumer>
        {state => <Component {...{ ...props, ...state }} />}
    </ThemeContext.Consumer>
);

export { ThemeProvider, ThemeEvent, ThemeEventID, withTheme };
