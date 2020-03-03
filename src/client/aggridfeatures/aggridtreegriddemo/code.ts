import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default (rowData: any[]) => {
  // lets create the ColumnDefs inline as they are unique to this demo
  const columnDefs: ColDef[] = [
    // we're using the auto group column by default!
    {
      field: 'cabinetId',
      filter: true,
      sortable: true,
      cellClass: 'number-cell',
    },
    { field: 'title', filter: true, sortable: true, enableRowGroup: true },
    { field: 'area', filter: true, sortable: true },
    {
      field: 'salary',
      editable: true,
      sortable: true,
      cellClass: 'number-cell',
    },
    {
      field: 'staff',
      editable: true,
      sortable: true,
      aggFunc: 'sum',
      cellClass: 'number-cell',
    },
    {
      field: 'budget',
      editable: true,
      sortable: true,
      aggFunc: 'sum',
      cellClass: 'number-cell',
    },
    { field: 'privyCounsellor', editable: true, sortable: true },
    { field: 'memberOfCommons', editable: true, sortable: true },
    { field: 'memberOfLords', editable: true, sortable: true },
    { field: 'dateAppointed', editable: true, sortable: true },
  ];

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    treeData: true, // enable Tree Data mode
    animateRows: true,
    groupDefaultExpanded: -1, // expand all groups by default
    getDataPath: function(data) {
      return data.government;
    },
    autoGroupColumnDef: {
      headerName: 'HM Government',
      cellRendererParams: {
        suppressCount: true,
      },
    },
    enableRangeSelection: true,
    floatingFilter: true,
    suppressColumnVirtualisation: false,
    suppressMenuHide: true,
    sideBar: true,
    rowSelection: 'multiple',
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'cabinetId',
    userName: 'Demo User',
    adaptableId: 'Tree View Demo',
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
