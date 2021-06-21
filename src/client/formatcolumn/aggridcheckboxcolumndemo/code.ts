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
  CheckboxColumnClickedInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    Revision: Date.now(),
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['IsValid'],
        },
        ColumnStyle: {
          CheckBoxStyle: true,
        },
      },
    ],
  },
  Layout: {
    Revision: Date.now(),
    CurrentLayout: 'Orders',
    Layouts: [
      {
        ColumnSorts: [
          {
            ColumnId: 'Employee',
            SortOrder: 'Asc',
          },
        ],
        Columns: [
          'OrderId',
          'ChangeLastOrder',
          'Employee',
          'IsValid',
          'Freight',
          'InvoicedCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'OrderDate',
          'PackageCost',
        ],
        Name: 'Orders',
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Checkbox Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'CheckboxColumnClicked',
    (info: CheckboxColumnClickedInfo) => {
      const div = document.getElementById('outputDiv');
      if (div) {
        div.innerHTML =
          'Column: "' +
          info.column.FriendlyName +
          '"; Checked: ' +
          info.isChecked +
          '; Primary Key Value: ' +
          info.primaryKeyValue;
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
