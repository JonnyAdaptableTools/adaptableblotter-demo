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
  ReportData,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Export'],
      },
    ],
  },
  Export: {
    CurrentReport: 'People Report',
    Reports: [
      {
        ReportColumnScope: 'CustomColumns',
        ReportRowScope: 'CustomRows',
        Name: 'People Report',
      },
    ],
  },
  Schedule: {
    ReportSchedules: [
      {
        ScheduleType: 'Report',
        ReportName: 'People Report',
        ExportDestination: 'CSV',
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 17,
          Minute: 30,
        },
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Custom Reports Demo',
    exportOptions: {
      customReports: [
        {
          name: 'People Report',
          onRunReport: () => {
            // this will typically run a call on the server but here we just provide some dummy data
            // note that it takes the form of a ReportData object - with a 'columns' and a 'rows' section
            let reportData: ReportData = {
              columns: [
                {
                  ColumnId: 'Name',
                  FriendlyName: 'Name',
                  DataType: 'String',
                },
                {
                  ColumnId: 'Age',
                  FriendlyName: 'Age',
                  DataType: 'Number',
                },
                {
                  ColumnId: 'Location',
                  FriendlyName: 'Location',
                  DataType: 'String',
                },
              ],
              rows: [
                { Name: 'Joe', Age: 52, Location: 'London' },
                { Name: 'Dawn', Age: 39, Location: 'New York' },
                { Name: 'Peter', Location: 'France' },
                { Name: 'Eleanor', Age: 525 },
              ],
            };
            return reportData;
          },
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
