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
import masterDetailAgGridPlugin from '@adaptabletools/adaptable-plugin-master-detail-aggrid';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default async (
  columnDefs: any[],
  detailColumnDefs: any[],
  rowData: any[]
) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    masterDetail: true,
    detailCellRendererParams: {
      // provide detail column defs
      detailGridOptions: {
        columnDefs: detailColumnDefs,
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
    suppressColumnVirtualisation: false,
    suppressMenuHide: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'name',
    userName: 'Demo User',
    adaptableId: 'Master Detail Demo - Master Grid',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [
      masterDetailAgGridPlugin({
        detailAdaptableOptions: {
          primaryKey: 'name',
          adaptableId: 'Master Detail Demo - Detail Grid',
          predefinedConfig: {
            ConditionalStyle: {
              ConditionalStyles: [
                {
                  Style: {
                    BackColor: 'yellow',
                  },
                  Expression: '[age] > 30',
                  Scope: {
                    All: true,
                  },
                },
              ],
            },
          },
        },
      }),
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
