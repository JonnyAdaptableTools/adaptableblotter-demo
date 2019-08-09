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
import { GridOptions, ColDef } from 'ag-grid-community';
import { SelectionChangedEventArgs } from 'adaptableblotter/App_Scripts/Api/Events/BlotterEvents';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.geRowSelectionNorthwindColumnSchema();
  let autoGroupColumnDef: ColDef = {
    headerName: 'Employee',
    field: 'employee',
    width: 200,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.rowSelection = 'multiple';
  gridOptions.autoGroupColumnDef = autoGroupColumnDef;
  gridOptions.suppressRowClickSelection = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Row Selection Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  let adaptableblotter = new AdaptableBlotter(blotterOptions);

  adaptableblotter.api.eventApi
    .onSelectionChanged()
    .Subscribe((sender, selectedChangedArgs) =>
      listenToSelectedChange(selectedChangedArgs)
    );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function listenToSelectedChange(
    selectedChangedArgs: SelectionChangedEventArgs
  ) {
    console.log('Selection Has Changed');
    console.log(selectedChangedArgs);
  }
};
