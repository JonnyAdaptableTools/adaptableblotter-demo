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
    ModuleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    FormatColumns: [
      // Set a Style for OrderId
      {
        Scope: {
          ColumnIds: ['OrderId'],
        },
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
        },
      },
      // Set both a Style and a (Date-based) Display Format for OrderDate
      {
        Scope: {
          ColumnIds: ['OrderDate'],
        },
        Style: {
          FontWeight: 'Bold',
          FontSize: 'XSmall',
          FontStyle: 'Italic',
        },
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
    CurrentLayout: 'Format Layout',
    Layouts: [
      {
        Name: 'Format Layout',
        Columns: [
          'OrderId',
          'ShipCountry',
          'InvoicedCost',
          'OrderCost',
          'ChangeLastOrder',
          'LastUpdatedTime',
          'OrderDate',
          'ContactName',
          'RequiredDate',
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
    adaptableId: 'Format Column Style Demo',
    userInterfaceOptions: {
      permittedValues: [
        {
          scope: {
            ColumnIds: ['LastUpdatedTime'],
          },
          values: [''],
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
