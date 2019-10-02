import styled from "react-emotion";

const BasicTheme = () => {
    return {
        grid: styled.div`
            display: grid;
            background: #edf1f5;
            border-top: 2px dashed #777;
            border-left: 2px dashed #777;
        `
    };
};

export default BasicTheme;
