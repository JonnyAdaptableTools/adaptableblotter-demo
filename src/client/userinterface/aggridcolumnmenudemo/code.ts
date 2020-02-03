import Adaptable from '@adaptabletools/adaptable/agGrid';

import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import { GridOptions, GridReadyEvent } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';

import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

import {
  AdaptableMenuItem,
  MenuInfo,
} from '@adaptabletools/adaptable/src/PredefinedConfig/Common/Menu';

var adaptableApi: AdaptableApi;

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
          adaptableApi.dashboardApi.minimise();
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

export default (columndefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    animateRows: true,
    enableRangeSelection: true,

    suppressAggFuncInHeader: true,
    sideBar: true,
    suppressMenuHide: true,

    columnTypes: {
      // not required but helpful for column data type identification
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
    columnDefs: columndefs,
    rowData,
    onGridReady: function(gridReady: GridReadyEvent) {
      gridReady.columnApi!.autoSizeAllColumns();
      setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

      gridReady.api!.addEventListener('newColumnsLoaded', function() {
        gridReady.columnApi!.autoSizeAllColumns();
      });
    },
    floatingFilter: true,
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
          menuInfo.Column.ColumnId === 'Employee' &&
          (menuItem.FunctionName === 'ColumnChooser' ||
            menuItem.FunctionName === 'PieChart')
        ) {
          return false;
        }
        if (menuInfo.Column.ColumnId === 'ContactName') {
          return false;
        }
        return true;
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };

  Adaptable.init(adaptableOptions);
};
