import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default (columnDefs: any[], detailColumnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,

    masterDetail: true,
    detailCellRendererParams: {
      // provide detail column defs
      detailGridOptions: {
        columnDefs: detailColumnDefs,
        columnTypes: {
          abColDefNumber: {},
          abColDefString: {},
          abColDefBoolean: {},
          abColDefDate: {},
          abColDefObject: {},
        },
      },
      // extract and supply row data for detail
      getDetailRowData: function(params: any) {
        params.successCallback(params.data.squad);
      },
    },
    isRowMaster: function(dataItem) {
      return dataItem ? dataItem.squad.length > 0 : false;
    },
    enableRangeSelection: true,
    floatingFilter: true,
    suppressColumnVirtualisation: false,
    suppressMenuHide: true,
    sideBar: undefined,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'name',
    userName: 'Demo User',
    adaptableId: 'Master Detail Demo',
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
