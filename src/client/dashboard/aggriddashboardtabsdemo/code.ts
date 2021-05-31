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
import charts from '@adaptabletools/adaptable-plugin-charts';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Grid',
        Toolbars: ['Layout', 'Export', 'CellSummary', 'SystemStatus', 'Chart'],
      },
      {
        Name: 'Edit',
        Toolbars: ['SmartEdit', 'BulkUpdate'],
      },
      {
        Name: 'Search',
        Toolbars: ['Query', 'Filter', 'QuickSearch'],
      },
    ],
    CustomToolbars: [
      {
        Name: 'customToolbar',
        Title: 'Custom Toolbar',
        CustomToolbarButtonLabels: ['Demo Button'],
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
    adaptableId: 'Dashboard Tabs Demo',
    dashboardOptions: {
      customToolbarButtons: [
        {
          label: 'Demo Button',
          buttonStyle: {
            variant: 'text',
            tone: 'success',
          },
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
