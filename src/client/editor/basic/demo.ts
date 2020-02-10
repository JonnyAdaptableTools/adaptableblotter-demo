import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
const code = raw('./code.ts');

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelDates(rowData);

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  init(columndefs, rowData);

  return {
    predefinedConfig: {},
    adaptableOptions: {},
    code,
  };
};
