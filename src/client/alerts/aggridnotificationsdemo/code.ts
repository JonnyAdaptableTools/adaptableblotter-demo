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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert'],
      },
    ],
  },
  Alert: {
    Revision: Date.now(),
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        MessageType: 'Warning',
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [2000],
        },

        AlertProperties: {
          DisplayNotification: true,
        },
      },

      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        MessageType: 'Info',
        Rule: {
          Predicate: {
            PredicateId: 'PercentChange',
            Inputs: [100],
          },
        },
        AlertProperties: {
          DisplayNotification: true,
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
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
    adaptableId: 'Notifications Demo',
    alertOptions: {
      position: 'BottomRight',
      duration: 10000,
      showProgressBar: true,
      closeWhenClicked: true,
      pauseWhenHovering: true,
      isDraggable: false,
      transition: 'Flip',
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
