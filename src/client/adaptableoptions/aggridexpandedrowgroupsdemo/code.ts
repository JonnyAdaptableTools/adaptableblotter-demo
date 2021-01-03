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
  Layout: {
    CurrentLayout: 'Grouped',
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
        RowGroupedColumns: ['ShipCountry'],
        ExpandedRowGroupValues: ['Belgium', 'Denmark'],
        Name: 'Grouped',
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
      minWidth: 200,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Expanded Row Groups Demo',
    predefinedConfig: demoConfig,
    layoutOptions: {
      includeExpandedRowGroups: true,
      autoSizeColumnsInLayout: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
