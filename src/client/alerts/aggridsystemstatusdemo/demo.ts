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

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, null);

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'System Status Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  let blotterApi = AdaptableBlotter.init(adaptableOptions);

  blotterApi.eventApi.on('BlotterReady', () => {
    setTimeout(() => {
      blotterApi.gridApi.setGridData(JSON.parse(JSON.stringify(json)));
    }, 500);
  });

  blotterApi.eventApi.on(
    'ToolbarButtonClicked',
    toolbarButtonClickedEventArgs => {
      switch (toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Name) {
        case 'info':
          blotterApi.systemStatusApi.setInfoSystemStatus('No issues');
          break;
        case 'success':
          blotterApi.systemStatusApi.setSuccessSystemStatus('All working fine');
          break;
        case 'warning':
          blotterApi.systemStatusApi.setWarningSystemStatus(
            'Problems with server'
          );
          break;
        case 'error':
          blotterApi.systemStatusApi.setErrorSystemStatus(
            'The server is down!',
            'Please do not make any edits until the server comes back up'
          );
          break;
        case 'clear':
          blotterApi.systemStatusApi.clearSystemStatus();
          break;
      }
    }
  );

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
