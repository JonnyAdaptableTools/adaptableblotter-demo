import './node_modules/@adaptabletools/adaptable/index.css';
import './node_modules/@adaptabletools/adaptable/themes/dark.css';
import './node_modules/@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import './node_modules/@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import './node_modules/@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Grid',
        Toolbars: ['Layout', 'Export', 'CellSummary', 'SystemStatus', 'Chart'],
      },
      {
        Name: 'Edit',
        Toolbars: ['SmartEdit', 'BulkUpdate'],
      },
      {
        Name: 'Search',
        Toolbars: ['AdvancedSearch', 'ColumnFilter', 'QuickSearch'],
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
    adaptableId: 'Dashboard Tabs Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
