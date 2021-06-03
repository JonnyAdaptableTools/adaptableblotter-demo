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
  GridCell,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Layout', 'BulkUpdate', 'SmartEdit'],
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
          'ShipVia',
          'ItemCost',
          'ItemCount',
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
    adaptableId: 'ReadOnly Cells Demo',
    userInterfaceOptions: {},
    editOptions: {
      isCellEditable: (gridCell: GridCell, node: any) => {
        // Rule 1:  No row where Ship Via is Federal Shipping is editable
        if (node.data['ShipVia'] == 'United Package') {
          return false;
        }

        // Rule 2:  Item Count not editable if > 7
        if (gridCell.columnId == 'ItemCount') {
          if (gridCell.rawValue > 7) {
            return false;
          }
        }

        // Rule 3:  Order Cost, Package Cost, Item Cost not editable where Order Change is negative
        if (
          node.data['ChangeLastOrder'] <= 0 &&
          (gridCell.columnId == 'OrderCost' ||
            gridCell.columnId == 'PackageCost' ||
            gridCell.columnId == 'ItemCost')
        ) {
          return false;
        }
        return true;
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
