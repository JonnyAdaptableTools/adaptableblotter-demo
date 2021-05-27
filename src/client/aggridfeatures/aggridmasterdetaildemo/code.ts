import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  SearchChangedEventArgs,
  SearchChangedInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import masterDetailAgGridPlugin from '@adaptabletools/adaptable-plugin-master-detail-aggrid';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;
var currentquery: string | undefined = '';

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
    primaryKey: 'team',
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
                  Rule: { BooleanExpression: '[age] > 30' },
                  Scope: {
                    All: true,
                  },
                },
              ],
            },
          },
        },
        onDetailInit(api: AdaptableApi) {
          if (currentquery) {
            // note: we have NO way currently of testing if a Query is valid through the api
            //  api.queryApi.setCurrentQuery(currentquery);
          } else {
            //   api.queryApi.clearCurrentQuery();
          }
        },
      }),
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'SearchChanged',
    (searchArgs: SearchChangedEventArgs) => {
      const searchChangedInfo: SearchChangedInfo = adaptableApi.eventApi.getSearchChangedInfoFromEventArgs(
        searchArgs
      );
      if (searchChangedInfo.searchChangedTrigger == 'CurrentQuery') {
        currentquery = searchChangedInfo.adaptableSearchState.currentQuery;
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
