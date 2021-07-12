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
  DashboardButtonContext,
  AdaptableButton,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Regular',
        Toolbars: ['Layout', 'Export', 'SmartEdit'],
      },
    ],
    ModuleButtons: ['GridInfo'],
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
    adaptableId: 'Custom Buttons Demo',
    dashboardOptions: {
      customDashboardButtons: [
        {
          label: 'Delete Row',
          buttonStyle: {
            variant: 'raised',
            tone: 'accent',
          },
          onClick: (
            button: AdaptableButton,
            context: DashboardButtonContext
          ) => {
            let firstRow: any = adaptableOptions.vendorGrid.api.getDisplayedRowAtIndex(
              0
            );
            if (firstRow && firstRow.data) {
              adaptableApi.gridApi.deleteGridData([firstRow.data]);
            }
          },
        },
        {
          label: 'New Row',
          buttonStyle: {
            variant: 'outlined',
            tone: 'info',
          },
          onClick: (
            button: AdaptableButton,
            context: DashboardButtonContext
          ) => {
            alert('you clicked the "newRow" (plus icon) button');
          },
          icon: {
            height: 15,
            width: 15,
            src:
              'https://www.pngfind.com/pngs/m/170-1706847_8-skin-pack-pour-windows-xp-icc5l-description.png',
          },
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
