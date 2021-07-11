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
  AlertButtonContext,
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
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['Employee'],
        },
        NeutralChangeStyle: {
          ForeColor: 'White',
          BackColor: 'Brown',
        },
        FlashDuration: 2000,
      },
    ],
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
        AlertForm: 'reassignEmployee',
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
    adaptableId: 'Alert Form Demo',
    alertOptions: {
      duration: 10000,
      showProgressBar: true,
      closeWhenClicked: true,
      pauseWhenHovering: true,
      alertForms: [
        {
          name: 'reassignEmployee',
          form: {
            buttons: [
              {
                label: (
                  button: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  return context.alert.dataChangedInfo?.rowData['OrderCost'] >
                    300
                    ? 'Assign to Robert'
                    : 'Assign to Paul';
                },
                buttonStyle: (
                  btn: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  console.log(
                    'button style context',
                    context.alert.dataChangedInfo
                  );
                  return { tone: 'info', variant: 'raised' };
                },
                onClick: (
                  btn: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  const newEmployee: string =
                    context.alert.dataChangedInfo?.rowData['OrderCost'] > 300
                      ? 'Robert King'
                      : 'Paul Andrews';
                  // in real life you would do so something like
                  // employeeService.changeOwner(.....)
                  adaptableApi.gridApi.setCellValue(
                    'Employee',
                    newEmployee,
                    context.alert.dataChangedInfo?.primaryKeyValue,
                    true
                  );
                },
              },
            ],
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
              onClick: () => {
                changeContactName('James Dean', 10248);
              },
            },
            {
              label: 'Change Contact Second Row',
              onClick: () => {
                changeContactName('Marilyn Monroe', 10249);
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
