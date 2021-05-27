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
  AdaptableColumn,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Permitted Values Demo',
    userInterfaceOptions: {
      permittedValues: [
        {
          // For Contact Name column we return a hard coded list that will always be used
          scope: {
            ColumnIds: ['ContactName'],
          },
          values: [
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
          // For Employee column we return a hard coded list that will always be used including some values NOT in our data set
          // This is useful if you want to run server searching
          scope: {
            ColumnIds: ['Employee'],
          },
          values: ['Janet Leverling', 'Robert King', 'Summer Intern'],
        },
        {
          // For Order Date column we return an array with a single empty value - this means that NO values will be used
          scope: {
            ColumnIds: ['OrderDate'],
          },
          values: [''],
        },
        {
          // For Item Count column we return an array with a single empty value - this means that NO values will be used
          scope: {
            ColumnIds: ['ItemCount'],
          },
          values: [''],
        },
        {
          // For Customer Reference column we use a function - this allows us to get data from elsewhere if required and do external lookups
          scope: {
            ColumnIds: ['CustomerReference'],
          },
          values: (column: AdaptableColumn) => {
            return ['PRINI', 'SPLIR', 'BOTTM', 'ERNSH', 'HUNGO', 'REGGC'];
          },
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
