import * as Helper from '../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  ISearchChangedEventArgs,
} from 'adaptableblotter/types';

import json from '../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Data Source Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  let adaptableblotter = new AdaptableBlotter(blotterOptions);

  adaptableblotter.api.eventApi
    .onSearchedChanged()
    .Subscribe((sender, searchChangedArgs) =>
      listenToSearchChangedEvent(searchChangedArgs)
    );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function listenToSearchChangedEvent(
    searchChangedEventArgs: ISearchChangedEventArgs
  ) {
    console.log('search changed event received');
    console.log(searchChangedEventArgs);
  }
};
