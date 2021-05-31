import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import './actioncolumn.css';
import '../../../../DemoPage/aggriddemo.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  AdaptableButton,
  ActionColumnButtonContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Layout: {
    CurrentLayout: 'Action Cols',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'Multiply',
          'CompanyName',
          'Plus',
          'ItemCount',
          'Minus',
          'Employee',
          'Action',
        ],
        ColumnSorts: [],
        Name: 'Action Cols',
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
    adaptableId: 'Action Column Demo',
    userInterfaceOptions: {
      actionColumns: [
        {
          columnId: 'Multiply',
          actionColumnButton: {
            label: 'Click',
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              let rowData: any = context.rowNode?.data;
              let multiplier: number =
                rowData.Employee == 'Robert King' ||
                rowData.Employee == 'Janet Leverling'
                  ? 2
                  : 3;
              let newItemCost = rowData.ItemCost * multiplier;
              newItemCost = Math.round(newItemCost * 100) / 100;
              adaptableApi.gridApi.setCellValue(
                'ItemCost',
                newItemCost,
                context.primaryKeyValue,
                true
              );
            },
            shouldRender: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              return context.rowNode?.data?.Employee != 'Margaret Peacock';
            },
            //  RenderFunction: 'renderMultiplyFunction',
            buttonStyle: {
              variant: 'raised',
              tone: 'accent',
            },
          },
        },
        {
          columnId: 'Plus',
          actionColumnButton: {
            label: '+',
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              let rowData: any = context.rowNode?.data;
              let itemCount = rowData.ItemCount;
              adaptableApi.gridApi.setCellValue(
                'ItemCount',
                itemCount + 1,
                context.primaryKeyValue,
                true
              );
            },
            buttonStyle: {
              variant: 'raised',
              tone: 'neutral',
            },
          },
        },
        {
          columnId: 'Minus',
          actionColumnButton: {
            label: '-',
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              let rowData: any = context.rowNode?.data;
              let itemCount = rowData.ItemCount;
              adaptableApi.gridApi.setCellValue(
                'ItemCount',
                itemCount - 1,
                context.primaryKeyValue,
                true
              );
            },
            buttonStyle: {
              variant: 'raised',
              tone: 'neutral',
            },
          },
        },
        {
          columnId: 'Action',
          actionColumnButton: {
            label: 'Delete Row',
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              adaptableApi.gridApi.deleteGridData([context.rowNode?.data]);
            },
            buttonStyle: {
              variant: 'outlined',
              tone: 'neutral',
            },
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
