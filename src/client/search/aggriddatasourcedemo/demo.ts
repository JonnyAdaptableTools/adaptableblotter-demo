import * as Helper from '../../../Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  SearchChangedEventArgs,
} from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';
import { SearchChangedInfo } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/SearchChanged/SearchChangedInfo';
import { BlotterSearchState } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/SearchChanged/BlotterSearchState';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  //  let rowData = JSON.parse(JSON.stringify(json));
  // Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getTradeSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, null);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Data Source Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  let adaptableblotter = new AdaptableBlotter(blotterOptions);

  adaptableblotter.api.eventApi
    .onSearchChanged()
    .Subscribe((sender, searchChangedArgs) =>
      listenToSearchChange(adaptableblotter, helperAgGrid, searchChangedArgs)
    );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function listenToSearchChange(
    blotter: AdaptableBlotter,
    helperAgGrid: HelperAgGrid,
    searchChangedArgs: SearchChangedEventArgs
  ) {
    let searchChangedInfo: SearchChangedInfo = searchChangedArgs.data[0].id;
    if (searchChangedInfo.searchChangedTrigger == 'DataSource') {
      console.log(searchChangedArgs);
      let searchState: BlotterSearchState =
        searchChangedArgs.data[0].id.blotterSearchState;
      if (searchState.dataSource != null) {
        switch (searchState.dataSource.Name) {
          case 'Euro Trades':
            let euroTrades = helperAgGrid.getEuroTrades(500);
            blotter.api.gridApi.setGridData(euroTrades);
            break;

          case 'Dollar Trades':
            let dollarTrades = helperAgGrid.getDollarTrades(200);
            blotter.api.gridApi.setGridData(dollarTrades);
            break;

          case 'GBP Trades':
            let sterlingTrades = helperAgGrid.getGBPTrades(12);
            blotter.api.gridApi.setGridData(sterlingTrades);
            break;

          case '2019 Actiivty':
            let thisYearTrades = helperAgGrid.getThisYearTrades(300);
            blotter.api.gridApi.setGridData(thisYearTrades);
            break;
        }
      }
    }
  }
};
