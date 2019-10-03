import PropTypes from "prop-types";

import NameGenerator from "./NameGenerator";

const TOP = "top";
const RIGHT = "right";
const DOWN = "down";
const LEFT = "left";

const reversRules = {
    top: DOWN,
    right: LEFT,
    down: TOP,
    left: RIGHT
};

/**
 * @returns {Object}
 */
const Cell = {
    name: name,
    area: undefined,
    left: undefined,
    right: undefined,
    top: undefined,
    down: undefined
};

/**
 * @returns {Object}
 */
const createCell = name => {
    const cell = Object.assign({}, Cell);
    cell.name = name;
    Object.defineProperty(cell, "name", {
        configurable: false,
        writable: false
    });
    return cell;
};

/**
 * @param {TOP | RIGHT | DOWN | LEFT} edge
 * @returns {TOP | RIGHT | DOWN | LEFT}
 */
const reversEdge = edge => reversRules[edge];

/**
 * @param {TOP | RIGHT | DOWN | LEFT} type
 * @param {Map} cells
 */
const createSegmentCells = (type, cells) =>
    cells.reduce((prev, cur) => {
        createEdge(prev, type, cur);
        return cur;
    });

/**
 *
 * @param {Map} cells
 * @param {TOP | RIGHT | DOWN | LEFT} type
 * @param {Cell[]} firstCellsInSegments
 */
const stichingSegments = (cells, type, firstCellsInSegments) => {
    firstCellsInSegments.reduce((prev, cur) => {
        if (prev === undefined || cur === undefined) {
            return;
        }
        createEdge(prev, type, cur);
        stichingSegments(cells, type, [
            getCellByEdge(cells, prev, RIGHT),
            getCellByEdge(cells, cur, RIGHT)
        ]);
        return cur;
    });
};

/**
 * @param {Cell} fromCell
 * @param {TOP | RIGHT | DOWN | LEFT} byEdge
 * @param {Cell} toCell
 */
const createEdge = (fromCell, byEdge, toCell) => {
    fromCell[byEdge] = toCell.name;
    toCell[reversEdge(byEdge)] = fromCell.name;
};

/**
 * @param {number} qty
 * @returns {Map}
 */
const generateNames = qty => {
    const l = new Map();
    const q = qty + 100;

    for (let n = 0; n < q; n++) {
        l.set(NameGenerator());
        if (l.size === qty) {
            return l;
        }
    }
};

/**
 * @param {object} conf
 * @param {Map} cells
 * @param {Map} areas
 */
const fromConfig = (conf, cells, areas) => {
    if (!Array.isArray(conf)) {
        return;
    }

    const confRows = conf.length;
    const confCols = conf[0].split(/\s+/).length;

    const names = generateNames(confRows * confCols);

    const newCellsNames = [];
    names.forEach((_, name) => {
        cells.set(name, createCell(name));
        newCellsNames.push(name);
    });

    const firstCell = newCellsNames[0];

    const segments = [];
    for (let r = 0; r < confRows; r++) {
        const newSegment = newCellsNames.splice(0, confCols);
        segments.push(cells.get(newSegment[0]));
        createSegmentCells(RIGHT, newSegment.map(name => cells.get(name)));
    }

    stichingSegments(cells, DOWN, segments);

    return cells.get(firstCell);
};

/**
 *
 * @param {Map} cells
 * @param {Cell} cell
 * @param {TOP | RIGHT | DOWN | LEFT} edge
 * @returns {Cell}
 */
const getCellByEdge = (cells, cell, edge) => cells.get(cell[edge]);

/**
 *
 * @param {Map} cells
 * @param {Map} areas
 * @param {Cell} cell
 * @param {walkCellsToCss | walkCellsToGrid} cb
 * @returns {Array}
 */
const walkCells = (cells, areas, cell, cb) => {
    if (cell === undefined) {
        return undefined;
    }
    const next = getCellByEdge(cells, cell, RIGHT);
    const res = walkCells(cells, areas, next, cb);
    return res === undefined ? [cb(cell)] : [cb(cell), ...res];
};

/**
 * @param {Cell} cell
 * @returns {string}
 */
const walkCellsToCss = cell => (cell.area ? cell.area : ".");

/**
 * @param {Cell} cell
 * @returns {string}
 */
const walkCellsToGrid = cell => (cell.area ? cell.area : cell.name);

/**
 * @param {Map} cells
 * @param {Map} areas
 * @param {Cell} cell
 * @param {walkCellsToCss | walkCellsToGrid} cb
 * @returns {Array}
 */
const walkRowsCells = (cells, areas, cell, cb) => {
    if (cell === undefined) {
        return undefined;
    }
    const next = getCellByEdge(cells, cell, DOWN);
    const res = walkRowsCells(cells, areas, next, cb);

    return res === undefined
        ? [walkCells(cells, areas, cell, cb)]
        : [walkCells(cells, areas, cell, cb), ...res];
};

/**
 * @param {Map} cells
 * @param {Map} areas
 * @param {Cell} firstCell
 * @returns {string}
 */
const toCss = (cells, areas, firstCell) => {
    const rows = walkRowsCells(cells, areas, firstCell, walkCellsToCss);
    const s = rows.map(i => i.join(" "));
    return JSON.stringify(s)
        .replace(/,/g, " ")
        .slice(1, -1);
};

/**
 * @param {Map} cells
 * @param {Map} areas
 * @param {Cell} firstCell
 * @returns {string}
 */
const toGrid = (cells, areas, firstCell) => {
    const rows = walkRowsCells(cells, areas, firstCell, walkCellsToGrid);
    const s = rows.map(i => i.join(" "));
    return JSON.stringify(s)
        .replace(/,/g, " ")
        .slice(1, -1);
};

/**
 * @param {Map} cells
 * @param {Cell} cell
 * @param {Map} areas
 * @returns {boolean}
 */
const createArea = (cells, cell, areas) => {
    console.log("======================================");
    const name = NameGenerator();
    if (areas.has(name)) {
        return false;
    }
    cell.area = name;

    const allowEdge = [LEFT, RIGHT, TOP, DOWN].map(e =>
        hasArea(getCellByEdge(cells, cell, e))
    );

    areas.set(name, {
        name: name,
        left: [cell.left],
        right: [cell.right],
        top: [cell.top],
        down: [cell.down],
        canIncreasedLeft: allowEdge[0],
        canIncreasedRight: allowEdge[1],
        canIncreasedTop: allowEdge[2],
        canIncreasedDown: allowEdge[3],
        canLessenLeft: false,
        canLessenRight: false,
        canLessenTop: false,
        canLessenDown: false
    });
    return true;
};

const hasArea = cell => cell.area !== undefined;

const Matrix = props => {
    const cells = new Map();
    const areas = new Map();

    const firstCell = fromConfig(props.template, cells, areas);

    return {
        toCss: () => toCss(cells, areas, firstCell),
        toGrid: () => ({
            template: toGrid(cells, areas, firstCell),
            areas: areas,
            cells: cells
        }),
        createArea: cell => createArea(cells, cell, areas),
        deleteArea: areaID => {},
        changeArea: (areaID, edge, direction) => {}
    };
};

Matrix.propTypes = {
    template: PropTypes.Array
};

export default Matrix;
