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
  AdaptableStateChangedInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    ModuleButtons: ['FreeTextColumn'],
  },
  FreeTextColumn: {
    FreeTextColumns: [
      {
        ColumnId: 'Comments',
        FriendlyName: 'Comments',
        DefaultValue: '',
        FreeTextStoredValues: [
          { PrimaryKey: 11137, FreeText: 'Dispatch asap' },
          { PrimaryKey: 11133, FreeText: 'Angry customer' },
          { PrimaryKey: 11128, FreeText: 'Important order' },
        ],
      },
      {
        ColumnId: 'OrderCode',
        FriendlyName: 'Order Code',
        DataType: 'Number',
        DefaultValue: 123,
      },
      {
        ColumnId: 'LastSpoken',
        FriendlyName: 'Last Spoken',
        DataType: 'Date',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Comments View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'Comments',
          'LastSpoken',
          'OrderCode',
          'Freight',
          'ShipName',
          'ShipCountry',
        ],
        ColumnSorts: [
          {
            ColumnId: 'OrderId',
            SortOrder: 'Desc',
          },
        ],
        Name: 'Comments View',
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
    adaptableId: 'Free Text Column Demo',

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'AdaptableStateChanged',
    (info: AdaptableStateChangedInfo) => {
      if (info.actionName == 'FREE_TEXT_COLUMN_ADD_EDIT_STORED_VALUE')
        console.log(info);
    }
  );

  return { adaptableOptions, adaptableApi };
};
