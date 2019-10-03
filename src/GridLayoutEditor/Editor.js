import React from "react";
import styled from "react-emotion";

import Matrix from "./Matrix";

const styleGrid = (props, template) => {
    return styled(props.grid)`
        grid-template-areas: ${template};
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    `;
};

const styleCell = (props, cell) => {
    const CellStyle = styled(props.cell)`
        grid-area: ${cell.name};
    `;
    return <CellStyle key={cell.name} {...props} />;
};

const MapIterator = (map, cb) => {
    const result = [];
    for (let [key, value] of map) {
        result.push(cb(value, key));
    }
    return result;
};

class Editor extends React.Component {
    matrix = Matrix({
        template: [". . .", ". . .", ". . ."]
    });

    render = () => {
        const g = this.matrix.toGrid();
        const Grid = styleGrid(this.props.theme, g.template);
        return (
            <Grid>
                {MapIterator(g.cells, i => styleCell(this.props.theme, i))}
            </Grid>
        );
    };
}

export default Editor;
