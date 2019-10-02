import React from "react";

import Matrix from "./Matrix";

class Editor extends React.Component {
    matrix = Matrix({
        template: [". . .", ". . .", ". . ."]
    });

    render = () => {
        return <div>Editor</div>;
    };
}

export default Editor;
