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
        Name: 'Demo Toolbar',
        Toolbars: ['Layout', 'Export', 'CellSummary'],
      },
    ],
  },
  Layout: {
    Revision: Date.now(),
    CurrentLayout: 'Pivot View',
    Layouts: [
      {
        Columns: [],
        ColumnSorts: [],
        RowGroupedColumns: ['Employee'],
        PivotColumns: ['ShipVia', 'ShipCountry'],
        AggregationColumns: { InvoicedCost: 'sum', ItemCount: 'max' },
        EnablePivot: true,
        Name: 'Pivot View',
      },
    ],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'ShipVia',
        SortedValues: ['Speedy Express', 'United Package', 'Federal Shipping'],
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 3,
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
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
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
    adaptableId: 'Pivot Layout Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
