import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  AdaptableApi,
  AdaptableReadyInfo,
  AdaptableSearchState,
  ColumnFilter,
  AdaptableColumn,
  AdaptableSortState,
  ColumnSort,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { ITrade } from '../../../Helpers/Trade';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { orderBy, uniqBy } from 'lodash';
import {
  isAfter,
  isBefore,
  isFuture,
  isPast,
  isSameDay,
  isThisMonth,
  isThisQuarter,
  isThisWeek,
  isThisYear,
  isToday,
  isTomorrow,
  isYesterday,
} from 'date-fns';
var adaptableApi: AdaptableApi;

class MockServer {
  _dummyTrades: ITrade[];

  constructor() {
    // create an inital dataset with 150,000 rows (to mimic many rows on the server)
    const helperAgGrid = new HelperAgGrid();
    this._dummyTrades = [];
    for (let i = 1; i <= 200000; i++) {
      this._dummyTrades.push(helperAgGrid.createTrade(i));
    }
  }

  // called by ag-Grid whenever we need to get the next batch of rows
  // we receieve the params object to get the start and end row numbers
  // but we pass in the Adaptable Search State to perform filtering based on that
  getRows(params: any) {
    let rows = this.getTradesRange(
      params.request.startRow,
      params.request.endRow - params.request.startRow,
      adaptableApi.configApi.configGetAdaptableSearchState(), // this is the current Adaptable Search State
      adaptableApi.configApi.configGetAdaptableSortState() // this is the current Adaptable Sort State
    );
    const lastRow = BATCH_COUNT <= params.endRow ? BATCH_COUNT : -1;
    params.successCallback(rows, lastRow);
  }

  // In the real world this will be done on the server likely using SQL or similar structures
  // But here we do it in JavaScript to show how you can access the Column Filters in AdaptableSearchState
  // Each Column Filter has a Predicate that we interrogate seperately
  // We use a 3rd party date library 'date-fns' to manage dates but this can be done in any way that suits your requirements
  getTradesRange(
    start: number = 1,
    count: number = 100,
    searchState: AdaptableSearchState,
    sortState: AdaptableSortState
  ): ITrade[] {
    let matchingTrades: ITrade[] = this._dummyTrades;
    if (
      searchState.columnFilters != null &&
      searchState.columnFilters?.length > 0
    ) {
      searchState.columnFilters.forEach((columnFilter: ColumnFilter) => {
        let predicate = columnFilter.Predicate;
        let firstInput: any;
        if (predicate.Inputs != null && predicate.Inputs.length > 0) {
          firstInput = predicate.Inputs[0];
        }
        let columnId: string = columnFilter.ColumnId;

        // Blanks, Non-Blanks and Values (a.k.a. IN) work across all DataTypes
        if (predicate.PredicateId == 'Blanks') {
          matchingTrades = matchingTrades.filter(
            (t: any) =>
              t[columnId] == null ||
              t[columnId] == undefined ||
              t[columnId] == ''
          );
        } else if (predicate.PredicateId == 'NonBlanks') {
          matchingTrades = matchingTrades.filter(
            (t: any) =>
              t[columnId] != null &&
              t[columnId] != undefined &&
              t[columnId] != ''
          );
        } else if (predicate.PredicateId == 'Values') {
          matchingTrades = matchingTrades.filter(
            (t: any) =>
              t[columnId] != null &&
              t[columnId] != undefined &&
              predicate.Inputs?.includes(t[columnId])
          );
        } else {
          // work out the predicate based on the column's datatype using an an AdaptableApi.ColumnApi method
          matchingTrades = matchingTrades.filter(
            (t: any) => t[columnId] != undefined
          );
          switch (
            adaptableApi.columnApi.getColumnDataTypeFromColumnId(
              columnFilter.ColumnId
            )
          ) {
            case 'Boolean':
              if (predicate.PredicateId == 'True') {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] == true
                );
              } else if (predicate.PredicateId == 'False') {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] == false
                );
              }
              break;

            case 'String':
              if (predicate.PredicateId == 'Is' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] == firstInput
                );
              } else if (predicate.PredicateId == 'IsNot' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] !== firstInput
                );
              } else if (predicate.PredicateId == 'Contains' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  t[columnId].includes(firstInput)
                );
              } else if (predicate.PredicateId == 'StartsWith' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  t[columnId].startsWith(firstInput)
                );
              } else if (predicate.PredicateId == 'EndsWith' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  t[columnId].endsWith(firstInput)
                );
              } else if (predicate.PredicateId == 'Regex' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  new RegExp(firstInput).test(t[columnId])
                );
              }
              break;

            case 'Number':
              if (predicate.PredicateId == 'Equals' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] == firstInput
                );
              } else if (predicate.PredicateId == 'NotEquals' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] !== firstInput
                );
              } else if (predicate.PredicateId == 'GreaterThan' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => Number(t[columnId]) > Number(firstInput)
                );
              } else if (predicate.PredicateId == 'LessThan' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => Number(t[columnId]) < Number(firstInput)
                );
              } else if (predicate.PredicateId == 'Positive') {
                matchingTrades = matchingTrades.filter(
                  (t: any) => Number(t[columnId]) > 0
                );
              } else if (predicate.PredicateId == 'Negative') {
                matchingTrades = matchingTrades.filter(
                  (t: any) => Number(t[columnId]) < 0
                );
              } else if (predicate.PredicateId == 'Between' && firstInput) {
                let secondInput: any = predicate!.Inputs![1];
                if (secondInput) {
                  matchingTrades = matchingTrades.filter(
                    (t: any) =>
                      Number(t[columnId]) > firstInput &&
                      Number(t[columnId]) < secondInput
                  );
                }
              } else if (predicate.PredicateId == 'NotBetween' && firstInput) {
                let secondInput: any = predicate!.Inputs![1];
                if (secondInput) {
                  matchingTrades = matchingTrades.filter(
                    (t: any) =>
                      Number(t[columnId]) < firstInput ||
                      Number(t[columnId]) > secondInput
                  );
                }
              }
              break;

            case 'Date':
              if (predicate.PredicateId == 'On' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] == firstInput
                );
              } else if (predicate.PredicateId == 'NotOn' && firstInput) {
                matchingTrades = matchingTrades.filter(
                  (t: any) => t[columnId] !== firstInput
                );
              } else if (predicate.PredicateId == 'After' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isAfter(t[columnId], firstInput)
                );
              } else if (predicate.PredicateId == 'Before' && firstInput) {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isBefore(t[columnId], firstInput)
                );
              } else if (predicate.PredicateId == 'Today') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isToday(t[columnId])
                );
              } else if (predicate.PredicateId == 'Yesterday') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isYesterday(t[columnId])
                );
              } else if (predicate.PredicateId == 'Tomorrow') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isTomorrow(t[columnId])
                );
              } else if (predicate.PredicateId == 'ThisWeek') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isThisWeek(t[columnId])
                );
              } else if (predicate.PredicateId == 'ThisMonth') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isThisMonth(t[columnId])
                );
              } else if (predicate.PredicateId == 'ThisQuarter') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isThisQuarter(t[columnId])
                );
              } else if (predicate.PredicateId == 'ThisYear') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isThisYear(t[columnId])
                );
              } else if (predicate.PredicateId == 'InPast') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isPast(t[columnId])
                );
              } else if (predicate.PredicateId == 'InFuture') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isFuture(t[columnId])
                );
              } else if (predicate.PredicateId == 'NextWorkDay') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isSameDay(
                    t[columnId],
                    adaptableApi.calendarApi.getNextWorkingDay()
                  )
                );
              } else if (predicate.PredicateId == 'NextWorkDay') {
                matchingTrades = matchingTrades.filter((t: any) =>
                  isSameDay(
                    t[columnId],
                    adaptableApi.calendarApi.getPreviousWorkingDay()
                  )
                );
              }
              break;
          }
        }
      });
    }

    // Finally lets apply any Sorting as required to match what is currently sorted in the Grid.
    // The AdaptableSortState param gives us current sort info and the Lodash orderBy function replicates that for our data set.
    if (sortState.columnSorts.length > 0) {
      let sortedColumns: string[] = [];
      let sortDirections: string[] = [];
      sortState.columnSorts.forEach((cs: ColumnSort) => {
        sortedColumns.push(cs.ColumnId);
        sortDirections.push(cs.SortOrder.toLowerCase());
      });
      matchingTrades = orderBy(
        matchingTrades,
        sortedColumns,
        sortDirections as any
      );
    }

    return matchingTrades.slice(start, start + count);
  }

  // Retrieves all the distinct values - using 'uniqBy' from lodash
  // In the real world this will run on the server
  // However it demonstrates how you can pass AdapTable the values it needs to show in filter dropdowns when running in server mode
  // This is invoked in UserFunctions section of AdaptableOptions
  getUniqueColumnValues(column: AdaptableColumn): any[] {
    let returnVals = uniqBy(this._dummyTrades, column.ColumnId)
      .map((t: any) => {
        return t[column.ColumnId];
      })
      .filter((v: any) => v != undefined);
    if (column.DataType == 'Date') {
      let formatDateValues = returnVals.map((v: Date) => {
        return v.toDateString();
      });
      return formatDateValues;
    } else {
      return returnVals;
    }
  }
}
export default async (columnDefs: ColDef[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
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
    primaryKey: 'TradeId',
    userName: 'Demo User',
    adaptableId: 'Server Mode Demo',
    predefinedConfig: {
      Dashboard: {
        Tabs: [
          {
            Name: 'Server Demo Toolbar',
            Toolbars: ['Export', 'Layout', 'SystemStatus', 'Filter'],
          },
        ],
      },
      UserInterface: {
        PermittedValuesItems: [
          {
            Scope: {
              All: true,
            },
            GetColumnValuesFunction: 'GetUniqueColumnValues',
          },
        ],
      },
    },
    vendorGrid: {
      ...gridOptions,
      rowModelType: 'serverSide',
      modules: AllEnterpriseModules,
    },
    // provide an implmentation for the 'GetColumnValuesFunction' to get unique values
    // this is paired with PermittedValues in PredefinedConfig
    userFunctions: [
      {
        name: 'GetUniqueColumnValues',
        type: 'GetColumnValuesFunction',
        handler(column: AdaptableColumn) {
          return mockServer.getUniqueColumnValues(column);
        },
      },
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', (info: AdaptableReadyInfo) => {
    info.vendorGrid.api.setServerSideDatasource(mockServer);
  });
  return { adaptableOptions, adaptableApi };
};

const BATCH_COUNT = 100;
const mockServer = new MockServer();
