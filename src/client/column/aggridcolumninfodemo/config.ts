import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['ColumnInfo'],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Employee',
        SortedValues: ['Margaret Peacock', 'Janet Leverling', 'Nancy Davolio'],
      },
      {
        ColumnId: 'ContactName',
        SortedValues: [
          'Palle Ibsen',
          'Jaime Yorres',
          'Aria Cruz',
          'Fran Wilson',
        ],
      },
    ],
  },
  UserFilter: {
    UserFilters: [
      {
        ColumnId: 'Employee',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Employee',
              ColumnDisplayValues: [
                'Robert King',
                'Janet Leverling',
                'Anne Dodsworth',
              ],
            },
          ],
        },
        Name: 'UK Team',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'Employee',
        Style: {
          BackColor: '#ffffcc',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'Employee',
        Style: {
          ClassName: '',
          FontStyle: 'Normal',
          FontWeight: 'Bold',
          ForeColor: '#8b0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['UK Team'],
            },
          ],
        },
      },
    ],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'Employee',
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
    ],
  },
} as PredefinedConfig;
