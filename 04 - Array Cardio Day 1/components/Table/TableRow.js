import documentHelper from '../../src/documentHelper.js';

export default (...$tableCells) => {
  const TAG_NAME = 'tr';
  const $tableRow = documentHelper.createDocumentFragment(TAG_NAME);
  $tableCells.map($td => $tableRow.appendChild($td));
  return $tableRow
}