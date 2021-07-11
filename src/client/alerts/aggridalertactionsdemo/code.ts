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
  AlertButtonContext,
  AlertButton,
  AdaptableButton,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert', 'Custom'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ContactName'],
        },
        MessageType: 'Info',
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },

        AlertProperties: {
          DisplayNotification: true,
        },
        AlertForm: {
          buttons: [
            {
              onClick: ['highlight-cell', 'jump-to-cell', 'email-support'],
              buttonStyle: {
                tone: 'neutral',
                variant: 'text',
              },
              label: 'Show Me',
            },
            {
              onClick: ['undo'],
              buttonStyle: {
                tone: 'accent',
                variant: 'raised',
              },
              label: 'Undo',
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
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
    adaptableId: 'Alert Actions Demo',
    alertOptions: {
      duration: 10000,
      showProgressBar: true,
      closeWhenClicked: true,
      pauseWhenHovering: true,
      actionHandlers: [
        {
          name: 'email-support',
          handler: (button: AlertButton, context: AlertButtonContext) => {
            // should provide an implementation to email Alert details
            // but will just output to console
            console.log(context.alert);
          },
        },
      ],
    },
    dashboardOptions: {
      customToolbars: [
        {
          name: 'Custom',
          title: 'Custom',
          toolbarButtons: [
            {
              label: 'Change Contact First Row',
              onClick: (
                button: AdaptableButton,
                context: AlertButtonContext
              ) => {
                // get the contact Value in first Row
                const newContact =
                  adaptableApi.gridApi.getRowNodeForPrimaryKey(10248).data[
                    'ContactName'
                  ] === 'James Dean'
                    ? 'Marlyn Monroe'
                    : 'James Dean';
                changeContactName(newContact, 10248);
              },
            },
          ],
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };

  function changeContactName(contactName: string, primaryKeyValue: any): void {
    adaptableApi.gridApi.setCellValue(
      'ContactName',
      contactName,
      primaryKeyValue,
      false
    );
  }
};
