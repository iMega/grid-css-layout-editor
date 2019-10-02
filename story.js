import React from "react";
import { storiesOf, addParameters } from "@storybook/react";

import Editor from "./src/Main";

storiesOf("GridLayout", module).add("Empty config", () => <Editor />);

addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false
    }
});
