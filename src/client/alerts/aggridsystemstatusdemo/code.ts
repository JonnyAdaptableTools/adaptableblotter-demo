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
  MenuContext,
  ActionColumnButtonContext,
  AdaptableButton,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['SystemStatus', 'DemoButtons'],
      },
    ],
    CustomToolbars: [
      {
        Name: 'DemoButtons',
        Title: 'Demo Buttons',
        CustomToolbarButtons: [
          {
            Label: 'Set Info',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'info',
            },
            ButtonClickedFunction: 'SetInfoButtonClick',
          },
          {
            Label: 'Set Success',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'success',
            },
            ButtonClickedFunction: 'SetSuccessButtonClick',
          },
          {
            Label: 'Set Warning',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'warning',
            },
            ButtonClickedFunction: 'SetWarningButtonClick',
          },
          {
            Label: 'Set Error',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'error',
            },
            ButtonClickedFunction: 'SetErrorButtonClick',
          },
        ],
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
    adaptableId: 'System Status Demo',
    containerOptions: {
      systemStatusContainer: 'systemStatusDiv',
    },
    menuOptions: {
      contextMenuItems: [
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
    userInterfaceOptions: {},
    userFunctions: [
      {
        type: 'ButtonClickedFunction',
        name: 'SetInfoButtonClick',
        handler: (
          button: AdaptableButton,
          context: ActionColumnButtonContext
        ) => {
          adaptableApi.systemStatusApi.setInfoSystemStatus('No issues');
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'SetSuccessButtonClick',
        handler: (
          button: AdaptableButton,
          context: ActionColumnButtonContext
        ) => {
          adaptableApi.systemStatusApi.setSuccessSystemStatus(
            'All working fine'
          );
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'SetWarningButtonClick',
        handler: (
          button: AdaptableButton,
          context: ActionColumnButtonContext
        ) => {
          adaptableApi.systemStatusApi.setWarningSystemStatus(
            'Problems with server',
            'Avoid any unnecesary edits'
          );
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'SetErrorButtonClick',
        handler: (
          button: AdaptableButton,
          context: ActionColumnButtonContext
        ) => {
          adaptableApi.systemStatusApi.setErrorSystemStatus(
            'The server is down!',
            'Please do not make any edits until the server comes back up'
          );
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
