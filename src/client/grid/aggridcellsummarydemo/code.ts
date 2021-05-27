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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['CellSummary'],
      },
    ],
  },
  CellSummary: {
    CellSummaryOperationDefinitions: [
      {
        OperationName: 'Oldest',
        OperationFunction: 'OldestOperationFunction',
      },
    ],
    SummaryOperation: 'Min',
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
    adaptableId: 'Cell Summary Demo',
    generalOptions: {
      cellSummaryOperations: [
        {
          operationName: 'Five Biggest',
          operationFunction: operationParam => {
            let dateValues: Date[] = [];
            operationParam.selectedCellInfo.columns
              .filter(c => c.DataType === 'Date')
              .forEach(dc => {
                let gridCells = operationParam.selectedCellInfo.gridCells
                  .filter(gc => gc.columnId == dc.ColumnId)
                  .map(gc => gc.rawValue);
                dateValues.push(...gridCells);
              });
            if (dateValues.length > 0) {
              const sortedDates = dateValues.sort((a, b) => {
                return new Date(a).getTime() - new Date(b).getTime();
              });
              return new Date(sortedDates[0]).toLocaleDateString();
            }
          },
        },
      ],
    },

    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
