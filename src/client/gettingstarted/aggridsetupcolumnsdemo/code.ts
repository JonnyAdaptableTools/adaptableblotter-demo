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
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'price',
        CellAlignment: 'Right',
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            IntegerSeparator: ',',
          },
        },
      },
      {
        ColumnId: 'firstBought',
        CellAlignment: 'Center',
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'yyyyMMdd',
          },
        },
      },
    ],
  },
} as PredefinedConfig;

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
    headerName: 'Price',
    field: 'price',
    filter: true,
    editable: false,
    type: 'abColDefNumber',
  },
  {
    headerName: 'Miles To Gallon',
    field: 'milesToGallon',
    filter: true,
    editable: false,
    type: 'abColDefNumber',
    valueFormatter: (params: any) => {
      return params.value
        ? params.value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : null;
    },
  },
  {
    headerName: 'First Used',
    field: 'firstUsed',
    filter: true,
    editable: false,
    type: 'abColDefDate',
    valueFormatter: (params: any) => {
      return params.value
        ? new Intl.DateTimeFormat('en-GB').format(params.value)
        : '';
    },
  },
  {
    headerName: 'First Bought',
    field: 'firstBought',
    filter: true,
    editable: false,
    type: 'abColDefDate',
  },
  {
    headerName: 'Energy Rating',
    field: 'EnergyRating',
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
  {
    headerName: 'Efficency Rating',
    field: 'EfficencyRating',
    enableValue: true,
    editable: true,
    sortable: true,
    valueFormatter: (params: any) => {
      let text = '';
      for (var i = 0; i < params.value; i++) {
        text += '*';
      }
      return text;
    },
    type: 'abColDefNumber',
    filter: true,
    enablePivot: true,
    resizable: true,
  },
  {
    // this column does not have a field as its not typed to a single cell in the datasource
    // its not mandatory but if the colid can be provided then that would be helpful for Adaptable to do complex filtering
    headerName: 'Composite',
    editable: false,
    colId: 'composite',
    filter: true,
    enableRowGroup: true,
    valueGetter: (params: any) => {
      return params.data && params.data.make && params.data.model
        ? params.data.make + ' - ' + params.data.model
        : undefined;
    },
    type: 'abColDefString',
  },
];

const rowdata: any[] = [
  {
    make: 'Toyota',
    model: 'Celica',
    price: 35000,
    firstUsed: new Date(2017, 11, 4),
    firstBought: new Date(2017, 11, 4),
    milesToGallon: 21.345676,
    EnergyRating: 1,
    EfficencyRating: 1,
  },
  {
    make: 'Toyota',
    model: 'Yaris',
    price: 40000,
    firstUsed: new Date(2013, 1, 15),
    firstBought: new Date(2013, 1, 15),
    milesToGallon: 29.32432423,
    EnergyRating: 3,
    EfficencyRating: 3,
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    price: 28000,
    firstUsed: new Date(2017, 6, 9),
    firstBought: new Date(2017, 6, 9),
    milesToGallon: 32.9032523473287,
    EnergyRating: 4,
    EfficencyRating: 4,
  },
  {
    make: 'Ford',
    model: 'Mondeo',
    price: 32000,
    firstUsed: new Date(2009, 10, 2),
    firstBought: new Date(2009, 10, 2),
    milesToGallon: 28.247893473289,
    EnergyRating: 2,
    EfficencyRating: 2,
  },
  {
    make: 'Ford',
    model: 'Fiesta',
    price: 35000,
    firstUsed: new Date(2018, 8, 12),
    firstBought: new Date(2018, 8, 12),
    milesToGallon: 34.0001,
    EnergyRating: 5,
    EfficencyRating: 5,
  },
  {
    make: 'Ford',
    model: 'Focus',
    price: 26750,
    firstUsed: new Date(2017, 3, 3),
    firstBought: new Date(2017, 3, 3),
    milesToGallon: 31.2432432423,
    EnergyRating: 1,
    EfficencyRating: 1,
  },
  {
    make: 'Ford',
    model: 'Galaxy',
    price: 41000,
    firstUsed: new Date(2015, 4, 14),
    firstBought: new Date(2015, 4, 14),
    milesToGallon: 29.29432404,
    EnergyRating: 3,
    EfficencyRating: 3,
  },
  {
    make: 'Porsche',
    model: 'Boxter',
    price: 72500,
    firstUsed: new Date(2016, 1, 28),
    firstBought: new Date(2016, 1, 28),
    milesToGallon: 32.29580292,
    EnergyRating: 4,
    EfficencyRating: 4,
  },
  {
    make: 'Porsche',
    model: 'Mission',
    price: 81000,
    firstUsed: new Date(2008, 10, 7),
    firstBought: new Date(2008, 10, 7),
    milesToGallon: 35.7822957,
    EnergyRating: 5,
    EfficencyRating: 5,
  },
  {
    make: 'Mitsubbishi',
    model: 'Outlander',
    price: 97800,
    firstUsed: new Date(2017, 11, 14),
    firstBought: new Date(2017, 11, 14),
    milesToGallon: 19.224309,
    EnergyRating: 5,
    EfficencyRating: 5,
  },
];

export default async () => {
  const gridOptions: GridOptions = {
    columnDefs: columnSchema,
    //  rowData: rowdata,
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

  let adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    setTimeout(() => {
      // use the load data method in GridApi of AdaptableApi
      adaptableApi.gridApi.loadGridData(rowdata);
    }, 100);
  });
};

/*
The Cell Render for Rating.
We provide implementations for the init and getGui methods.
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
