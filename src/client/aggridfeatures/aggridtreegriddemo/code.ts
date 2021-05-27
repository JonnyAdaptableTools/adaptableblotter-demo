import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  PredicateDefHandlerParams,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (rowData: any[]) => {
  // lets create the ColumnDefs inline as they are unique to this demo
  const columnDefs: ColDef[] = [
    // here we are using the auto group column by default
    // alternatively you can use Custom Column Group: see https://www.ag-grid.com/javascript-grid-tree-data/#configuring-a-group-column
    {
      field: 'cabinetId',
      filter: true,
      sortable: true,
      cellClass: 'number-cell',
    },
    { field: 'title', filter: true, sortable: true, enableRowGroup: true }, // enableRowGroup will be ignored
    { field: 'portfolio', filter: true, sortable: true },
    {
      field: 'salary',
      editable: true,
      sortable: true,
      filter: true,
      cellClass: 'number-cell',
    },
    {
      field: 'staff',
      aggFunc: 'sum',
      filter: true,
      cellClass: 'number-cell',
    },
    {
      field: 'budget',
      aggFunc: 'sum',
      filter: true,
      cellClass: 'number-cell',
    },
    {
      field: 'dateAppointed',
      sortable: true,
      filter: true,
      type: 'abColDefDate',
    },
    { field: 'privyCounsellor', editable: true, sortable: true },
  ];

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    treeData: true, // important as it will enable Tree Data mode
    animateRows: true,
    groupDefaultExpanded: -1, // expand all groups by default
    getDataPath: function(data) {
      return data.government;
    },
    autoGroupColumnDef: {
      headerName: 'HM Government',
      cellRendererParams: {
        //  suppressCount: true,  // uncomment this line if you dont want to see the number of sub-rows in each top row
      },
    },
    enableRangeSelection: true,
    suppressColumnVirtualisation: false,
    suppressMenuHide: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'cabinetId',
    userName: 'Demo User',
    adaptableId: 'Tree View Demo',
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    customPredicateDefs: [
      {
        id: 'appointed13Feb2020',
        label: 'Appointed Reshuffle',
        columnScope: {
          ColumnIds: ['dateAppointed'],
        },
        functionScope: ['filter', 'alert', 'conditionalstyle'],
        handler(params: PredicateDefHandlerParams) {
          return params.value === '13 February 2020';
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
