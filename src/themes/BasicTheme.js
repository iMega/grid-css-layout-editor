import styled from "react-emotion";

const IconOuter = styled.span`
    position: relative;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
`;

const IconPosition = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${props => props.color};
    transform: translate(-50%, -50%);
`;

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
        buttonGeneric: styled.button``
    };

    theme["button"] = {
        default: styled(theme.buttonGeneric)``
    };

    theme["buttonIcon"] = {
        default: styled(theme.button.default)``
    };

    return theme;
};

export default BasicTheme;
