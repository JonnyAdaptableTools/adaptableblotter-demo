/*  
Note: below is the JavaScript code required to instantiate AdapTable.
It assumes an HTML page with 2 <div> elements as follows:
<body>    
    ....    
    <!-- div for adaptable - always name this 'adaptable'-->    
    <div id="adaptable"></div>    

    <!-- div for underlying vendor grid - always name this 'grid' -->    
    <div id="grid" class="ag-balham"></div>        
    ....
</body>
*/

// Import Adaptable Styles
// You will always need to import 'index.css'; import 'dark.css' for our dark theme (these are the 2 shipped themes AdapTable provides)
// If you create a custom theme then add the .css file here
import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

// Import ag-Grid Styles you require - in this case the Balham light and dark themes (our defaults)
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';

// Import the Adaptable object from the appropriate vendorGrid sub folder - in this case ag-Grid
import Adaptable from '@adaptabletools/adaptable/agGrid';

//Import any Adaptable types required
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';

// Import ag-grid objects from Community - this is always required by AdapTable and must be installed
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';

// Import any ag-Grid Enterprise modules you need (v.22 of ag-Grid introduced modularisation)
// You can add as many individual Enterprise modules as you wish, or (as in this case) import AllEnterpriseModules
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

// Import any Adaptable plugins that we want to use - in this case 'ChartsPlugin'
import ChartsPlugin from '@adaptabletools/adaptable-plugin-charts';

// Step 1: Create any Predefined Config to ship AdapTable to meet your requirements. In this example we do 3 things:
// a: Set the Toolbars to be QuickSearch, SystemStatus and Theme
// b: Set a default System Status message which will display when not overriden by a newer one
// c: Set the Adaptable theme to be 'Dark'
// Here we select a couple of Dashboard toolbars and set a System Status message
const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'SystemStatus', 'Theme'],
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
  { make: 'Toyota', model: 'Yaris', price: 40000 },
  { make: 'Toyota', model: 'Corolla', price: 28000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Ford', model: 'Fiesta', price: 35000 },
  { make: 'Ford', model: 'Focus', price: 26750 },
  { make: 'Ford', model: 'Galaxy', price: 41000 },
  { make: 'Porsche', model: 'Boxter', price: 72500 },
  { make: 'Porsche', model: 'Mission', price: 81000 },
  { make: 'Mitsubbishi', model: 'Outlander', price: 97800 },
];

// Step 4: Create ag-Grid GridOptions object - using the Column Schema and Row Data previously created
// Note: We don't instantiate the ag-Grid here - AdapTable will do that later internally and wire everything up
// Instead, we just create the GridOptions property and later set it as vendorGrid property in AdaptableOptions
export default () => {
  const gridOptions: GridOptions = {
    columnDefs: columnSchema,
    rowData: rowdada,
    enableRangeSelection: true,
    sideBar: true,
    suppressAggFuncInHeader: true,
    suppressMenuHide: true,
    floatingFilter: true,
    columnTypes: {
      // not strictly required but very useful for column data type identification
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  // Step 5: Create an AdaptableOptions object which defines how AdapTable should work and contains all it needs
  // We only need to add values for non-mandatory properties where you are unhappy with the default options
  // Full list of options and defaults at: https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions
  // In this case we have just set the showAdaptableToolPanel to true in UserInterfaceOptions
  // 2 mandatory properties are 'primaryKey' (to allow us to identify each cell) and 'adaptableId' (a unique name for this instance)
  // Another is 'vendorGrid' (a reference to the underlying grid  - in this case the gridOptions we created above which we pass in)
  // Note that we attach any Enterprise modules to the 'modules' property of vendorGrid
  // Another important property is predefinedConfig where we attach the 'demoConfig' we created above
  // Finally add any plugins required by adding them to the 'plugins' property - in this example the 'ChartsPlugin'
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Basic Setup Demo',
    userInterfaceOptions: {
      showAdaptableToolPanel: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [ChartsPlugin()],
  };

  // Step 6: Instantiate AdapTable using the Static Contstructor passing in the AdaptableOptions object
  // Note that the constructor returns the AdaptableApi object which gives run time access to AdapTable functions
  // Pass in the GridOptions object as the vendorGrid property (and add any Enterprise modules)
  const adaptableApi: AdaptableApi = Adaptable.init(adaptableOptions);

  // Step 7 (optional): Listen to the AdaptableReady event to do anything required at startup
  // Here we are using the AdaptableApi to run a quick search via code
  adaptableApi.eventApi.on('AdaptableReady', () => {
    adaptableApi.quickSearchApi.applyQuickSearch('o*');
  });
};
