import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';

import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Grid',
        Toolbars: ['Layout', 'ColumnFilter'],
      },
    ],
  },
} as PredefinedConfig;

// Create any formmaters required
const shortDateFormatter = (params: any) => {
  return params.value
    ? new Intl.DateTimeFormat('en-GB').format(params.value)
    : '';
};

const twoDecimalPlaceFormatter = (params: any) => {
  return params.value
    ? params.value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : null;
};

// Create columns referencing the formatters
const columnSchema: ColDef[] = [
  {
    headerName: 'Make',
    field: 'make',
    filter: true,
    editable: false,
    type: 'abColDefString',
  },
  {
    headerName: 'Model',
    field: 'model',
    filter: true,
    editable: false,
    type: 'abColDefString',
  },
  {
    headerName: 'Efficiency',
    field: 'efficiency',
    filter: true,
    editable: false,
    type: 'abColDefNumber',
    valueFormatter: twoDecimalPlaceFormatter,
  },
  {
    headerName: 'First Used',
    field: 'firstUsed',
    filter: true,
    editable: false,
    type: 'abColDefDate',
    valueFormatter: shortDateFormatter,
  },
  {
    headerName: 'Rating',
    field: 'Rating',
    enableValue: true,
    editable: true,
    sortable: true,
    //@ts-ignore
    cellRenderer: RatingRenderer,
    type: 'abColDefNumber',
    filter: true,
    enablePivot: true,
    resizable: true,
  },
];

const rowdada: any[] = [
  {
    make: 'Toyota',
    model: 'Celica',
    price: 35000,
    firstUsed: new Date(2017, 11, 4),
    efficiency: 21.345676,
    Rating: 1,
  },
  {
    make: 'Toyota',
    model: 'Yaris',
    price: 40000,
    firstUsed: new Date(2013, 1, 15),
    efficiency: 98.32432423,
    Rating: 3,
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    price: 28000,
    firstUsed: new Date(2017, 6, 9),
    efficiency: 72.9032523473287,
    Rating: 4,
  },
  {
    make: 'Ford',
    model: 'Mondeo',
    price: 32000,
    firstUsed: new Date(2009, 10, 2),
    efficiency: 78.247893473289,
    Rating: 2,
  },
  {
    make: 'Ford',
    model: 'Fiesta',
    price: 35000,
    firstUsed: new Date(2018, 8, 12),
    efficiency: 46.0001,
    Rating: 5,
  },
  {
    make: 'Ford',
    model: 'Focus',
    price: 26750,
    firstUsed: new Date(2017, 3, 3),
    efficiency: 31.2432432423,
    Rating: 1,
  },
  {
    make: 'Ford',
    model: 'Galaxy',
    price: 41000,
    firstUsed: new Date(2015, 4, 14),
    efficiency: 15.29432404,
    Rating: 3,
  },
  {
    make: 'Porsche',
    model: 'Boxter',
    price: 72500,
    firstUsed: new Date(2016, 1, 28),
    efficiency: 72.29580292,
    Rating: 4,
  },
  {
    make: 'Porsche',
    model: 'Mission',
    price: 81000,
    firstUsed: new Date(2008, 10, 7),
    efficiency: 145.7822957,
    Rating: 5,
  },
  {
    make: 'Mitsubbishi',
    model: 'Outlander',
    price: 97800,
    firstUsed: new Date(2017, 11, 14),
    efficiency: 19.224309,
    Rating: 5,
  },
];

export default () => {
  const gridOptions: GridOptions = {
    columnDefs: columnSchema,
    rowData: rowdada,
    enableRangeSelection: true,
    sideBar: true,
    suppressAggFuncInHeader: true,
    suppressMenuHide: true,
    floatingFilter: true,
    // this is not strictly required but very useful for column data type identification
    // if not used then the grid will try to work out the datatype of the column based on the initial value
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
    primaryKey: 'model',
    userName: 'Demo User',
    adaptableId: 'Setup Columns Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };

  Adaptable.init(adaptableOptions);
};

/*
The Cell Render for Rating.
We provide implementations for the init and getGuid methods.
*/
function RatingRenderer() {}
RatingRenderer.prototype.init = function(params: any): any {
  this.eGui = document.createElement('span');
  var text = '';
  for (var i = 0; i < params.value; i++) {
    text += '*';
  }
  this.eGui.innerHTML = text;
};
RatingRenderer.prototype.getGui = function(): any {
  return this.eGui;
};
