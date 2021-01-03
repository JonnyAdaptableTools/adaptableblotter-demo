import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import './rowstyle.css';
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
  UserInterface: {
    RowStyles: [
      /*
      // Use this if you want to style ALL rows
      // As with all our Styles you can either use some properties or a cssClassName
      {
        Style: {
          ForeColor: 'yellow',
          BackColor: 'purple',
          FontWeight: 'Bold',
          // ClassName: 'allRowStyle', // giving a classname
        },
        RowType: 'All',
      },
      */
      {
        // For even row style we are going to reference just a class name (this css class is in the imported 'rowstyle.css')
        // the css looks like this:
        /*
        .evenRowStyle {
          background: lightyellow !important;
          color: brown;
          font-weight: normal !important;
          font-style: bold !important;
        }         
        */
        Style: {
          ClassName: 'evenRowStyle',
        },
        RowType: 'Even',
      },
      {
        // For odd rows we will create the style ourselvves
        Style: {
          ForeColor: 'lightyellow',
          BackColor: 'brown',
          FontStyle: 'Italic',
          FontWeight: 'Bold',
        },
        RowType: 'Odd',
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
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Row Style Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
