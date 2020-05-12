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
  ToolbarVisibilityChangedEventArgs,
  ToolbarButtonClickedEventArgs,
  DashboardButtonClickedEventArgs,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';
import { renderCustomDiv } from '.';
import ReactDOM from 'react-dom';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Regular',
        Toolbars: ['Layout', 'Export', 'SmartEdit'],
      },
    ],
    VisibleButtons: ['GridInfo'],
    CustomButtons: [
      {
        Name: 'deleteRow',
        Caption: 'Delete Row',
        ButtonStyle: {
          Variant: 'raised',
          Tone: 'accent',
        },
      },
      {
        Name: 'newRow',
        ButtonStyle: {
          Variant: 'outlined',
          Tone: 'info',
        },
        Icon: {
          height: 15,
          width: 15,
          src:
            'https://www.pngfind.com/pngs/m/170-1706847_8-skin-pack-pour-windows-xp-icc5l-description.png',
        },
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
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
    adaptableId: 'Custom Buttons Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'ToolbarVisibilityChanged',
    (toolbarVisibilityChangedEventArgs: ToolbarVisibilityChangedEventArgs) => {
      if (
        toolbarVisibilityChangedEventArgs.data[0].id.toolbar === 'Trades' &&
        toolbarVisibilityChangedEventArgs.data[0].id.visibility == 'Visible'
      ) {
        let toolbarContents: any = renderCustomDiv();

        ReactDOM.render(
          toolbarContents,
          adaptableApi.dashboardApi.getCustomToolbarContentsDiv('Trades')
        );
      }
    }
  );

  adaptableApi.eventApi.on(
    'DashboardButtonClicked',
    (dashboardButtonClickedEventArgs: DashboardButtonClickedEventArgs) => {
      if (
        dashboardButtonClickedEventArgs.data[0].id.dashboardButton.Name ==
        'deleteRow'
      ) {
        let firstRow: any = adaptableOptions.vendorGrid.api.getDisplayedRowAtIndex(
          0
        );
        if (firstRow && firstRow.data) {
          adaptableApi.gridApi.deleteGridData([firstRow.data]);
        }
      }

      if (
        dashboardButtonClickedEventArgs.data[0].id.dashboardButton.Name ==
        'newRow'
      ) {
        alert('you clicked the "newRow" (plus icon) button');
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
