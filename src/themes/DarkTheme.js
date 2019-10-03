import styled from "react-emotion";

const DarkTheme = theme => {
    theme["grid"] = styled(theme.grid)`
        background: #323232;
        border-top: 2px dashed #5c5b5c;
        border-left: 2px dashed #5c5b5c;
    `;

    theme["cell"] = styled(theme.cell)`
        border-bottom: 2px dashed #5c5b5c;
        border-right: 2px dashed #5c5b5c;
    `;

    return theme;
};

export default DarkTheme;
