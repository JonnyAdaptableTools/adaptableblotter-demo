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
import { ApplicationToolbarButtonClickedEventArgs } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/BlotterEvents';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getFlashingCellColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'System Status Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  let blotterApi = AdaptableBlotter.init(blotterOptions);

  blotterApi.eventApi.on(
    'ApplicationToolbarButtonClicked',
    applicationToolbarButtonClickedEventArgs => {
      switch (
        applicationToolbarButtonClickedEventArgs.data[0].id
          .applicationToolbarButton.Name
      ) {
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
            'The server is down!'
          );
          break;
        case 'clear':
          blotterApi.systemStatusApi.clearSystemStatus();
          break;
      }
    }
  );

  blotterApi.eventApi.on(
    'ApplicationToolbarButtonClicked',
    (
      applicationToolbarButtonClickedEventArgs: ApplicationToolbarButtonClickedEventArgs
    ) => {
      let buttonName =
        applicationToolbarButtonClickedEventArgs.data[0].id
          .applicationToolbarButton.Name;

      switch (buttonName) {
        case 'setInfo':
          blotterApi.systemStatusApi.setInfoSystemStatus(
            '30 new records added today'
          );
          break;
        case 'setWarning':
          blotterApi.systemStatusApi.setWarningSystemStatus(
            'Server is running slowly'
          );
          break;
        case 'setError':
          blotterApi.systemStatusApi.setErrorSystemStatus('Server is down!');
          break;
        case 'setSuccess':
          blotterApi.systemStatusApi.setSuccessSystemStatus(
            'Everything is fine'
          );
          break;
      }
    }
  );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
