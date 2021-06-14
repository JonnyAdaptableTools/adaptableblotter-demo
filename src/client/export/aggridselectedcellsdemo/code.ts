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
  GridCellRange,
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
  Export: {
    CurrentReport: 'Selected Cells',
    CurrentDestination: 'Excel',
  },
  Layout: {
    CurrentLayout: 'Selection',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ContactName',
          'Employee',
          'InvoicedCost',
          'ShipVia',
          'ChangeLastOrder',
          'ItemCount',
          'OrderCost',
          'CustomerReference',
          'PackageCost',
        ],
        Name: 'Selection',
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
    rowSelection: 'multiple',
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Selected Cells Report Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    setTimeout(() => {
      adaptableApi.gridApi.selectCellRange({
        columnIds: ['InvoicedCost', 'ShipVia', 'ChangeLastOrder', 'ItemCount'],
        primaryKeyValueStart: 10250,
        primaryKeyValueEnd: 10253,
      });
      adaptableApi.gridApi.selectCellRange({
        columnIds: ['ContactName', 'Employee', 'InvoicedCost', 'ShipVia'],
        primaryKeyValueStart: 10255,
        primaryKeyValueEnd: 10256,
      });
      adaptableApi.gridApi.selectCellRange({
        columnIds: ['CustomerReference'],
        primaryKeyValueStart: 10248,
        primaryKeyValueEnd: 10260,
      });
    }, 500);
  });

  return { adaptableOptions, adaptableApi };
};
