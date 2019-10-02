export default `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, form label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }

  body,
  html {
      height: auto;
  }

  body {
      line-height: 1;
      font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: normal;
      font-size: 16px;
      color: #555;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  input,
  form label,
  label,
  select,
  button,
  textarea {
      margin: 0;
      border: 0;
      padding: 0;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      background: none;
      line-height: 1;
      font-size: 16px;
      font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: currentColor;
  }

  input,
  textarea {
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
  }

  input:focus,
  textarea:focus {
      outline: 0;
  }

  button,
  input[type=reset],
  input[type=button],
  input[type=submit],
  input[type=checkbox],
  input[type=radio],
  select {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  input[type=checkbox],
  input[type=radio] {
      width: 13px;
      height: 13px;
  }

  input[type=search] {
      -webkit-appearance: textfield;
      -webkit-box-sizing: content-box;
  }

  ::-webkit-search-decoration {
      display: none;
  }

  button,
  input[type="reset"],
  input[type="button"],
  input[type="submit"] {
      overflow: visible;
      width: auto;
  }

  button::-moz-focus-inner,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner {
      padding: 0;
      border: 0;
  }

  ::-webkit-file-upload-button {
      padding: 0;
      border: 0;
      background: none;
  }

  textarea {
      vertical-align: top;
      overflow: auto;
  }

  select[multiple] {
      vertical-align: top;
  }

  svg {
      fill: currentColor;
  }

  a {
      color: #00A7E1;
  }

  a:hover,
  a:focus {
      text-decoration: none;
  }
`;
