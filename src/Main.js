import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider, withTheme } from "./ThemeProvider";
import { themes } from "./themes";
import Editor from "./GridLayoutEditor";

const Component = withTheme(Editor);

const Main = props => (
    <ThemeProvider theme={props.theme} size={props.size} themes={themes}>
        <Component {...props} />
    </ThemeProvider>
);

Main.defaultProps = {
    theme: "light",
    size: "normal"
};

Main.propTypes = {
    theme: PropTypes.string,
    size: PropTypes.string
};

export default Main;
