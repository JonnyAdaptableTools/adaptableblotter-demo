import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import {
  GridOptions,
  ColDef,
  ServerSideStoreType,
  IServerSideDatasource,
  IServerSideGetRowsParams,
} from '@ag-grid-community/all-modules';
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
import {
  evaluate,
  defaultFunctions,
} from '@adaptabletools/adaptable/src/parser/src';

// 1. the Server-Side Row Model is selected using the grid options property: rowModelType = 'serverSide'
// 2. the ServerSideDatasource (implementing IServerSideDatasource) is registered with the grid using the vendor grid api: api.setServerSideDatasource(datasource)
//    the datasource instance exposes the 'getRows()' function, which is automatically called everytime the grid requires more rows
// 3. the datasource fetches the grid data from a FakeServer instance - which is just a mock replacement for a real server implementation
// 4. additional server-side data (required for AdapTable specific functions) may be fetched from the server.
//    This example demonstrates how you can pass AdapTable the values it needs to show in filter dropdowns - see 'GetUniqueColumnValues' defined in adaptableOptions.userFunctions
//    It retrieves all the distinct values from the server - this is invoked in UserFunctions section of AdaptableOptions
export default async (columnDefs: ColDef[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    // select SSRM
    rowModelType: 'serverSide',
    serverSideStoreType: ServerSideStoreType.Partial,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Server Row Model Demo',
    predefinedConfig: {
      Dashboard: {
        Tabs: [
          {
            Name: 'Server Demo Toolbar',
            Toolbars: ['Query', 'Export', 'Layout', 'SystemStatus', 'Filter'],
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
      modules: AllEnterpriseModules,
    },
    // provide an implementation for the 'GetColumnValuesFunction' to get unique values
    // this is paired with PermittedValues in PredefinedConfig
    userFunctions: [
      {
        name: 'GetUniqueColumnValues',
        type: 'GetColumnValuesFunction',
        handler(column: AdaptableColumn) {
          // Retrieve the unique column values (from the server)
          return fakeServer.getUniqueColumnValues(column);
        },
      },
    ],
  };

  const adaptableApi = await Adaptable.init(adaptableOptions);

  const fakeServer = new FakeServer(adaptableApi);
  const datasource = new ServerSideDatasource(fakeServer, adaptableApi);

  // register the Server-Side Datasource using the AG Grid API
  adaptableOptions.vendorGrid.api.setServerSideDatasource(datasource);

  adaptableApi.eventApi.on('AdaptableReady', (info: AdaptableReadyInfo) => {});
  return { adaptableOptions, adaptableApi };
};

/**
 * The main point of this example is that you may pass to the server-side both:
 *  1. AG Grid specific information, provided by IServerSideGetRowsParams: startRow, rowGroupCols, pivotCols etc.
 *  2. AdaptTable specific information, provided by AdaptableApi: AdaptableSearchState, AdaptableSortState etc.
 */
class ServerSideDatasource implements IServerSideDatasource {
  constructor(private server: FakeServer, private adaptableApi: AdaptableApi) {}

  getRows(params: IServerSideGetRowsParams): void {
    // fetch the server-side data
    const response = this.server.fetchServerData(
      params.request.startRow,
      params.request.endRow - params.request.startRow,
      // current search & filter state in the grid
      this.currentAdaptableSearchState,
      // current sorting state in the grid
      this.currentAdaptableSortState
    );

    params.success({
      rowData: response,
      // rowCount has to be defined, otherwise AG Grid does NOT refresh correctly the rows
      rowCount: !!response.length ? -1 : 0,
    });
  }

  get currentAdaptableSearchState() {
    return this.adaptableApi.configApi.getAdaptableSearchState();
  }

  get currentAdaptableSortState() {
    return this.adaptableApi.configApi.getAdaptableSortState();
  }
}

/**
 * This slightly contrived fake server mimics what will happen on a real server.
 * The implementation details (especially the dependency on the AdaptableApi!) are not relevant for a real use case.
 */
class FakeServer {
  private dummyTrades: ITrade[];

  constructor(private adaptableApi: AdaptableApi) {
    this.dummyTrades = this.createDummyData();
  }

  // in the real world this will be done on the server, probably with SQL or similar structures
  // the implementation (especially the dependency on the AdaptableApi is not relevant for a real use case)
  // important here is the possibility to evaluate & process both AG Grid and AdapTable functions
  fetchServerData(
    startRowIndex: number,
    count: number,
    searchState: AdaptableSearchState,
    sortState: AdaptableSortState
  ): ITrade[] {
    let matchingRows = this.dummyTrades;

    // evaluate queries if present
    // it is also possible (and probably more practical) to evaluate the query Abstract Syntax Tree (searchState.queryAST) directly
    if (!!searchState.currentQuery) {
      matchingRows = this.evaluateQueryFunction(
        matchingRows,
        searchState.currentQuery!
      );
    }

    // evaluate filters if present
    if (!!searchState.columnFilters?.length) {
      matchingRows = this.evaluateFilterFunction(
        matchingRows,
        searchState.columnFilters!
      );
    }

    // apply sorting
    if (!!sortState.columnSorts.length) {
      let sortedColumns: string[] = [];
      let sortDirections: string[] = [];
      sortState.columnSorts.forEach((cs: ColumnSort) => {
        sortedColumns.push(cs.ColumnId);
        sortDirections.push(cs.SortOrder.toLowerCase());
      });
      matchingRows = orderBy(
        matchingRows,
        sortedColumns,
        sortDirections as any
      );
    }

    return matchingRows.slice(startRowIndex, startRowIndex + count);
  }

  // Retrieves all the distinct values for a column
  // it demonstrates how you can pass AdapTable the values it needs to show in filter dropdowns when running in server mode
  getUniqueColumnValues(column: AdaptableColumn): any[] {
    let returnVals = uniqBy(this.dummyTrades, column.ColumnId)
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

  private evaluateQueryFunction(tradeEntries: ITrade[], query: string) {
    return tradeEntries.filter(rowData =>
      evaluate(query, {
        node: { data: rowData },
        api: this.adaptableApi,
        functions: defaultFunctions,
      })
    );
  }

  private evaluateFilterFunction(
    tradeEntries: ITrade[],
    columnFilters: ColumnFilter[]
  ) {
    let matchingRows = tradeEntries;

    columnFilters.forEach((columnFilter: ColumnFilter) => {
      let predicate = columnFilter.Predicate;
      let firstInput: any;
      if (predicate.Inputs != null && predicate.Inputs.length > 0) {
        firstInput = predicate.Inputs[0];
      }
      let columnId: string = columnFilter.ColumnId;

      // Blanks, Non-Blanks and Values (a.k.a. IN) work across all DataTypes
      if (predicate.PredicateId == 'Blanks') {
        matchingRows = matchingRows.filter(
          (t: any) =>
            t[columnId] == null || t[columnId] == undefined || t[columnId] == ''
        );
      } else if (predicate.PredicateId == 'NonBlanks') {
        matchingRows = matchingRows.filter(
          (t: any) =>
            t[columnId] != null && t[columnId] != undefined && t[columnId] != ''
        );
      } else if (predicate.PredicateId == 'Values') {
        matchingRows = matchingRows.filter(
          (t: any) =>
            t[columnId] != null &&
            t[columnId] != undefined &&
            predicate.Inputs?.includes(t[columnId])
        );
      } else {
        // Remove any empty values
        matchingRows = matchingRows.filter(
          (t: any) => t[columnId] != undefined
        );
        // work out the predicate based on the column's datatype using an an AdaptableApi.ColumnApi method
        switch (
          this.adaptableApi.columnApi.getColumnDataTypeFromColumnId(
            columnFilter.ColumnId
          )
        ) {
          case 'Boolean':
            if (predicate.PredicateId == 'True') {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] == true
              );
            } else if (predicate.PredicateId == 'False') {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] == false
              );
            }
            break;

          case 'String':
            if (predicate.PredicateId == 'Is' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] == firstInput
              );
            } else if (predicate.PredicateId == 'IsNot' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] !== firstInput
              );
            } else if (predicate.PredicateId == 'Contains' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                t[columnId].includes(firstInput)
              );
            } else if (predicate.PredicateId == 'StartsWith' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                t[columnId].startsWith(firstInput)
              );
            } else if (predicate.PredicateId == 'EndsWith' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                t[columnId].endsWith(firstInput)
              );
            } else if (predicate.PredicateId == 'Regex' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                new RegExp(firstInput).test(t[columnId])
              );
            }
            break;

          case 'Number':
            if (predicate.PredicateId == 'Equals' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] == firstInput
              );
            } else if (predicate.PredicateId == 'NotEquals' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] !== firstInput
              );
            } else if (predicate.PredicateId == 'GreaterThan' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => Number(t[columnId]) > Number(firstInput)
              );
            } else if (predicate.PredicateId == 'LessThan' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => Number(t[columnId]) < Number(firstInput)
              );
            } else if (predicate.PredicateId == 'Positive') {
              matchingRows = matchingRows.filter(
                (t: any) => Number(t[columnId]) > 0
              );
            } else if (predicate.PredicateId == 'Negative') {
              matchingRows = matchingRows.filter(
                (t: any) => Number(t[columnId]) < 0
              );
            } else if (predicate.PredicateId == 'Between' && firstInput) {
              let secondInput: any = predicate!.Inputs![1];
              if (secondInput) {
                matchingRows = matchingRows.filter(
                  (t: any) =>
                    Number(t[columnId]) > firstInput &&
                    Number(t[columnId]) < secondInput
                );
              }
            } else if (predicate.PredicateId == 'NotBetween' && firstInput) {
              let secondInput: any = predicate!.Inputs![1];
              if (secondInput) {
                matchingRows = matchingRows.filter(
                  (t: any) =>
                    Number(t[columnId]) < firstInput ||
                    Number(t[columnId]) > secondInput
                );
              }
            }
            break;

          case 'Date':
            if (predicate.PredicateId == 'On' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] == firstInput
              );
            } else if (predicate.PredicateId == 'NotOn' && firstInput) {
              matchingRows = matchingRows.filter(
                (t: any) => t[columnId] !== firstInput
              );
            } else if (predicate.PredicateId == 'After' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                isAfter(t[columnId], firstInput)
              );
            } else if (predicate.PredicateId == 'Before' && firstInput) {
              matchingRows = matchingRows.filter((t: any) =>
                isBefore(t[columnId], firstInput)
              );
            } else if (predicate.PredicateId == 'Today') {
              matchingRows = matchingRows.filter((t: any) =>
                isToday(t[columnId])
              );
            } else if (predicate.PredicateId == 'Yesterday') {
              matchingRows = matchingRows.filter((t: any) =>
                isYesterday(t[columnId])
              );
            } else if (predicate.PredicateId == 'Tomorrow') {
              matchingRows = matchingRows.filter((t: any) =>
                isTomorrow(t[columnId])
              );
            } else if (predicate.PredicateId == 'ThisWeek') {
              matchingRows = matchingRows.filter((t: any) =>
                isThisWeek(t[columnId])
              );
            } else if (predicate.PredicateId == 'ThisMonth') {
              matchingRows = matchingRows.filter((t: any) =>
                isThisMonth(t[columnId])
              );
            } else if (predicate.PredicateId == 'ThisQuarter') {
              matchingRows = matchingRows.filter((t: any) =>
                isThisQuarter(t[columnId])
              );
            } else if (predicate.PredicateId == 'ThisYear') {
              matchingRows = matchingRows.filter((t: any) =>
                isThisYear(t[columnId])
              );
            } else if (predicate.PredicateId == 'InPast') {
              matchingRows = matchingRows.filter((t: any) =>
                isPast(t[columnId])
              );
            } else if (predicate.PredicateId == 'InFuture') {
              matchingRows = matchingRows.filter((t: any) =>
                isFuture(t[columnId])
              );
            } else if (predicate.PredicateId == 'NextWorkDay') {
              matchingRows = matchingRows.filter((t: any) =>
                isSameDay(
                  t[columnId],
                  this.adaptableApi.calendarApi.getNextWorkingDay()
                )
              );
            } else if (predicate.PredicateId == 'NextWorkDay') {
              matchingRows = matchingRows.filter((t: any) =>
                isSameDay(
                  t[columnId],
                  this.adaptableApi.calendarApi.getPreviousWorkingDay()
                )
              );
            }
            break;
        }
      }
    });
    return matchingRows;
  }

  private createDummyData() {
    // create an inital dataset with 200,000 rows (to mimic many rows on the server)
    const helperAgGrid = new HelperAgGrid();
    const dummyData = [];
    for (let i = 1; i <= 200_000; i++) {
      dummyData.push(helperAgGrid.createTrade(i));
    }
    return dummyData;
  }
}
