import styled from "react-emotion";

const LightTheme = theme => {
    theme["grid"] = styled(theme.grid)`
        background: #edf1f5;
        border-top: 2px dashed #777;
        border-left: 2px dashed #777;
    `;

    theme["cell"] = styled(theme.cell)`
        border-bottom: 2px dashed #777;
        border-right: 2px dashed #777;
    `;

    return theme;
};

export default LightTheme;
