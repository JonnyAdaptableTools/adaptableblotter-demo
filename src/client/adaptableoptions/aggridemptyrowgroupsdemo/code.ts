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
  Dashboard: {
    Tabs: [
      {
        Name: 'Demo',
        Toolbars: ['Layout'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'No Columns',
    Layouts: [
      {
        Columns: [
          'CustomerReference',
          'OrderId',
          'InvoicedCost',
          'ContactName',
          'Employee',
          'OrderCost',
          'PackageCost',
          'Employee',
        ],
        RowGroupedColumns: ['ShipVia', 'ShipCountry'],
        Name: 'Many Columns',
      },
      {
        Columns: [],
        RowGroupedColumns: ['ShipVia', 'ShipCountry'],
        Name: 'No Columns',
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
    sideBar: true,
    groupMultiAutoColumn: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Empty Row Groups Demo',
    predefinedConfig: demoConfig,
    generalOptions: {
      hideEmptyGroupRows: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
