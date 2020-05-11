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
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Chart'],
      },
    ],
  },
  Theme: {
    CurrentTheme: 'dark',
  },
  Chart: {
    CurrentChartName: 'Population Pie Chart',
    ChartDefinitions: [
      {
        ChartType: 'PieChart',
        Description: '',
        Name: 'Population Pie Chart',
        PrimaryColumnId: 'Country',
        SecondaryColumnId: 'Population',
        SecondaryColumnOperation: 'Sum',
        VisibleRowsOnly: true,
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
          ShowAsDoughnut: false,
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
    autoGroupColumnDef: {
      sortable: true,
    },
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
    adaptableId: 'Pie Charts Demo',
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
