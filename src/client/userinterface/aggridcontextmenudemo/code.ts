import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
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
    // Add the context menu items here
    // Note: we only provide the names of the 'ShowPredicate' and 'Clicked' functions here;
    // The actual implemetnation is in 'userFunctions' section of Adaptable Options
    ContextMenuItems: [
      // A 'UserMenuItem' referencing the name of the Function to be called when it is clicked
      {
        Label: 'New Conditional Style',
        UserMenuItemClickedFunction: 'newConditionalStyle',
      },
      // This 'UserMenuItem' includes a Predicate Function to decide if the item should be shown
      {
        Label: 'Float Dashboard',
        UserMenuItemClickedFunction: 'floatDashboard',
        UserMenuItemShowPredicate: 'isColumnSortable',
      },
      // This 'UserMenuItem' includes a set of menu items which will show as a sub menu
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

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    autoGroupColumnDef: {
      sortable: true,
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Context Menu Demo',
    // This 'showAdaptableContextMenu' function is run to decide IF the context menu should be shown
    // The 'MenuInfo' object it receives provides the full cell / column context to assist this decision
    userInterfaceOptions: {
      showAdaptableContextMenu: (
        menuItem: AdaptableMenuItem,
        menuInfo: MenuInfo
      ) => {
        // Never display the 'ShowGridInfo' context menu option
        if (menuItem.FunctionName === 'GridInfo') {
          return false;
        }
        // Don't display the 'Columnn Chooser' context menu option for in the Employee column
        if (
          menuInfo.Column.ColumnId === 'Employee' &&
          menuItem.FunctionName === 'ColumnChooser'
        ) {
          return false;
        }
        // Dont show any of the shipped Context Menu items for the Contact column
        if (menuInfo.Column.ColumnId === 'ContactName') {
          return false;
        }
        return true;
      },
    },
    // These are the actual implementations for the the the 'ShowPredicate' and 'Clicked' functions
    // The names of the functions are provided in the ContextMenuItems property of User Interface section of Predefined config
    userFunctions: [
      {
        type: 'UserMenuItemClickedFunction',
        name: 'newConditionalStyle',
        handler() {
          adaptableApi.conditionalStyleApi.showConditionalStylePopup();
        },
      },
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
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
