export default {
  Theme: {
    CurrentTheme: 'Light Theme'
  },
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Chart', 'Theme'],
    VisibleButtons: [
      'About',
      'Dashboard',
      'QuickSearch',
      'ColumnChooser',
      'AdvancedSearch'
    ],
    Zoom: '0.9'
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
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [] as IRangeExpression[]
        },
        YAxisColumnIds: ['Population'],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column'
        }
      },
      {
        ChartType: 'CategoryChart',
        Description: 'By Country',
        Name: 'Population Stats',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [] as IRangeExpression[]
        },
        YAxisColumnIds: [
          'Urbanization (%)',
          'Birth Rate',
          'Death Rate',
          'Life Expectancy'
        ],
        YAxisTotal: 'Sum',
        ChartProperties: {}
      },
      {
        ChartType: 'CategoryChart',
        Description: 'GDP per Capita (K) vs. Debt per Capita (K)',
        Name: 'Global Finances',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Code',
        XAxisExpression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [] as IRangeExpression[]
        },
        YAxisColumnIds: ['GDP per Capita (K)', 'Debt per Capita (K)'],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column'
        }
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
                'Poland'
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
                'Poland'
              ]
            }
          ],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [] as IRangeExpression[]
        },
        YAxisColumnIds: [
          'Coal %',
          'Renewable %',
          'Nuclear %',
          'Water %',
          'Gas %'
        ],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CategoryChartType: 'Column'
        }
      },
      {
        ChartType: 'PieChart',
        Description: '',
        Name: 'Population Pie Chart',
        PrimaryColumnId: 'Country',
        SecondaryColumnId: 'Population',
        SecondaryColumnOperation: 'Sum',
        VisibleRowsOnly: true,
        ChartProperties: {}
      },
      {
        ChartType: 'PieChart',
        Description: 'Land Area by Region',
        Name: 'Continental Land Mass',
        PrimaryColumnId: 'Region',
        SecondaryColumnId: 'Land Area',
        SecondaryColumnOperation: 'Sum',
        VisibleRowsOnly: true,
        ChartProperties: {
          ShowAsDoughnut: false
        }
      }
    ]
  }
};
