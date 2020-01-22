import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default ({
  Dashboard: {
    VisibleToolbars: ['Chart'],
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
