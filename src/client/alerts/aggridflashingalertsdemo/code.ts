import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { PredefinedConfig } from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { GridOptions } from '@ag-grid-community/all-modules';

const predefinedConfig = {
  Theme: {
    CurrentTheme: 'dark',
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Query', 'QuickSearch', 'Theme'],
      },
    ],
    VisibleButtons: ['Alert'],
    IsFloating: true,
  },

  Alert: {
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ChangeLastOrder', 'ItemCost', 'OrderCost'],
        },
        UpChangeStyle: {
          BackColor: '#008000',
        },
        DownChangeStyle: {
          BackColor: '#FF0000',
        },
        FlashDuration: 500,
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        UpChangeStyle: {
          BackColor: '#0000ff',
        },
        DownChangeStyle: {
          BackColor: '#ff6961',
        },
        FlashDuration: 750,
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    enableRangeSelection: true,
    floatingFilter: false,
    sideBar: true,
    suppressMenuHide: true,

    columnDefs: columnDefs,
    rowData,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Flashing Alerts Demo',

    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig,
  };

  const adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
