import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  SelectionChangedInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let autoGroupColumnDef: ColDef = {
    headerName: 'Employee',
    field: 'employee',
    width: 200,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };

  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    rowSelection: 'multiple',
    autoGroupColumnDef: autoGroupColumnDef,
    suppressRowClickSelection: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Row Selection Demo',
    entitlementOptions: {
      moduleEntitlements: [
        {
          adaptableModule: 'Layout',
          accessLevel: 'Hidden',
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'SelectionChanged',
    (selectionChangedInfo: SelectionChangedInfo) => {
      console.log('Row Info Selection', selectionChangedInfo.selectedRowInfo);
      console.log('Cell Info Selection', selectionChangedInfo.selectedCellInfo);
    }
  );

  return { adaptableOptions, adaptableApi };
};
