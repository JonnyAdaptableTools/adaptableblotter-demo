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
  AccessLevel,
  AdaptableModule,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Layout', 'Filter'],
      },
    ],
  },
  Application: {
    ApplicationDataEntries: [
      {
        Key: 'Role',
        Value: 'Basic User',
      },
    ],
  },

  Layout: {
    CurrentLayout: 'Orders View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'OrderDate',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'Employee',
        ],
        ColumnSorts: [],
        Name: 'Orders View',
      },
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
        ColumnSorts: [
          {
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
        ],
        Name: 'Shipping View',
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
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Application Data Entries Demo',
    entitlementOptions: {
      moduleEntitlements: (
        module: AdaptableModule,
        userName: string,
        adaptableId: string
      ) => {
        return getMockPermissionServerResult(module);
      },
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};

function getMockPermissionServerResult(module: AdaptableModule): AccessLevel {
  let role: AccessLevel = 'ReadOnly';
  switch (module) {
    case 'Layout':
      let dataEntry = adaptableApi?.applicationApi.getApplicationDataEntryByKey(
        'Role'
      )?.Value;

      if (dataEntry == 'Admin' || dataEntry == 'Support') {
        role = 'Full';
      }
  }

  return role;
}
