import * as Helper from '../../../Helper';
import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/index.css';

import 'adaptableblotter/themes/dark.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import json from '../../../../DataSets/Json/PriceBlotterBond.json';
import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';
import { BondHelperAgGrid } from './BondHelperAgGrid';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  let bondHelperAgGrid = new BondHelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = bondHelperAgGrid.getBondPricerSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'Isin',
    userName: 'Demo User',
    blotterId: 'Bond Pricer Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
