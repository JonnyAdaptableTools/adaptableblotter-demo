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
  AdaptableButton,
  DashboardButtonContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Custom',
        Toolbars: ['Layout', 'Trades', 'Deals', 'Orders'],
      },
      {
        Name: 'Regular',
        Toolbars: ['Layout', 'Export', 'SmartEdit'],
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
    adaptableId: 'Custom Toolbars Demo',
    dashboardOptions: {
      customToolbars: [
        // Show a Title and Configure Button
        {
          name: 'Trades',
          title: 'Trades',
          showConfigureButton: true,
          toolbarButtons: [
            {
              label: 'Make Trade',
              buttonStyle: {
                variant: 'raised',
                tone: 'accent',
              },
              onClick: (
                button: AdaptableButton,
                context: DashboardButtonContext
              ) => {
                alert('you clicked: ' + button.label);
              },
            },
          ],
          render: () => {
            return "<div><button style='cursor:pointer; margin-right:10px' onClick=\"alert('I have been clicked')\">Rendered Button</button></div>";
          },
        },
        // Show no Title and no Configure Button
        {
          name: 'Deals',
          toolbarButtons: [
            {
              label: 'New Deal',

              buttonStyle: {
                variant: 'text',
                tone: 'success',
              },
              onClick: (
                button: AdaptableButton,
                context: DashboardButtonContext
              ) => {
                alert('you clicked: ' + button.label);
              },
            },
          ],
        },
        // Show Configure Button but no Title
        // Note that we have also added an Icon to the button
        {
          name: 'Orders',
          title: 'Orders',
          showConfigureButton: true,
          toolbarButtons: [
            {
              label: 'Create Order',
              buttonStyle: {
                variant: 'outlined',
                tone: 'info',
              },
              icon: {
                height: 20,
                width: 25,
                src:
                  'https://www.pngfind.com/pngs/m/278-2781613_blue-plus-icon-add-new-button-png-transparent.png',
              },
              onClick: (
                button: AdaptableButton,
                context: DashboardButtonContext
              ) => {
                alert('you clicked: ' + button.label);
              },
            },
          ],
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
