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
        Toolbars: ['Alert'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        MessageType: 'Warning',
        Rule: {
          Predicate: {
            PredicateId: 'GreaterThan',
            Inputs: [30],
          },
        },
        AlertProperties: {
          DisplayNotification: true,
        },
        // For ItemCount we will reference a form with validation
        AlertForm: 'Overwrite Form',
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Alert Overwrite Demo',
    alertOptions: {
      duration: 'always',
      position: 'TopCenter',
      alertForms: [
        {
          name: 'Overwrite Form',
          form: {
            description: 'Please enter a value < 30 or click "Undo" ',
            fields: [
              {
                name: 'ItemCount',
                label: 'Item Count',
                defaultValue: '',
                fieldType: 'number',
              },
            ],
            buttons: [
              {
                label: 'Overwrite',
                disabled: (
                  button: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  const newItemCountValue: any =
                    context.formData?.['ItemCount'];
                  return (
                    !newItemCountValue ||
                    newItemCountValue < 0 ||
                    newItemCountValue > 100
                  );
                },
                onClick: (
                  button: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  const columnId: string | undefined =
                    context.alert.dataChangedInfo?.columnId;
                  const primaryKeyValue: any =
                    context.alert.dataChangedInfo?.primaryKeyValue;
                  const newValue: any = context.formData?.['ItemCount'];
                  if (columnId && primaryKeyValue && newValue) {
                    adaptableApi.gridApi.setCellValue(
                      columnId,
                      newValue,
                      primaryKeyValue,
                      false
                    );
                  }
                },
                buttonStyle: {
                  tone: 'warning',
                  variant: 'outlined',
                },
              },
              {
                label: 'Undo',
                onClick: (
                  button: AdaptableButton,
                  context: AlertButtonContext
                ) => {
                  if (context.alert?.dataChangedInfo) {
                    adaptableApi.gridApi.undoCellEdit(
                      context.alert.dataChangedInfo
                    );
                  }
                },
                buttonStyle: {
                  tone: 'neutral',
                  variant: 'outlined',
                },
              },
            ],
          },
        },
      ],
      // Create a dynamic form with 1 Field (of type number)
      // Add 2 Buttons: one to Overwrite and one to Undo
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
