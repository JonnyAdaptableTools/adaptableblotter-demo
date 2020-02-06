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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { IServerColumnValues } from '@adaptabletools/adaptable/src/AdaptableOptions/QueryOptions';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'AdvancedSearch'],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    adaptableId: 'Server Lookups Demo',
    queryOptions: {
      getColumnValues: (columnName: string) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(getValuesForColumn(columnName)), 500);
        });
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  function getValuesForColumn(
    columnName: string
  ): IServerColumnValues | undefined {
    let vals;
    if (columnName === 'CustomerReference') {
      vals = [
        'MEREP',
        'TOMSP',
        'WARTH',
        'BLONP',
        'BERGS',
        'FOLKO',
        'PRINI',
        'LEHMS',
        'SPLIR',
        'BOTTM',
        'ERNSH',
        'HUNGO',
        'REGGC',
      ];
    } else if (columnName === 'ContactName') {
      vals = [
        'Jean Fresnière',
        'Karin Josephs',
        'Pirkko Koskitalo',
        'Frédérique Citeaux',
        'Elizabeth Brown',
        'Maria Larsson',
        'Art Braunschweiger',
        'Roland Mendel',
        'Elizabeth Lincoln',
        'Patricia McKenna',
        'Pedro Afonso',
        'Philip Cramer',
        'Maurizio Moroni',
      ];
    } else {
      return undefined; // not nice and we need to fix
    }
    return {
      DistinctCriteriaPairValue: 'DisplayValue',
      ColumnValues: vals,
    };
  }

  return { adaptableOptions, adaptableApi };
};