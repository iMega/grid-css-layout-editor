import styled from "react-emotion";

const BasicTheme = () => {
    return {
        grid: styled.div`
            display: grid;
            background: #edf1f5;
            border-top: 2px dashed #777;
            border-left: 2px dashed #777;
        `,
        cell: styled.div`
            min-width: 120px;
            min-height: 120px;
            justify-content: center;
            align-items: center;
            position: relative;
            display: flex;
            border-bottom: 2px dashed #777;
            border-right: 2px dashed #777;
        `
    };
};

export default BasicTheme;
