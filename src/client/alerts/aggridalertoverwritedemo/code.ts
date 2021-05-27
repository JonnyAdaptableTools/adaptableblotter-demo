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
        Toolbars: ['Alert'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        MessageType: 'Warning',
        Rule: {
          Predicate: {
            PredicateId: 'GreaterThan',
            Inputs: [100],
          },
        },
        AlertProperties: {
          DisplayNotification: true,
        },
        // Create a dynamic form with 1 Field (of type number)
        // And 2 Buttons: one to Overwrite and one to Undo
        AlertForm: {
          Description: 'Please enter a value < 100 or click "Undo" ',
          Fields: [
            {
              Name: 'ItemCost',
              Label: 'Item Cost',
              DefaultValue: '',
              Type: 'number',
            },
          ],
          Buttons: [
            {
              Label: 'Overwrite',
              Validate: '[ItemCost] >0 AND [ItemCost] <= 100',
              Action: ['overwrite'],
              ButtonStyle: {
                Tone: 'warning',
                Variant: 'outlined',
              },
            },
            {
              Label: 'Undo',
              Action: ['undo'],
              ButtonStyle: {
                Tone: 'neutral',
                Variant: 'outlined',
              },
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Alert Overwrite Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
