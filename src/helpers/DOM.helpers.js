// Taken from Khan Academy's Aphrodite
// https://github.com/Khan/aphrodite/blob/master/src/inject.js
let styleTag;
export const injectStyleTag = (cssContents) => {
  if (styleTag == null) {
    // Try to find a style tag with the `data-aphrodite` attribute first.
    styleTag = document.querySelector('style[data-react-trend]');

    // If that doesn't work, generate a new style tag.
    if (styleTag == null) {
      // Taken from
      // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
      const head = document.head || document.getElementsByTagName('head')[0];
      styleTag = document.createElement('style');

      styleTag.type = 'text/css';
      styleTag.setAttribute('data-aphrodite', '');
      head.appendChild(styleTag);
    }
  }

  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText += cssContents;
  } else {
    styleTag.appendChild(document.createTextNode(cssContents));
  }
};
