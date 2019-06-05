export default {
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Chart'],
    Zoom: '0.9',
  },
  Chart: {
    CurrentChartName: 'Population Stats',
    ChartDefinitions: [
      {
        ChartType: 'CategoryChart',
        Description: 'For Most Populated Countries',
        Name: 'Population Total',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        YAxisColumnIds: ['Population'],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column',
        },
      },
      {
        ChartType: 'CategoryChart',
        Description: 'By Country',
        Name: 'Population Stats',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        YAxisColumnIds: [
          'Urbanization (%)',
          'Birth Rate',
          'Death Rate',
          'Life Expectancy',
        ],
        YAxisTotal: 'Sum',
        ChartProperties: {},
      },
      {
        ChartType: 'CategoryChart',
        Description: 'GDP per Capita (K) vs. Debt per Capita (K)',
        Name: 'Global Finances',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        YAxisColumnIds: ['GDP per Capita (K)', 'Debt per Capita (K)'],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column',
          XAxisOverlap: 0,
        },
      },
      {
        ChartType: 'CategoryChart',
        Description: 'By Source: Coal, Renewable, Nuclear, Water, and Gas',
        Name: 'Electricity Production',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Country',
              ColumnDisplayValues: [
                'United States',
                'China',
                'Russian',
                'India',
                'Japan',
                'Canada',
                'Germany',
                'France',
                'Brazil',
                'United Kingdom',
                'Italy',
                'Mexico',
                'Spain',
                'Australia',
                'Poland',
              ],
              ColumnRawValues: [
                'United States',
                'China',
                'Russian',
                'India',
                'Japan',
                'Canada',
                'Germany',
                'France',
                'Brazil',
                'United Kingdom',
                'Italy',
                'Mexico',
                'Spain',
                'Australia',
                'Poland',
              ],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        YAxisColumnIds: [
          'Coal %',
          'Renewable %',
          'Nuclear %',
          'Water %',
          'Gas %',
        ],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column',
        },
      },
    ],
  },
};
