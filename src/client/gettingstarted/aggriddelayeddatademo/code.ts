import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  AdaptableApi,
  PredefinedConfig,
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
        CellAlignment: 'Right',
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'yyyyMMdd',
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Grouped',
    Layouts: [
      {
        Columns: [
          'ShipVia',
          'CustomerReference',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'Employee',
        ],
        RowGroupedColumns: ['ShipCountry'],
        Name: 'Grouped',
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    // rowData, - note we are NOT setting rowData at startup
    enableRangeSelection: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
      minWidth: 200,
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Delayed Data Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      includeOpenedRowGroups: true,
      autoSizeColumnsInLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  // mimic getting data from the server by waiting for a few seconds
  adaptableApi.eventApi.on('AdaptableReady', () => {
    setTimeout(() => {
      // use the load data method in GridApi of AdaptableApi
      adaptableApi.gridApi.loadGridData(rowData);
    }, 3000);
  });

  return { adaptableOptions, adaptableApi };
};
