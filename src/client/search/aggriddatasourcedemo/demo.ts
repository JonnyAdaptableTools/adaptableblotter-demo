import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  SearchChangedEventArgs,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import {
  SearchChangedInfo,
  BlotterSearchState,
} from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/SearchChanged';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  //  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getTradeSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, null);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Data Source Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  blotterApi.eventApi.on(
    'SearchChanged',
    (searchChangedArgs: SearchChangedEventArgs) => {
      listenToSearchChange(blotterApi, helperAgGrid, searchChangedArgs);
    }
  );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function listenToSearchChange(
    blotterApi: BlotterApi,
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

            blotterApi.gridApi.setGridData(euroTrades);
            break;

          case 'Dollar Trades':
            let dollarTrades = helperAgGrid.getDollarTrades(200);

            blotterApi.gridApi.setGridData(dollarTrades);
            break;

          case 'GBP Trades':
            let sterlingTrades = helperAgGrid.getGBPTrades(12);
            blotterApi.gridApi.setGridData(sterlingTrades);
            break;

          case '2019 Actiivty':
            let thisYearTrades = helperAgGrid.getThisYearTrades(300);
            blotterApi.gridApi.setGridData(thisYearTrades);
            break;
        }
      }
    }
  }
};

/*
 DataSourceParams: [
          {
            Name: 'Hello',
            DataType: 'String',
          },
          {
            Name: 'Age',
            DataType: 'Number',
          },
        ],
        */
