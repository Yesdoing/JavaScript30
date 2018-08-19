import documentHelper from '../../src/documentHelper.js';

export default data => {
  const TAG_NAME = 'td';
  const $tableCell = documentHelper.createDocumentFragment(TAG_NAME);
  $tableCell.appendChild(document.createTextNode(data));
  return $tableCell;
}