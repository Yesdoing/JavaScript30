import documentHelper from '../../src/documentHelper.js';

export default ($tr) => {
  const TAG_NAME = 'thead';
  const $thead = documentHelper.createDocumentFragment(TAG_NAME);
  $thead.appendChild($tr);
  return $thead
}