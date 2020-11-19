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

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  UserInterface: {
    PermittedValuesItems: [
      {
        Scope: {
          ColumnIds: ['ContactName'],
        },
        PermittedValues: [
          'Elizabeth Lincoln',
          'Mario Pontes',
          'Maria Larsson',
          'Roland Mendel',
          'Catherine Dewey',
        ],
      },
    ],
    EditLookUpItems: [
      {
        Scope: {
          ColumnIds: ['CustomerReference'],
        },
        LookUpValues: [
          'SANTG',
          'LINOD',
          'ROMEY',
          'FRANK',
          'ALFKI',
          'REGGC',
          'GODOS',
        ],
      },
      {
        Scope: {
          ColumnIds: ['ContactName'],
        },
      },
      {
        Scope: {
          ColumnIds: ['Employee'],
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
    singleClickEdit: true,
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
    adaptableId: 'Edit Lookup Columns Demo',
    queryOptions: {
      ignoreCaseInQueries: false,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
