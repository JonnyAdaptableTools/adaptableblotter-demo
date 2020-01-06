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
  AdaptableMenuItem,
  MenuInfo,
} from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/Common/Menu';

var adaptableApi: BlotterApi;

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Column Menu Demo',
    generalOptions: {
      showAdaptableColumnMenu: (
        menuItem: AdaptableMenuItem,
        menuInfo: MenuInfo
      ) => {
        if (
          menuInfo.column.ColumnId === 'Employee' &&
          (menuItem.FunctionName === 'ColumnChooser' ||
            menuItem.FunctionName === 'PieChart')
        ) {
          return false;
        } else if (menuInfo.column.ColumnId === 'ContactName') {
          return false;
        }
        return true;
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: gridOptions,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  adaptableApi = AdaptableBlotter.init(adaptableOptions);

  return {
    demoConfig,
    adaptableOptions: adaptableOptionsClone,
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
    ColumnMenuItems: [
      {
        Label: 'Mimise Dashboard',
        UserMenuItemClickedFunction: () => {
          adaptableApi.dashboardApi.Minimise();
        },
      },
      {
        Label: 'Set System Status',
        SubMenuItems: [
          {
            Label: 'Set Error',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setErrorSystemStatus('System Down');
            },
          },
          {
            Label: 'Set Warning',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setWarningSystemStatus(
                'System Slow'
              );
            },
          },
          {
            Label: 'Set Success',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setSuccessSystemStatus(
                'System Fine'
              );
            },
          },
          {
            Label: 'Set Info',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setInfoSystemStatus(
                'Demos working fine'
              );
            },
          },
        ],
      },
    ],
  },
} as PredefinedConfig;
