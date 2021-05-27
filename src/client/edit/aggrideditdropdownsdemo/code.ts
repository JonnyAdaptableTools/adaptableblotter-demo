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

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    singleClickEdit: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Edit Lookup Columns Demo',
    userInterfaceOptions: {
      editLookUpItems: [
        {
          scope: { ColumnIds: ['CustomerReference'] },
          values: [
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
          scope: { ColumnIds: ['ContactName'] },
          values: [],
        },
        {
          scope: { ColumnIds: ['Employee'] },
          values: [],
        },
      ],
      permittedValues: [
        {
          scope: {
            ColumnIds: ['ContactName'],
          },
          values: [
            'Elizabeth Lincoln',
            'Mario Pontes',
            'Maria Larsson',
            'Roland Mendel',
            'Catherine Dewey',
          ],
        },
      ],
    },
    searchOptions: {
      ignoreCaseInQueries: false,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
