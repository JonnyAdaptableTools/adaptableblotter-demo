import * as Helper from '../../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Named Filters Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  blotterOptions.advancedOptions = {
    userFunctions: {
      namedFilterFunctions: [
        {
          name: 'High Order',
          func: record => {
            let invoiced: number = record.data.InvoicedCost;
            let itemCount: number = record.data.ItemCount;
            return invoiced > 1000 && itemCount > 10 ? true : false;
          },
        },
        {
          name: 'New Starter',
          func: (_record, _columnId, cellValue) => {
            // here we would look up in some internal
            return isNewEmployee(cellValue) ? true : false;
          },
        },
        {
          name: 'Post Takeover',
          func: (_record, _columnId, cellValue) => {
            let dateToTest = cellValue as Date;
            let takeOverDate = new Date('2017-03-21');
            return dateToTest > takeOverDate;
          },
        },
      ],
    },
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function isNewEmployee(employeeName: string): boolean {
    return employeeName == 'Robert King' ||
      employeeName == 'Laura Callahan' ||
      employeeName == 'Andrew Fuller'
      ? true
      : false;
  }
};
