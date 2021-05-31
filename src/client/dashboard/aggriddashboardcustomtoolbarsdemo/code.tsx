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
  DashboardChangedInfo,
  AdaptableButton,
  DashboardButtonContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';
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
        CustomToolbarButtonLabels: ['Make Trade'],
      },
      // Show no Title and no Configure Button
      {
        Name: 'Deals',
        CustomToolbarButtonLabels: ['New Deal'],
      },
      // Show Configure Button but no Title
      // Note that we have also added an Icon to the button
      {
        Name: 'Orders',
        Title: 'Orders',
        ShowConfigureButton: true,
        CustomToolbarButtonLabels: ['Create Order'],
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
    adaptableId: 'Custom Toolbars Demo',
    dashboardOptions: {
      customToolbarButtons: [
        {
          label: 'Make Trade',
          buttonStyle: {
            variant: 'raised',
            tone: 'accent',
          },
          onClick: (
            button: AdaptableButton,
            context: DashboardButtonContext
          ) => {
            alert('you clicked: ' + button.label);
          },
        },
        {
          label: 'New Deal',

          buttonStyle: {
            variant: 'text',
            tone: 'success',
          },
          onClick: (
            button: AdaptableButton,
            context: DashboardButtonContext
          ) => {
            alert('you clicked: ' + button.label);
          },
        },
        {
          label: 'Create Order',
          buttonStyle: {
            variant: 'outlined',
            tone: 'info',
          },
          icon: {
            height: 20,
            width: 25,
            src:
              'https://www.pngfind.com/pngs/m/278-2781613_blue-plus-icon-add-new-button-png-transparent.png',
          },
          onClick: (
            button: AdaptableButton,
            context: DashboardButtonContext
          ) => {
            alert('you clicked: ' + button.label);
          },
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'DashboardChanged',
    (eventInfo: DashboardChangedInfo) => {
      const dashboardApi = adaptableApi.dashboardApi;
      const result:
        | 'hidden'
        | 'visible'
        | 'none' = dashboardApi.hasCustomToolbarChanged(eventInfo, 'Trades');

      if (result == 'visible') {
        let toolbarContents: any = (
          <div style={{ display: 'flex' }}>
            <button
              className="ab-SimpleButton ab-SimpleButton--variant-outlined"
              onClick={() => {
                alert('clicked rendered button');
              }}
              style={{ marginRight: '3px' }}
            >
              Rendered Button
            </button>
            <select className="ab-Dropdown" style={{ marginRight: '3px' }}>
              <option>Rendered Dropdown 1</option>
              <option>Rendered Dropdown 2</option>
              <option>Rendered Dropdown 3</option>
            </select>
          </div>
        );

        ReactDOM.render(
          toolbarContents,
          adaptableApi.dashboardApi.getCustomToolbarContentsDiv('Trades')
        );
      }

      if (result == 'hidden') {
        console.log('custom toolbar has disappeared');
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
