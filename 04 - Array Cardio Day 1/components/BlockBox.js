import documentHelper from '../src/documentHelper.js';

export default (key, value, className = null) => {
  const TAG_NAME = 'div';
  const $oneLineBox = documentHelper.createDocumentFragment(TAG_NAME, (className && { class: className }));
  $oneLineBox.appendChild(document.createTextNode(`${key}: ${value}`));
  return $oneLineBox
}