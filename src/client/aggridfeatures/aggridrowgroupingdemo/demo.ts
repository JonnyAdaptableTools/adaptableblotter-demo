import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import {
  AllEnterpriseModules,
  GridOptions,
  ModelUpdatedEvent,
  IClientSideRowModel,
} from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { AdaptableReadyInfo } from '@adaptabletools/adaptable/src/Api/Events/AdaptableReady';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getRowGroupingNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.groupIncludeTotalFooter = true;
  gridOptions.groupIncludeFooter = true;
  gridOptions.suppressAggFuncInHeader = false;
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Row Grouping Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  tickingDataHelper.startTickingDataagGridOrders(
    gridOptions,
    adaptableApi,
    100,
    10248,
    11142
  );

  adaptableApi.eventApi.on('AdaptableReady', (info: AdaptableReadyInfo) => {
    // to set a pinned row (in this case the 5th row in our data source)
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

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
