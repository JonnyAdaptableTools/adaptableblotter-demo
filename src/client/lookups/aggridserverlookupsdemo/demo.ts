import * as Helper from '../../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';
import { IServerColumnValues } from 'adaptableblotter/App_Scripts/BlotterOptions/QueryOptions';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getShortNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Server Lookups Demo',
    queryOptions: {
      getColumnValues: (columnName: string) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(getValuesForColumn(columnName)), 500);
        });
      },
    },
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

  function getValuesForColumn(columnName: string): IServerColumnValues {
    let vals;

    if (columnName === 'CustomerReference') {
      vals = [
        'MEREP',
        'TOMSP',
        'WARTH',
        'BLONP',
        'BERGS',
        'FOLKO',
        'PRINI',
        'LEHMS',
        'SPLIR',
        'BOTTM',
        'ERNSH',
        'HUNGO',
        'REGGC',
      ];
    } else if (columnName === 'ContactName') {
      vals = [
        'Jean Fresnière',
        'Karin Josephs',
        'Pirkko Koskitalo',
        'Frédérique Citeaux',
        'Elizabeth Brown',
        'Maria Larsson',
        'Art Braunschweiger',
        'Roland Mendel',
        'Elizabeth Lincoln',
        'Patricia McKenna',
        'Pedro Afonso',
        'Philip Cramer',
        'Maurizio Moroni',
      ];
    } else {
      return undefined; // not nice and we need to fix
    }
    return {
      DistinctCriteriaPairValue: 'DisplayValue',
      ColumnValues: vals,
    };
  }
};
