import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import '@adaptabletools/adaptableblotter/themes/dark.css';
import './custometheme.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';

import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  ThemeChangedEventArgs,
  IAdaptableBlotter,
} from '@adaptabletools/adaptableblotter/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { RowStyle } from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/DesignTimeState/UserInterfaceState';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  var adaptableblotter: IAdaptableBlotter;
  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Custom Theme Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  adaptableblotter = new AdaptableBlotter(blotterOptions);

  adaptableblotter.api.eventApi.on(
    'ThemeChanged',
    (themeChangedEventArgs: ThemeChangedEventArgs) => {
      listenToThemeChanged(adaptableblotter, themeChangedEventArgs);
    }
  );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};

function listenToThemeChanged(
  adaptableblotter: IAdaptableBlotter,
  args: ThemeChangedEventArgs
) {
  if (args.themeName === 'wimbledon-theme') {
    let rowStyles: RowStyle[] = [];
    let evenStyle: RowStyle = {
      Style: {
        ForeColor: 'white',
        BackColor: '#462376',
        FontWeight: 'Bold',
      },
      RowType: 'Even',
    };
    let oddStyle: RowStyle = {
      Style: {
        ForeColor: 'white',
        BackColor: '#0e6537',
        FontStyle: 'Italic',
      },
      RowType: 'Odd',
    };
    rowStyles.push(evenStyle);
    rowStyles.push(oddStyle);
    adaptableblotter.api.userInterfaceApi.setRowStyles(rowStyles);
  } else {
    adaptableblotter.api.userInterfaceApi.clearRowStyles();
  }
}
