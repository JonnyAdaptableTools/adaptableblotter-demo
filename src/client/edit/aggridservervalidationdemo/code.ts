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
    VisibleButtons: ['CellValidation'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['QuickSearch', 'BulkUpdate', 'SmartEdit', 'Layout'],
      },
    ],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'ItemCount',
        Range: {
          Operand1: '15',
          Operand1Type: 'Value',
          Operator: 'ValueChange',
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
    if (dataChangedInfo.ColumnId === 'ItemCount') {
      if (dataChangedInfo.NewValue == 17) {
        return {
          NewValue: dataChangedInfo.OldValue,
          ValidationMessage: 'Cannot set Item Count to 17',
        };
      } else if (dataChangedInfo.NewValue > 25) {
        return {
          NewValue: 25,
          ValidationMessage: 'Item Count cannot be greater than 25',
        };
      } else if (dataChangedInfo.NewValue < 5) {
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
