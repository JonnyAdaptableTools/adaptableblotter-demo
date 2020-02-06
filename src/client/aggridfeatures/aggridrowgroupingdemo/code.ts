import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import {
  GridOptions,
  ModelUpdatedEvent,
  IClientSideRowModel,
} from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { AdaptableReadyInfo } from '@adaptabletools/adaptable/src/Api/Events/AdaptableReady';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    groupIncludeTotalFooter: true,
    groupIncludeFooter: true,
    suppressAggFuncInHeader: true,
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
    adaptableId: 'Row Grouping Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', (info: AdaptableReadyInfo) => {
    let gridOptions: GridOptions = info.vendorGrid as GridOptions;

    gridOptions.onModelUpdated = (event: ModelUpdatedEvent) => {
      const pinnedData = event.api.getPinnedTopRow(0);
      const model = event.api.getModel() as IClientSideRowModel;
      const rootNode = model.getRootNode();
      if (!pinnedData) {
        event.api.setPinnedTopRowData([rootNode.aggData]);
      } else {
        pinnedData.updateData(rootNode.aggData);
      }
    };
  });

  return { adaptableOptions, adaptableApi };
};
