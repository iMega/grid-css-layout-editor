import PropTypes from "prop-types";

const Matrix = props => {
    return {
        toCss: () => `". . ." ". . ." ". . ."`
    };
};

Matrix.propTypes = {
    template: PropTypes.Array
};

export default Matrix;
