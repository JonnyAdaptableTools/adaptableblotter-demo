import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  AdaptableMenuItem,
  MenuInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'SystemStatus'],
      },
    ],
  },
  SystemStatus: {
    ShowAlert: false,
  },
  UserInterface: {
    ColumnMenuItems: [
      {
        Label: 'Floate Dashboard',
        UserMenuItemClickedFunction: 'floatDashboard',
        UserMenuItemShowPredicate: 'isColumnSortable',
      },
      {
        Label: 'Set System Status',
        SubMenuItems: [
          {
            Label: 'Set Error',
            UserMenuItemClickedFunction: 'setError',
          },
          {
            Label: 'Set Warning',
            UserMenuItemClickedFunction: 'setWarning',
          },
          {
            Label: 'Set Success',
            UserMenuItemClickedFunction: 'setSuccess',
          },
          {
            Label: 'Set Info',
            UserMenuItemClickedFunction: 'setInfo',
          },
        ],
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Column Menu Demo',
    userInterfaceOptions: {
      showAdaptableColumnMenu: (
        menuItem: AdaptableMenuItem,
        menuInfo: MenuInfo
      ) => {
        if (
          menuInfo.Column.ColumnId === 'ContactName' &&
          (menuItem.FunctionName === 'CustomSort' ||
            menuItem.FunctionName === 'CellSummary')
        ) {
          return false;
        }
        if (menuInfo.Column.ColumnId === 'CustomerReference') {
          return false;
        }
        return true;
      },
    },
    userFunctions: [
      {
        type: 'UserMenuItemClickedFunction',
        name: 'floatDashboard',
        handler() {
          adaptableApi.dashboardApi.floatDashboard();
        },
      },
      {
        type: 'UserMenuItemClickedFunction',
        name: 'setError',
        handler() {
          adaptableApi.systemStatusApi.setErrorSystemStatus('System Down');
        },
      },
      {
        type: 'UserMenuItemClickedFunction',
        name: 'setWarning',
        handler() {
          adaptableApi.systemStatusApi.setWarningSystemStatus('System Slow');
        },
      },
      {
        type: 'UserMenuItemClickedFunction',
        name: 'setSuccess',
        handler() {
          adaptableApi.systemStatusApi.setSuccessSystemStatus('System Fine');
        },
      },
      {
        type: 'UserMenuItemClickedFunction',
        name: 'setInfo',
        handler() {
          adaptableApi.systemStatusApi.setInfoSystemStatus(
            'Demos working fine'
          );
        },
      },
      {
        type: 'UserMenuItemShowPredicate',
        name: 'isColumnSortable',
        handler(menuInfo) {
          return menuInfo.Column.Sortable;
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
