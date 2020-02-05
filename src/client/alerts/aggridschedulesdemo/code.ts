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
    VisibleToolbars: ['QuickSearch', 'Export'],
  },
  Reminder: {
    Reminders: [
      {
        Alert: {
          Header: 'Update Invoices',
          Msg: 'Check all invoices are accurate',
          AlertDefinition: {
            MessageType: 'Warning',
            AlertProperties: {
              ShowPopup: true,
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
        Name: 'Current Orders',
        ReportColumnScope: 'BespokeColumns',
        ReportRowScope: 'VisibleRows',
      },
    ],
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
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,

    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    adaptableId: 'Schedules Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
