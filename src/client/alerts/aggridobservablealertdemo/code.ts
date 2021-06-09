import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, RowNode } from '@ag-grid-community/all-modules';
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
        Toolbars: ['Alert', 'Custom'],
      },
    ],
    CustomToolbars: [
      {
        Name: 'Custom',
        Title: 'Custom',
        CustomToolbarButtonLabels: [
          'Increase Item Count',
          'Increase Order Cost',
        ],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        MessageType: 'Info',
        Scope: { All: true },
        Rule: {
          ObservableExpression:
            " ROW_CHANGE(COUNT([ItemCount],3) ,TIMEFRAME('5m'))    ",
        },
        AlertProperties: {
          DisplayNotification: true,
        },
      },
      {
        MessageType: 'Success',
        Scope: { All: true },
        Rule: {
          ObservableExpression:
            " ROW_CHANGE( MAX([OrderCost] ),  TIMEFRAME('1h')) WHERE [CustomerReference] = 'TRADH' ",
        },
        AlertProperties: {
          DisplayNotification: true,
        },
      },
    ],
    FlashingAlertDefinitions: [
      {
        Scope: {
          DataTypes: ['Number'],
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
    adaptableId: 'Observable Alert Demo',
    dashboardOptions: {
      customToolbarButtons: [
        {
          label: 'Increase Item Count',
          onClick: () => {
            // lets use the first row - which has a Primary Key Vlaue of 10248
            const primaryKeyValue = 10248;

            // lets update the 'ItemCount' column by 1000
            const itemCount = 'ItemCount';

            // get first node (using Adaptable Api)
            const node: RowNode = adaptableApi.gridApi.getRowNodeForPrimaryKey(
              primaryKeyValue
            );
            const currentItemCount = node.data[itemCount];
            adaptableApi.gridApi.setCellValue(
              itemCount,
              currentItemCount + 5,
              primaryKeyValue,
              false
            );
          },
        },
        {
          label: 'Increase Order Cost',
          onClick: () => {
            // lets use the second row - which has a Primary Key Vlaue of 10249
            const primaryKeyValue = 10249;

            // lets update the 'OrderCost' column by 1000
            const itemCost = 'OrderCost';

            // get first node (using Adaptable Api)
            const node: RowNode = adaptableApi.gridApi.getRowNodeForPrimaryKey(
              primaryKeyValue
            );
            const currentItemCount = node.data[itemCost];
            adaptableApi.gridApi.setCellValue(
              itemCost,
              currentItemCount + 3000,
              primaryKeyValue,
              false
            );
          },
        },
      ],
    },
    searchOptions: {
      quickFilterTrigger: 'click',
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
