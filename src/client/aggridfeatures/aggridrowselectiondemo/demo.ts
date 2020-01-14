import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';

import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import { SelectionChangedEventArgs } from '@adaptabletools/adaptable/App_Scripts/Api/Events/BlotterEvents';

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
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Row Selection Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi
    .onSelectionChanged()
    .Subscribe((sender, selectedChangedArgs) =>
      listenToSelectedChange(selectedChangedArgs)
    );

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };

  function listenToSelectedChange(
    selectedChangedArgs: SelectionChangedEventArgs
  ) {
    console.log('Selection Has Changed');
    console.log(selectedChangedArgs.data[0].id);
  }
};
