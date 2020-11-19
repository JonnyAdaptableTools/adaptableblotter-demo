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
        Name: 'Custom',
        Toolbars: ['Layout', 'Trades', 'Deals', 'Orders'],
      },
      {
        Name: 'Regular',
        Toolbars: ['Layout', 'Export', 'SmartEdit'],
      },
    ],
    CustomToolbars: [
      // Show a Title and Configure Button
      {
        Name: 'Trades',
        Title: 'Trades',
        ShowConfigureButton: true,
        ToolbarButtons: [
          {
            Name: 'tradesButton1',
            Caption: 'Make Trade',
            ButtonStyle: {
              Variant: 'raised',
              Tone: 'accent',
            },
          },
        ],
      },
      // Show no Title and no Configure Button
      {
        Name: 'Deals',
        ToolbarButtons: [
          {
            Name: 'dealsButton1',
            Caption: 'New Deal',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'success',
            },
          },
        ],
      },
      // Show Configure Button but no Title
      // Note that we have also added an Icon to the button
      {
        Name: 'Orders',
        Caption: 'Orders',
        ShowConfigureButton: true,
        ToolbarButtons: [
          {
            Name: 'ordersButton1',
            Caption: 'Create Order',
            ButtonStyle: {
              Variant: 'outlined',
              Tone: 'info',
            },
            Icon: {
              height: 20,
              width: 25,
              src:
                'https://www.pngfind.com/pngs/m/278-2781613_blue-plus-icon-add-new-button-png-transparent.png',
            },
          },
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
    adaptableId: 'Custom Toolbars Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

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
    'ToolbarButtonClicked',
    (toolbarButtonClickedEventArgs: ToolbarButtonClickedEventArgs) => {
      alert(
        'you clicked: name: ' +
          toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Name +
          ';caption: ' +
          toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Caption
      );
    }
  );

  return { adaptableOptions, adaptableApi };
};
