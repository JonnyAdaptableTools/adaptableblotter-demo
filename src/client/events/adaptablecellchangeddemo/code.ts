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
  CellChangedInfo,
  PredefinedConfig,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Revision: Date.now(),
    Tabs: [
      {
        Name: 'Demo Toolbar',
        Toolbars: ['Layout', 'SmartEdit', 'BulkUpdate'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Simple Layout',
    Layouts: [
      {
        Name: 'Simple Layout',
        Columns: [
          'OrderId',
          'ShipName',
          'ItemCost',
          'ItemCount',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
        ],
      },
    ],
  },
  Alert: {
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        Rule: {
          Predicate: { PredicateId: 'Any' },
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Adaptable Cell Changed Event Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'CellChanged',
    (cellChangedInfo: CellChangedInfo) => {
      console.log(cellChangedInfo);
      const div = document.getElementById('outputDiv');
      if (div) {
        div.innerHTML =
          'Order Id: ' +
          cellChangedInfo.cellChange.primaryKeyValue +
          '; Column: ' +
          cellChangedInfo.cellChange.columnId +
          '; Old Value: ' +
          cellChangedInfo.cellChange.oldValue +
          '; New Value: ' +
          cellChangedInfo.cellChange.newValue +
          '; (Trigger: ' +
          cellChangedInfo.cellChange.trigger +
          ')';
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
