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
  AdaptableFormData,
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
              Name: 'address',
              Label: 'Email Address',
              Type: 'select',
              Options: [
                {
                  value: 'support@adaptabletools.com',
                  label: 'Support',
                },
                {
                  value: 'sales@adaptabletools.com',
                  label: 'Sales',
                },
              ],
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
        onExport: (
          report: Report,
          reportData: ReportData,
          customDestinationData?: AdaptableFormData
        ) => {
          // here you can send via your email client or to an endpoint or whatever you need
          // in this example, we will just log the output to the console
          // note that we include the customdestinationdata which was created in the UI
          console.log('EMAIL');
          console.log('report', report);
          console.log('reportData', reportData);
          console.log('customDestinationData', customDestinationData);
        },
      },
      {
        Name: 'REST Endpoint',
        onExport: (report: Report, reportData: ReportData) => {
          console.log('EMAIL');
          console.log('report', report);
          console.log('reportData', reportData);
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
    adaptableId: 'Custom Destination Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
