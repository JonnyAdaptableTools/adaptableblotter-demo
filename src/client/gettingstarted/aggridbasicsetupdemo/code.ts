// Import Adaptable Styles
import '@adaptabletools/adaptable/index.css';

// Import ag-Grid Styles
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

// Import Adaptable object and any types we need from Adaptable/types
import Adaptable from '@adaptabletools/adaptable/agGrid';
import {
  AdaptableOptions,
  PredefinedConfig,
} from '@adaptabletools/adaptable/types';

// Import ag-grid objects from Community
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';

// Import any ag-Grid Enterprise modules we need (all community modules will have been provided)
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

// Step 1: Create any Predefined Config to ship AdapTable to meet your requirements
// Here we set a couple of Dashboard toolbars and set a System Status message
const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'SystemStatus'],
  },
  SystemStatus: {
    DefaultStatusMessage: 'All working fine',
    DefaultStatusType: 'Success',
  },
} as PredefinedConfig;

// Step 2: Create the ag-Grid Column Schema
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
    editable: true,
    type: 'abColDefNumber',
  },
];

// Step 3: Get your data (in the real world this will be dynamically sourced)
const rowdada: any[] = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Mitsubbishi', model: 'Outlander', price: 97800 },
];

// Step 4: Create ag-Grid GridOptions object - using the Column Schema and Row Data previously created
export default () => {
  let gridOptions: GridOptions = {
    columnDefs: columnSchema,
    rowData: rowdada,
    enableRangeSelection: true,
    suppressAggFuncInHeader: true,
    suppressMenuHide: true,
    floatingFilter: true,
    columnTypes: {
      // not strictly required but useful for column data type identification
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  // Step 5: Create an AdaptableOptions object which defines how AdapTable should work
  // Pass in the GridOptions object as the vendorGrid property (and add any Enterprise modules)
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Basic Setup Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };

  // Step 6: Instantiate AdapTable using the Static Contstructor passing in the AdaptableOptions object
  // Note that the constructor returns the AdaptableApi object which gives run time access to AdapTable functions
  // Pass in the GridOptions object as the vendorGrid property (and add any Enterprise modules)
  const adaptableApi = Adaptable.init(adaptableOptions);

  // Step 7 (optional): Listen to the AdaptableReady event to do anything required at startup
  // Here we are using the AdaptableApi to run a quick search
  adaptableApi.eventApi.on('AdaptableReady', () => {
    adaptableApi.quickSearchApi.applyQuickSearch('o*');
  });
};
