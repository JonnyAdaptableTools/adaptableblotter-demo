import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { GridOptions, ColDef } from 'ag-grid-community';
import { SelectionChangedEventArgs } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/BlotterEvents';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getRowSelectionNorthwindColumnSchema();
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

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  blotterApi.eventApi
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
    console.log(selectedChangedArgs.data[0].id);
  }
};
