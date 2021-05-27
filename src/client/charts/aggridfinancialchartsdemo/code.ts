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
  FinancialChartDefinition,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = ({
  Dashboard: {
    Tabs: [
      {
        Name: 'Demo Toolbar',
        Toolbars: ['SmartEdit', 'Layout', 'Chart'],
      },
    ],
  },
  Chart: {
    CurrentChartName: 'FTSE Close',
    ChartDefinitions: [
      {
        ChartType: 'FinancialChart',
        Description: '(Mock) FTSE Close Data',
        Name: 'FTSE Close',
        VisibleRowsOnly: true,
        DataSources: [
          {
            Name: 'FTSE Data',
            XAxisDateColumnId: 'CloseDate',
            YAxisNumericCloseColumnId: 'Close',
            YAxisNumericOpenColumnId: 'Open',
            YAxisNumericVolumeColumnId: 'Volume',
            YAxisNumericHighColumnId: 'High',
            YAxisNumericLowColumnId: 'Low',
          },
        ],
        // ChartProperties: {},
      } as FinancialChartDefinition,
    ],
  },
  Layout: {
    CurrentLayout: 'FTSE Layout',
    Layouts: [
      {
        Name: 'FTSE Layout',
        ColumnSorts: [
          {
            ColumnId: 'CloseDate',
            SortOrder: 'Desc',
          },
        ],
        Columns: [
          'CloseDate',
          'Open',
          'High',
          'Low',
          'Close',
          'HighLowDifference',
          'DaySpread',
          'Volume',
          'AdjustedClose',
          'PercentChange',
        ],
      },
    ],
  },

  ToolPanel: {
    VisibleToolPanels: ['Export', 'Filter', 'Layout', 'Chart', 'Filter'],
  },
} as any) as PredefinedConfig;

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
    primaryKey: 'Country',
    userName: 'Demo User',
    adaptableId: 'Financial Charts Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [
      charts({
        displayOnStartUp: true,
        showModal: false,
      }),
    ],
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
