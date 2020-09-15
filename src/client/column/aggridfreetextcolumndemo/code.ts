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
  AuditLogEventArgs,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { AuditLogEntry } from '@adaptabletools/adaptable/src/Utilities/Interface/AuditLogEntry';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['FreeTextColumn'],
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
    ],
  },
  Layout: {
    CurrentLayout: 'Comments View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'ItemCount',
          'Comments',
          'OrderCost',
          'PackageCost',
          'OrderDate',
          'CompanyName',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
        ],
        ColumnSorts: [],
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
    adaptableId: 'Free Text Column Demo',
    auditOptions: {
      auditFunctionEvents: {
        auditAsEvent: true,
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.auditEventApi.on(
    'AuditFunctionApplied',
    (auditLogEventArgs: AuditLogEventArgs) => {
      let auditLogEntry: AuditLogEntry = auditLogEventArgs.data[0].id;
      if (
        auditLogEntry.function_applied_details?.action ==
        'FREE_TEXT_COLUMN_ADD_EDIT_STORED_VALUE'
      )
        console.log(auditLogEntry);
    }
  );

  return { adaptableOptions, adaptableApi };
};
