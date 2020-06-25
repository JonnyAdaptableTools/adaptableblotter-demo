import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import column from '../../../../pages/column';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
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

export default async (columnDefs: ColDef[], rowData: any[]) => {
  columnDefs.find(c => c.field == 'OrderId')!.lockPosition = true;

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
    adaptableId: 'Fixed Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
