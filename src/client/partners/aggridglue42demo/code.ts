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
import glue42 from '@adaptabletools/adaptable-plugin-glue42';
import { Glue42Api } from '@adaptabletools/adaptable/src/Api/Glue42Api';
import glue42Desktop from '@glue42/desktop';
import glue42office from '@glue42/office';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['CellSummary', 'Export'],
      },
    ],
  },
  Export: {
    Reports: [
      {
        Name: 'Euro Trades',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Currency',
              ColumnDisplayValues: ['EUR'],
            },
          ],
        },
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
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Glue42 Demo',

    plugins: [
      glue42({
        glue: glue42Desktop, // this is the glue object
        glue4Office: glue42office, // this is the Glue4Office object
      }),
    ],

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
