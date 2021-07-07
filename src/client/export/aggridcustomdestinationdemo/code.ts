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
    exportOptions: {
      customDestinations: [
        {
          name: 'Email',
          form: {
            title: 'Email Settings',
            description: 'Provide email details ',
            fields: [
              {
                name: 'address',
                label: 'Email Address',
                fieldType: 'select',
                options: [
                  {
                    value: 'support@adaptabletools.com',
                    label: 'Support',
                  },
                  {
                    value: 'sales@adaptabletools.com',
                    label: 'Sales',
                  },
                ],
                defaultValue: 'support@adaptabletools.com',
              },
              {
                name: 'subject',
                label: 'Email Subject',
                fieldType: 'text',
                defaultValue: 'AdapTable Report Data',
              },
              {
                name: 'body',
                label: 'Email Body',
                fieldType: 'text',
              },
            ],
            buttons: [
              {
                label: 'Cancel',
                //  validate: true,
              },
              {
                label: 'Export',
                buttonStyle: {
                  tone: 'success',
                  variant: 'raised',
                },
                //  autoSubmitForm: true,
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
          name: 'REST Endpoint',
          onExport: (report: Report, reportData: ReportData) => {
            console.log('EMAIL');
            console.log('report', report);
            console.log('reportData', reportData);
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
