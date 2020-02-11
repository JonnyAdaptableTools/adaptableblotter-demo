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
  NamedFilter: {
    NamedFilters: [
      {
        Name: 'High',
        Scope: {
          ColumnIds: ['OrderId'],
        },
        FilterPredicate: (_record, _columnId) => {
          let invoiced: number = _record.data.InvoicedCost;
          let itemCount: number = _record.data.ItemCount;
          return invoiced > 1000 && itemCount > 10 ? true : false;
        },
      },
      {
        Name: 'New Starter',
        Scope: {
          ColumnIds: ['Employee'],
        },
        FilterPredicate: (_record, _columnId, cellValue) => {
          return (
            cellValue == 'Robert King' ||
            cellValue == 'Laura Callahan' ||
            cellValue == 'Andrew Fuller'
          );
        },
      },
      {
        Name: 'Post Takeover',
        Scope: {
          DataType: 'Date',
        },
        FilterPredicate: (_record, _columnId, cellValue) => {
          let dateToTest = cellValue as Date;
          let takeOverDate = new Date('2017-03-21');
          return dateToTest > takeOverDate;
        },
      },
    ],
  },
  ColumnFilter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Filter: {
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['New Starter'],
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
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
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Named Filters Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
