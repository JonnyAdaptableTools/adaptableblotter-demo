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
  /*
  NamedFilter: {
    NamedFilters: [
      {
        Name: 'High',
        Scope: {
          ColumnIds: ['OrderId'],
        },
        FilterPredicate: 'High',
      },
      {
        Name: 'New Starter',
        Scope: {
          ColumnIds: ['Employee'],
        },
        FilterPredicate: 'NewStarter',
      },
      {
        Name: 'Post Takeover',
        Scope: {
          DataType: 'Date',
        },
        FilterPredicate: 'PostTakeover',
      },
      {
        Name: 'After Work',
        Scope: {
          ColumnIds: ['LastUpdatedTime'],
        },
        FilterPredicate: 'AfterWork',
      },
    ],
  },
  */
  ColumnFilter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Predicate: { PredicateId: 'New Starter' }, // TODO: this is a custom predicate and we need to create it!!!!
      },
    ],
  },
  UserInterface: {
    PermittedValuesColumns: [
      {
        // For LastUpdatedTime column we return an array with a single empty value as it makes no sense to see each time value
        ColumnId: 'LastUpdatedTime',
        PermittedValues: [''],
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
    adaptableId: 'Custom Filters Demo',
    /*
    userFunctions: [
      {
        type: 'NamedFilterPredicate',
        name: 'High',
        handler(_record, _columnId, cellValue) {
          let invoiced: number = _record.data.InvoicedCost;
          let itemCount: number = _record.data.ItemCount;
          return invoiced > 1000 && itemCount > 10 ? true : false;
        },
      },
      {
        type: 'NamedFilterPredicate',
        name: 'NewStarter',
        handler(_record, _columnId, cellValue) {
          return (
            cellValue == 'Robert King' ||
            cellValue == 'Laura Callahan' ||
            cellValue == 'Andrew Fuller'
          );
        },
      },
      {
        type: 'NamedFilterPredicate',
        name: 'PostTakeover',
        handler(_record, _columnId, cellValue) {
          let takeOverDate = new Date('2019-09-21');
          return (cellValue as Date) > takeOverDate;
        },
      },
      {
        type: 'NamedFilterPredicate',
        name: 'AfterWork',
        handler(_record, _columnId, cellValue) {
          return (cellValue as Date).getHours() > 17;
        },
      },
    ],
    */
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
