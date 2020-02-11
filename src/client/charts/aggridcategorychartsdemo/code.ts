import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = ({
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Chart'],
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
} as any) as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    primaryKey: 'Country',
    userName: 'Demo User',
    adaptableId: 'Category Charts Demo',
    chartOptions: {
      displayOnStartUp: true,
      showModal: false,
      pieChartMaxItems: 50,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
