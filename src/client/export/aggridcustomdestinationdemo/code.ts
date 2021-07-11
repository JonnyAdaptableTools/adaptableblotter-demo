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
  AdaptableButton,
  ExportButtonContext,
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
            description: 'Provide email details including a Body ',
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
              },
              {
                label: 'Export',

                buttonStyle: { tone: 'success', variant: 'raised' },
                onClick: (
                  button: AdaptableButton,
                  context: ExportButtonContext
                ) => {
                  // here you can send via your email client or to an endpoint or whatever you need
                  // in this example, we will just log the output to the screen
                  const emailAddress: string = context.formData?.['address'];
                  const div = document.getElementById('outputDiv');
                  if (emailAddress && div) {
                    div.innerHTML =
                      'Sending to Email Address ("' +
                      emailAddress +
                      '"); Report: "' +
                      context.report.Name +
                      '"; Columns: ' +
                      context.reportData.columns.length +
                      ', Rows: ' +
                      context.reportData.rows.length;
                  }
                },
                disabled: (
                  button: AdaptableButton,
                  context: ExportButtonContext
                ) => {
                  return (
                    context.formData['body'] === null ||
                    context.formData['body'] === ''
                  );
                },
              },
            ],
          },
        },
        {
          name: 'REST Endpoint',
          onExport: (report: Report, reportData: ReportData) => {
            const div = document.getElementById('outputDiv');
            if (div) {
              div.innerHTML =
                'Sending to REST: Report: "' +
                report.Name +
                '"; Columns: ' +
                reportData.columns.length +
                ', Rows: ' +
                reportData.rows.length;
            }
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
