import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  NamedFilter: {
    NamedFilters: [
      {
        Name: 'High',
        Scope: {
          ColumnIds: ['OrderId'],
        },
        FilterPredicate: (_record, _columnId) => {
          let invoiced: number = _record.data.InvoicedCost;
          let itemCount: number = _record.data.ItemCount;
          return invoiced > 1000 && itemCount > 10 ? true : false;
        },
      },
      {
        Name: 'New Starter',
        Scope: {
          ColumnIds: ['Employee'],
        },
        FilterPredicate: (_record, _columnId, cellValue) => {
          return getEmployeeStatusFromCRMService(cellValue) == 'New'
            ? true
            : false;
        },
      },

      {
        Name: 'Post Takeover',
        Scope: {
          DataType: 'Date',
        },
        FilterPredicate: (_record, _columnId, cellValue) => {
          let dateToTest = cellValue as Date;
          let takeOverDate = new Date('2017-03-21');
          return dateToTest > takeOverDate;
        },
      },
    ],
  },
  ColumnFilter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Filter: {
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['New Starter'],
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;

function getEmployeeStatusFromCRMService(employeeName: string): string {
  return employeeName == 'Robert King' ||
    employeeName == 'Laura Callahan' ||
    employeeName == 'Andrew Fuller'
    ? 'New'
    : 'Existing';
}
