import documentHelper from '../../src/documentHelper.js';

export default (...$tableRows) => {
  const TAG_NAME = 'tbody';
  const $tbody = documentHelper.createDocumentFragment(TAG_NAME);
  $tableRows.map($tr => $tbody.appendChild($tr));
  return $tbody
}