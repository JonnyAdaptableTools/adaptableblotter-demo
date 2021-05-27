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
  MenuContext,
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
    adaptableId: 'Context Menu Demo',
    menuOptions: {
      showAdaptableContextMenu: (
        menuItem: AdaptableMenuItem,
        menuContext: MenuContext
      ) => {
        // Never display the 'ShowGridInfo' context menu option
        if (menuItem.module === 'GridInfo') {
          return false;
        }
        // Don't display the 'Filter' context menu option for in the Employee column
        if (
          menuContext.adaptableColumn.ColumnId === 'Employee' &&
          menuItem.module === 'Filter'
        ) {
          return false;
        }
        // Dont show any of the shipped Context Menu items for the Contact column
        if (menuContext.adaptableColumn.ColumnId === 'ContactName') {
          return false;
        }
        return true;
      },
      contextMenuItems: [
        {
          label: 'Floate Dashboard',
          onClick: (menuContext: MenuContext) => {
            adaptableApi.dashboardApi.floatDashboard();
          },
          shouldRender: (menuContext: MenuContext) => {
            return menuContext.adaptableColumn.Sortable;
          },
        },
        {
          label: 'Set System Status',
          subMenuItems: [
            {
              label: 'Set Error',
              onClick: (menuContext: MenuContext) => {
                adaptableApi.systemStatusApi.setErrorSystemStatus(
                  'System Down'
                );
              },
            },
            {
              label: 'Set Warning',
              onClick: (menuContext: MenuContext) => {
                adaptableApi.systemStatusApi.setWarningSystemStatus(
                  'System Slow'
                );
              },
            },
            {
              label: 'Set Success',
              onClick: (menuContext: MenuContext) => {
                adaptableApi.systemStatusApi.setSuccessSystemStatus(
                  'System Fine'
                );
              },
            },
            {
              label: 'Set Info',
              onClick: (menuContext: MenuContext) => {
                adaptableApi.systemStatusApi.setInfoSystemStatus(
                  'Demos working fine'
                );
              },
            },
          ],
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
