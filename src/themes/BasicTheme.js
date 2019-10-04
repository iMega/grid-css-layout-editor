import React from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";

import { Add } from "./icons";

const IconOuter = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconPosition = styled.div`
    position: absolute;
    width: ${props => props.width}em;
    line-height: 0;
    color: ${props => props.color};
    transition: transform 0.5s;
    &:hover {
        transform: rotate(720deg);
    }
`;
IconPosition.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number
};

const addArea = (theme, props) => (
    <theme.buttonGeneric {...props}>
        <IconOuter>
            <IconPosition color={props.color} width={2}>
                <theme.icons.add />
            </IconPosition>
        </IconOuter>
    </theme.buttonGeneric>
);
addArea.propTypes = {
    color: PropTypes.any
};

const BasicTheme = () => {
    const theme = {
        grid: styled.div`
            display: grid;
        `,
        cell: styled.div`
            min-width: 120px;
            min-height: 120px;
            justify-content: center;
            align-items: center;
            position: relative;
            display: flex;
        `,
        buttonGeneric: styled.button`
            cursor: pointer;
            width: 2.3em;
            height: 2.3em;
            background: #03a9f4;
            color: #fff;
            border-radius: 50%;
            box-shadow: inset 0 0 0 2px #03a9f4;
            transition: all ease-out 0.1s;
            outline: none;
            box-sizing: border-box;

            &:hover,
            &:focus {
                background: #3ac2ff;
                box-shadow: inset 0 0 0 2px #3ac2ff;
            }
        `,
        icons: {
            add: () => <Add />
        }
    };

    theme["button"] = {
        default: styled(theme.buttonGeneric)``,
        areaAdd: props => addArea(theme, props)
    };

    theme["buttonIcon"] = {
        default: styled(theme.button.default)``
    };

    return theme;
};

export default BasicTheme;
