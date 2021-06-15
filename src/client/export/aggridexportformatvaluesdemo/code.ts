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
        Toolbars: ['Export'],
      },
    ],
  },
  Export: {
    CurrentReport: 'Current Data',
    CurrentDestination: 'Excel',
  },
  Layout: {
    CurrentLayout: 'FormatValues',
    Layouts: [
      {
        Columns: [
          'ShipVia',
          'PackageCost',
          'OrderDate',
          'ItemCost',
          'OrderCost',
          'Employee',
          'RequiredDate',
          'InvoicedCost',
          'ShippedDate',
          'ContactName',
          'CustomerReference',
        ],
        Name: 'FormatValues',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          DataTypes: ['Number'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '$',
          },
        },
        CellAlignment: 'Right',
      },
      {
        Scope: {
          ColumnIds: ['OrderDate'],
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'MMM do yyyy',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['RequiredDate'],
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'MMMM do yyyy, h:mm:ss a',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ShippedDate'],
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'dd-MM-yyyy',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['Employee'],
        },
        DisplayFormat: {
          Formatter: 'StringFormatter',
          Options: {
            Case: 'Upper',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ShipVia'],
        },
        DisplayFormat: {
          Formatter: 'StringFormatter',
          Options: {
            Case: 'Sentence',
          },
        },
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
    adaptableId: 'Export Format Values Demo',
    exportOptions: {
      exportFormatType: {
        string: 'formattedValue',
        date: 'rawValue',
        number: 'rawValue',
      },
      exportDateFormat: 'MM/dd/yyyy',
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
