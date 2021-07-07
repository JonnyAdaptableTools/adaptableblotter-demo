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
  DataChangedInfo,
  ValidationResult,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    ModuleButtons: ['Alert'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'BulkUpdate', 'SmartEdit', 'Layout'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
        MessageType: 'Error',
        AlertProperties: {
          PreventEdit: true,
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Server Val View',
    Layouts: [
      {
        Name: 'Server Val View',
        Columns: [
          'OrderId',
          'OrderDate',
          'ItemCost',
          'ItemCount',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
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
    adaptableId: 'Server Validation Demo',
    editOptions: {
      validateOnServer: (dataChangedInfo: DataChangedInfo) => {
        return new Promise(resolve => {
          setTimeout(
            () => resolve(getServerEditResponse(dataChangedInfo)),
            500
          );
        });
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  function getServerEditResponse(
    dataChangedInfo: DataChangedInfo
  ): ValidationResult {
    if (dataChangedInfo.columnId === 'ItemCount') {
      if (dataChangedInfo.newValue == 17) {
        return {
          NewValue: dataChangedInfo.oldValue,
          ValidationMessage: 'Cannot set Item Count to 17',
        };
      } else if (dataChangedInfo.newValue > 25) {
        return {
          NewValue: 25,
          ValidationMessage: 'Item Count cannot be greater than 25',
        };
      } else if (dataChangedInfo.newValue < 5) {
        return {
          NewValue: 5,
          ValidationMessage: 'Item Count cannot  be less than  5',
        };
      }
    }
    return {};
  }

  return { adaptableOptions, adaptableApi };
};
