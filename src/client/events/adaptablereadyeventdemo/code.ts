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

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    rowSelection: 'multiple',
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Adaptable Ready Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'AdaptableReady',
    (adaptableReadyInfo: AdaptableReadyInfo) => {
      adaptableApi.quickSearchApi.runQuickSearch('o*');
      const gridOptions: GridOptions = adaptableReadyInfo.vendorGrid;
      gridOptions.onSelectionChanged = (event: SelectionChangedEvent) => {
        var rowCount = event.api.getSelectedNodes().length;
        const div = document.getElementById('outputDiv');
        if (div) {
          div.innerHTML = 'Selection changed: ' + rowCount + ' rows selected';
        }
      };
    }
  );

  return { adaptableOptions, adaptableApi };
};
