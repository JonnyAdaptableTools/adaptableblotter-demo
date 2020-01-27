export default {
  Layout: {
    CurrentLayout: 'Pivot View',
    Layouts: [
      {
        Columns: [],
        ColumnSorts: [],
        GroupedColumns: ['ShipCountry'],
        PivotDetails: {
          PivotColumns: ['ShipVia'],
          AggregationColumns: ['InvoicedCost', 'ItemCost'],
        },
        Name: 'Pivot View',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'Employee',
          'ShipCountry',
          'OrderId',
          'PackageCost',
          'ItemCount',
          'ItemCost',
          'OrderCost',
          'InvoicedCost',
          'CompanyName',
          'ShipName',
        ],
        ColumnSorts: [],
        Name: 'Non Pivot View',
      },
    ],
  },
};
