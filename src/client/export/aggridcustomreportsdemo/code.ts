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
        Scope: { ColumnIds: ['Name', 'Age', 'Location'] },
        Name: 'People Report',
        CustomReportFunction: 'getDummyData',
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
    adaptableId: 'Custom Reports Demo',
    userFunctions: [
      {
        type: 'CustomReportFunction',
        name: 'getDummyData',
        handler(reportName: string) {
          // this will typically run a call on the server but here we just provide some dummy data
          // note that it takes the form of an array of arrays - each array is a row and must match the column names
          let data = [
            ['Joe', 52, 'London'],
            ['Dawn', 39, 'New York'],
            ['Peter', , 'France'],
            ['Eleanor', 55],
          ];
          return data;
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
