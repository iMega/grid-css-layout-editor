import { injectGlobal } from "emotion";

function injectGlobalStyles(styles = "") {
    return injectGlobal`
    ${styles}
  `;
}

export default injectGlobalStyles;
