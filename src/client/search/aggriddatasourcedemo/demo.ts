import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableOptions,
  SearchChangedEventArgs,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import {
  SearchChangedInfo,
  AdaptableSearchState,
} from '@adaptabletools/adaptable/src/Api/Events/SearchChanged';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  //  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getTradeSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, null);
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Data Source Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'SearchChanged',
    (searchChangedArgs: SearchChangedEventArgs) => {
      listenToSearchChange(adaptableApi, helperAgGrid, searchChangedArgs);
    }
  );

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };

  function listenToSearchChange(
    adaptableApi: AdaptableApi,
    helperAgGrid: HelperAgGrid,
    searchChangedArgs: SearchChangedEventArgs
  ) {
    let searchChangedInfo: SearchChangedInfo = searchChangedArgs.data[0].id;
    if (searchChangedInfo.searchChangedTrigger == 'DataSource') {
      console.log(searchChangedArgs);
      let searchState: AdaptableSearchState =
        searchChangedArgs.data[0].id.AdaptableSearchState;
      if (searchState.dataSource != null) {
        switch (searchState.dataSource.Name) {
          case 'Euro Trades':
            let euroTrades = helperAgGrid.getEuroTrades(500);

            adaptableApi.gridApi.setGridData(euroTrades);
            break;

          case 'Dollar Trades':
            let dollarTrades = helperAgGrid.getDollarTrades(200);

            adaptableApi.gridApi.setGridData(dollarTrades);
            break;

          case 'GBP Trades':
            let sterlingTrades = helperAgGrid.getGBPTrades(12);
            adaptableApi.gridApi.setGridData(sterlingTrades);
            break;

          case '2019 Actiivty':
            let thisYearTrades = helperAgGrid.getThisYearTrades(300);
            adaptableApi.gridApi.setGridData(thisYearTrades);
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
