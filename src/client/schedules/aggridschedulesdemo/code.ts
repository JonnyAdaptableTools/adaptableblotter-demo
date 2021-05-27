import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['Reminder', 'Schedule'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'Export'],
      },
    ],
  },
  Schedule: {
    ReportSchedules: [
      {
        ScheduleType: 'Report',
        ReportName: 'Current Orders',
        ExportDestination: 'CSV',
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 12,
          Minute: 30,
        },
      },
    ],
    Reminders: [
      {
        Alert: {
          header: 'Update Invoices',
          message: 'Check all invoices are accurate',
          alertDefinition: {
            MessageType: 'Warning',
            AlertProperties: {
              DisplayNotification: true,
            },
          },
        },
        ScheduleType: 'Reminder',
        Schedule: {
          DaysOfWeek: [5],
          Hour: 17,
          Minute: 0,
        },
      },
    ],
  },
  Export: {
    CurrentReport: 'Current Orders',
    Reports: [
      {
        Scope: {
          ColumnIds: [
            'OrderId',
            'ChangeLastOrder',
            'ContactName',
            'InvoicedCost',
            'ItemCost',
            'ItemCount',
            'OrderCost',
            'OrderDate',
          ],
        },
        Name: 'Current Orders',
        ReportColumnScope: 'ScopeColumns',
        ReportRowScope: 'VisibleRows',
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
    adaptableId: 'Schedules Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
