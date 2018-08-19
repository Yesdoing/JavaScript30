import documentHelper from '../../src/documentHelper.js';

export default (...$tableElements) => {
  const TAG_NAME = 'table';
  const $table = documentHelper.createDocumentFragment(TAG_NAME);
  $tableElements.map($el => $table.appendChild($el));
  return $table
};