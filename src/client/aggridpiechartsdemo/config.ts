export default {
  Dashboard: {
    VisibleToolbars: ['Alert', 'Export', 'Chart'],
    Zoom: '0.9',
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
        ChartProperties: {},
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
};
