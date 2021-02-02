import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { ColDef, GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  AdaptableApi,
  PredefinedConfig,
  AdaptableReadyInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['OrderDate'],
        },
        Style: {
          FontWeight: 'Bold',
          FontSize: 'XSmall',
          FontStyle: 'Italic',
        },
        CellAlignment: 'Center',
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'yyyyMMdd',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        CellAlignment: 'Right',
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '£',
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Delayed',
    Layouts: [
      {
        Columns: [
          'CustomerReference',
          'OrderId',
          'InvoicedCost',
          'ContactName',
          'Employee',
          'OrderDate',
          'ShipVia',
        ],
        Name: 'Delayed',
      },
    ],
  },
} as PredefinedConfig;

export default async (
  columnDefs: ColDef[],
  rowData: any[],
  companyNameColDef: ColDef,
  packageCostColDef: ColDef
) => {
  const gridOptions: GridOptions = {
    columnDefs,
    // rowData, - note we are NOT setting rowData at startup
    enableRangeSelection: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
      minWidth: 200,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Delayed Data Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      includeExpandedRowGroups: true,
      autoSizeColumnsInLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', (info: AdaptableReadyInfo) => {
    // Add data to grid after 3 seconds using loadGridData method in GridApi
    setTimeout(() => {
      adaptableApi.gridApi.loadGridData(rowData);
    }, 3000);

    // Add the Package Cost and Compamy Name columns to the grid after 6 seconds
    // Note: we access ag-Grid through the info object returned by AdaptableReady
    setTimeout(() => {
      const vendorGrid: GridOptions = info.vendorGrid;
      const colDefs = vendorGrid.columnDefs as ColDef[];
      vendorGrid.api?.setColumnDefs([
        companyNameColDef,
        packageCostColDef,
        ...colDefs,
      ]);
    }, 6000);
  });

  return { adaptableOptions, adaptableApi };
};
