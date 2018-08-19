import * as TableComps from '../components/Table/index.js';
import OneLineBox from '../components/BlockBox.js';

const createTable = ($columnCells, $contentCells, caption, ) => {
  const $columnRow = TableComps.TableRow(...$columnCells);
  const $contentRows = $contentCells.map($cell => TableComps.TableRow(...$cell));
  const $caption = TableComps.Caption(caption);
  const $thead = TableComps.Thead($columnRow);
  const $tbody = TableComps.Tbody(...$contentRows);
  return TableComps.Table($caption, $thead, $tbody);
};

export const createArrayObjectTable = (dataObjectArray, tableCaption = 'Table') => {
  // data 는 Array[Object]의 1차원 배열만 가능
  // Object 값에 string, number 외의 값 불가

  const $columnCells = Object.keys(dataObjectArray[0]).map(columnName => TableComps.TableCell(columnName));
  const $contentCells = dataObjectArray.map(data => Object.values(data).map(v => TableComps.TableCell(v)));
  return createTable($columnCells, $contentCells, tableCaption)

};

export const createArrayTable = (dataArray, tableCaption = 'Table') => {
  // data 는 Array[String || Number]의 1차원 배열만 가능

  const placeHolder = ['(index)', 'values'];
  const $columnCells = placeHolder.map(columnName => TableComps.TableCell(columnName));
  const $contentCells = dataArray.map((data, index) => [index, data].map(v => TableComps.TableCell(v)));
  return createTable($columnCells, $contentCells, tableCaption)
};

export const createOneLineBox = (key, value, className = null) => {
  return OneLineBox(key, value, className)
};