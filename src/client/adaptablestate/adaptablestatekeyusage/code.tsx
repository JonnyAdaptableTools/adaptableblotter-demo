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
  DashboardButtonClickedEventArgs,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['Dashboard', 'Layout'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Export', 'Layout', 'QuickSearch'],
      },
    ],
    CustomButtons: [
      {
        Name: 'ChangeView',
        Caption: 'Click to toggle the View ',
        ButtonStyle: {
          Variant: 'raised',
          Tone: 'info',
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'OrderDate',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'Employee',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ItemCost',
          'ItemCount',
        ],
        Name: 'Orders View',
      },
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
        ColumnSorts: [
          {
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
        ],
        Name: 'Shipping View',
      },
    ],
  },
} as PredefinedConfig;

let views = ['adaptableStateKey-demo1', 'adaptableStateKey-demo2'].map(
  x => `${x}`
);
let currentView = views[0];

const getToolbarTitle = () => {
  return currentView === views[0] ? 'First view' : 'Second view';
};
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
    adaptableId: getToolbarTitle(),
    adaptableStateKey: currentView,
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'DashboardButtonClicked',
    (dashboardButtonClickedEventArgs: DashboardButtonClickedEventArgs) => {
      if (
        dashboardButtonClickedEventArgs.data[0].id.dashboardButton.Name ==
        'ChangeView'
      ) {
        currentView = currentView === views[0] ? views[1] : views[0];
        adaptableApi.configApi.setAdaptableStateKey(currentView);
        adaptableApi.dashboardApi.setHomeToolbarTitle(getToolbarTitle());
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
