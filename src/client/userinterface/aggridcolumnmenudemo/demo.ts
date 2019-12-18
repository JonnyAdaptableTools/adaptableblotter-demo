import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  PredefinedConfig,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import {
  ContextMenuInfo,
  AdaptableBlotterMenuItem,
} from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/Common/Menu';

var blotterApi: BlotterApi;

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Column Menu Demo',
    vendorGrid: gridOptions,
    predefinedConfig: demoConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  blotterApi = AdaptableBlotter.init(blotterOptions);

  return {
    demoConfig,
    blotterOptions: blotterOptionsClone,
  };
};

let demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'SystemStatus'],
  },
  SystemStatus: {
    ShowAlert: false,
  },
  UserInterface: {
    ColumnMenuItems: [
      {
        Label: 'Column Menu 1',
        UserMenuItemClickedFunction: (contextMenuInfo: ContextMenuInfo) => {
          console.log(contextMenuInfo.column.FriendlyName);
        },
        Icon:
          '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/gb.png"/>',
      },
      {
        Label: 'Column Menu 2',
      },
      {
        Label: 'Column Menu 3',
        SubMenuItems: [
          {
            Label: 'Column Sub Menu 1',
          },
          {
            Label: 'Column Sub Menu 2',
          },
        ],
      },
    ],
  },
} as PredefinedConfig;
