import documentHelper from '../../src/documentHelper.js';

export default ($tr) => {
  const TAG_NAME = 'thead';
  const $tfoot = documentHelper.createDocumentFragment(TAG_NAME);
  $tfoot.appendChild($tr);
  return $tfoot
}