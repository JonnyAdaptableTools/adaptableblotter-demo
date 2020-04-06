import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import {
  GridOptions,
  SelectionChangedEvent,
} from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  AdaptableReadyInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    rowSelection: 'multiple',
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    adaptableId: 'Adaptable Ready Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'AdaptableReady',
    (adaptableReadyInfo: AdaptableReadyInfo) => {
      adaptableApi.quickSearchApi.applyQuickSearch('o*');
      const gridOptions: GridOptions = adaptableReadyInfo.vendorGrid;
      gridOptions.onSelectionChanged = (event: SelectionChangedEvent) => {
        var rowCount = event.api.getSelectedNodes().length;
        console.log('selection changed, ' + rowCount + ' rows selected');
      };
    }
  );

  return { adaptableOptions, adaptableApi };
};
