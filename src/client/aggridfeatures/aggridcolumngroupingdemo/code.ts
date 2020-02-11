import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
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
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
      },
    ],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 11137, FreeText: 'Dispatch asap' },
          { PrimaryKey: 11133, FreeText: 'Angry customer' },
          { PrimaryKey: 11128, FreeText: 'Important order' },
        ],
      },
    ],
  },
  Layout: {
    Layouts: [
      {
        Columns: [
          'Avg Item Cost',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'Comments',
          'ShippedDate',
          'OrderCost',
          'PackageCost',
          'OrderId',
          'OrderDate',
          'Freight',
          'ArrivedOnTime',
          'ShipName',
          'ShipVia',
          'ItemCost',
          'ItemCount',
        ],
        ColumnSorts: [],
        Name: 'With Special Cols',
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    groupIncludeTotalFooter: true,
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
    adaptableId: 'Column Grouping Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
