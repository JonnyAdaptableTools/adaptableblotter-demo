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
    PermittedValuesColumns: [
      {
        ColumnId: 'ContactName',
        PermittedValues: [
          'Elizabeth Lincoln',
          'Mario Pontes',
          'Maria Larsson',
          'Roland Mendel',
          'Catherine Dewey',
          'Carlos Hernández',
          'Elizabeth Lincoln',
          'Art Braunschweiger',
          'Daniel Tonini',
          'Carine Schmitt',
          'Martín Sommer',
          'Pedro Afonso',
        ],
      },
      {
        ColumnId: 'Employee',
        PermittedValues: ['Janet Leverling', 'Robert King', 'Summer Intern'],
      },
    ],
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
    adaptableId: 'Permitted Values Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
