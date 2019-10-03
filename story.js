import React from "react";
import { storiesOf, addParameters } from "@storybook/react";

import Editor from "./src/Main";

storiesOf("GridLayout Light", module).add("Empty config", () => <Editor />);

storiesOf("GridLayout Dark", module).add("Empty config", () => (
    <Editor theme={"dark"} />
));

addParameters({
    options: {
        isFullscreen: false,
        showNav: true,
        showPanel: false
    }
});
