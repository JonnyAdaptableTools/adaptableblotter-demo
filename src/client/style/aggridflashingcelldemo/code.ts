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
    VisibleButtons: ['FlashingCells'],
    IsFloating: true,
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'ChangeLastOrder',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ItemCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'OrderCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'InvoicedCost',
        DownColor: '#ff6961',
        FlashingCellDuration: 750,
        IsLive: true,
        UpColor: '#0000ff',
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
    adaptableId: 'Flashing Cell Demo',

    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig,
  };

  const adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
