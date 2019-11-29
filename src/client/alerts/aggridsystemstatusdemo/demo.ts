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
  let adaptableblotter = new AdaptableBlotter(blotterOptions);
  adaptableblotter.api.systemStatusApi.setErrorSystemStatus(
    'Server about to restart'
  );

  adaptableblotter.api.eventApi.on(
    'ApplicationToolbarButtonClicked',
    (
      applicationToolbarButtonClickedEventArgs: ApplicationToolbarButtonClickedEventArgs
    ) => {
      let buttonName =
        applicationToolbarButtonClickedEventArgs.data[0].id
          .applicationToolbarButton.Name;

      switch (buttonName) {
        case 'setInfo':
          adaptableblotter.api.systemStatusApi.setInfoSystemStatus(
            '30 new records added today'
          );
          break;
        case 'setWarning':
          adaptableblotter.api.systemStatusApi.setWarningSystemStatus(
            'Server is running slowly'
          );
          break;
        case 'setError':
          adaptableblotter.api.systemStatusApi.setErrorSystemStatus(
            'Server is down!'
          );
          break;
        case 'setSuccess':
          adaptableblotter.api.systemStatusApi.setSuccessSystemStatus(
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
