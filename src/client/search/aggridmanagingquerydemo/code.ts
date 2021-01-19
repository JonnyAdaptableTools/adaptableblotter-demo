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
import { omit } from 'lodash';
// Make sure to import this object as it will be referenced in expressionFunctions
import { AdaptableExpressionFunctions } from '@adaptabletools/adaptable/agGrid';
var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Query: {
    CurrentQuery:
      '([ShipCountry] IN ("UK", "USA") AND ENDS_WITH([ShipVia],"s"))',
    QueryableColumns: ['ShipCountry', 'ShipVia', 'Employee', 'ItemCount'],
  },

  Layout: {
    CurrentLayout: 'QueryLayout',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'CustomerReference',
          'ContactName',
          'ShipCountry',
          'ChangeLastOrder',
          'ShipVia',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Employee',
          'CompanyName',
        ],
        Name: 'QueryLayout',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['Query'],
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
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Managing Query Demo',
    queryOptions: {
      expressionFunctions: {
        ...omit(AdaptableExpressionFunctions, [
          'COALESCE',
          'DIFF_YEARS',
          'IS_BLANK',
        ]),
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
