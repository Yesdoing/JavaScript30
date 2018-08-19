import documentHelper from '../../src/documentHelper.js';

export default (title) => {
  const TAG_NAME = 'caption';
  const $caption = documentHelper.createDocumentFragment(TAG_NAME);
  $caption.appendChild(document.createTextNode(title));
  return $caption
}