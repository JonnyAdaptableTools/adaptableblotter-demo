import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  ToolbarButtonClickedEventArgs,
  ToolbarVisibilityChangedEventArgs,
} from '@adaptabletools/adaptableblotter/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import ReactDOM from 'react-dom';
import { renderCustomDiv } from '.';
import { Visibility } from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/Common/Enums';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Custom Toolbars Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  blotterApi.eventApi.on(
    'ToolbarVisibilityChanged',
    (toolbarVisibilityChangedEventArgs: ToolbarVisibilityChangedEventArgs) => {
      if (
        toolbarVisibilityChangedEventArgs.data[0].id.toolbar === 'Trades' &&
        toolbarVisibilityChangedEventArgs.data[0].id.visibility ==
          Visibility.Visible
      ) {
        let toolbarContents: any = renderCustomDiv();

        ReactDOM.render(
          toolbarContents,
          blotterApi.dashboardApi.getCustomToolbarContentsDiv('Trades')
        );
      }
    }
  );

  blotterApi.eventApi.on(
    'ToolbarButtonClicked',
    (toolbarButtonClickedEventArgs: ToolbarButtonClickedEventArgs) => {
      alert(
        'name: ' +
          toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Name +
          ';caption: ' +
          toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Caption
      );
    }
  );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
