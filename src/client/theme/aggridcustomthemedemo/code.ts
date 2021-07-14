import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-blue.css';
import './custometheme.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  ThemeChangedInfo,
  AdaptableTheme,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Theme', 'Export', 'Layout'],
      },
    ],
  },
  Theme: {
    Revision: 5,
    UserThemes: [
      {
        Name: 'BlueTheme',
        Description: 'Blue theme',
        VendorGridClassName: 'ag-theme-blue',
      },
      {
        Name: 'CustomTheme',
        Description: 'Custom theme',
        VendorGridClassName: 'ag-theme-balham-dark',
      },
      {
        Name: 'dark',
        Description: 'Dark Theme',
        VendorGridClassName: 'ag-theme-balham-dark',
      },
      {
        Name: 'light',
        Description: 'Light Theme',
        VendorGridClassName: 'ag-theme-balham',
      },
    ],
    SystemThemes: [],
    CurrentTheme: 'BlueTheme',
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
    adaptableId: 'Custom Theme Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('ThemeChanged', (info: ThemeChangedInfo) => {
    if (info) {
      let theme: AdaptableTheme = info.theme as AdaptableTheme;
      console.log(theme);
    }
  });

  return { adaptableOptions, adaptableApi };
};
