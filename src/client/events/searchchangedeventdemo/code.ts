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
  AdaptableFunctionName,
  AccessLevel,
  SearchChangedEventArgs,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Revision: 15,
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
  QuickSearch: {
    QuickSearchText: 'l',
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
    adaptableId: 'SearchChangedDemo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'SearchChanged',
    (searchChangedArgs: SearchChangedEventArgs) => {
      console.log('search changed');
      console.log(searchChangedArgs.data[0].id);
    }
  );

  return { adaptableOptions, adaptableApi };
};
