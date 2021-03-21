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
  Report,
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
    CustomDestinations: [
      {
        Name: 'Email',
        Form: {
          Title: 'Email Settings',
          Description: 'Provide email details ',
          Fields: [
            {
              Name: 'emailAddress',
              Label: 'Email Address',
              Type: 'text',
              DefaultValue: 'support@adaptabletools.com',
            },
            {
              Name: 'subject',
              Label: 'Email Subject',
              Type: 'text',
              DefaultValue: 'AdapTable Report Data',
            },
            {
              Name: 'body',
              Label: 'Email Body',
              Type: 'text',
            },
          ],
        },
      },
      {
        Name: 'REST Endpoint',
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
    adaptableId: 'Custom Destination Demo',
    userFunctions: [
      {
        name: 'Email',
        type: 'CustomExportDestinationFunction',
        handler(report: Report, reportData: ReportData, customDestinationData) {
          // here you can send via your email client or to an endpoint or whatever you need
          // in this example, we will just log the output to the console
          // note that we include the customdestinationdata which was created in the UI
          console.log(report.Name);
          console.log(
            'will export to email:',
            reportData,
            customDestinationData
          );
        },
      },
      {
        name: 'REST Endpoint',
        type: 'CustomExportDestinationFunction',
        handler(report: Report, reportData: ReportData) {
          console.log(report.Name);
          console.log('will send to a server endpoint:', reportData);
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
