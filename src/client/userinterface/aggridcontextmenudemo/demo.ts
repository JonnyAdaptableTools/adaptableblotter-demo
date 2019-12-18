import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  PredefinedConfig,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import {
  AdaptableBlotterMenuItem,
  ContextMenuInfo,
} from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/Common/Menu';

var blotterApi: BlotterApi;

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let rowData = JSON.parse(JSON.stringify(json));
  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();
  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Context Menu Demo',
    generalOptions: {
      showAdaptableBlotterContextMenu: (
        menuItem: AdaptableBlotterMenuItem,
        contextInfo: ContextMenuInfo
      ) => {
        if (
          contextInfo.column.ColumnId == 'Employee' &&
          menuItem.StrategyId === 'ColumnChooser'
        ) {
          return false;
        }
        return true;
      },
    },
    vendorGrid: gridOptions,
    predefinedConfig: demoConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  blotterApi = AdaptableBlotter.init(blotterOptions);

  return {
    demoConfig,
    blotterOptions: blotterOptionsClone,
  };
};

let demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'SystemStatus'],
  },
  SystemStatus: {
    ShowAlert: false,
  },
  UserInterface: {
    ContextMenuItems: [
      {
        Label: 'Mimise Dashboard',
        UserMenuItemClickedFunction: () => {
          blotterApi.dashboardApi.Minimise();
        },
      },
      {
        Label: 'Set System Status',
        SubMenuItems: [
          {
            Label: 'Set Error',
            UserMenuItemClickedFunction: () => {
              blotterApi.systemStatusApi.setErrorSystemStatus('System Down');
            },
          },
          {
            Label: 'Set Warning',
            UserMenuItemClickedFunction: () => {
              blotterApi.systemStatusApi.setWarningSystemStatus('System Slow');
            },
          },
          {
            Label: 'Set Success',
            UserMenuItemClickedFunction: () => {
              blotterApi.systemStatusApi.setSuccessSystemStatus('System Fine');
            },
          },
          {
            Label: 'Set Info',
            UserMenuItemClickedFunction: () => {
              blotterApi.systemStatusApi.setInfoSystemStatus(
                'Demos working fine'
              );
            },
          },
        ],
      },
    ],
  },
} as PredefinedConfig;
