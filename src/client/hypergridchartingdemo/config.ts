import { IColumnValueExpression } from 'adaptableblotter/Utilities/Interface/Expression/IColumnValueExpression';

import { IFilterExpression } from 'adaptableblotter/Utilities/Interface/Expression/IFilterExpression';

import { IRangeExpression } from 'adaptableblotter/Utilities/Interface/Expression/IRangeExpression';

export default {
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
    CurrentChartName: 'Employee Sales',
    ChartDefinitions: [
      {
        ChartType: 'CategoryChart',
        Description: '',
        Name: 'Employee Sales',
        VisibleRowsOnly: true,
        XAxisColumnId: 'Employee',
        XAxisExpression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [] as IRangeExpression[]
        },
        YAxisColumnIds: ['InvoicedCost', 'OrderCost'],
        YAxisTotal: 'Sum',
        ChartProperties: {
          CalloutsInterval: 1,
          CalloutsType: 'None',
          CategoryChartType: 'Column',
          CrosshairAnnotationEnabled: false,
          CrosshairDisplayMode: 'None',
          CrosshairSnapToData: false,
          EnableCategoryHighlighting: false,
          EnableFinalValueAnnotations: false,
          EnableItemHighlighting: false,
          EnableSeriesHighlighting: false,
          EnableTransitions: false,
          MarkerType: 'Default',
          SeriesThickness: 1,
          SubTitleAlignment: 'Center',
          TitleAlignment: 'Center',
          ToolTipType: 'Item',
          XAxisAngle: 'Horizontal',
          XAxisGap: 0.5,
          XAxisInverted: true,
          XAxisLabelColor: '',
          XAxisLabelLocation: 'OutsideBottom',
          XAxisLabelVisibility: 'visible',
          XAxisOverlap: 1,
          XAxisTitle: '',
          XAxisTitleColor: '',
          YAxisInverted: false,
          YAxisIsLogarithmic: false,
          YAxisLabelColor: '',
          YAxisLabelLocation: 'OutsideRight',
          YAxisLabelScale: 'Linear',
          YAxisLabelVisibility: 'visible',
          YAxisTitle: '',
          YAxisTitleColor: ''
        }
      },
      {
        ChartType: 'PieChart',
        Description: '',
        Name: 'Employee Items Sold',
        PrimaryColumnId: 'Employee',
        SecondaryColumnId: 'ItemCost',
        SecondaryColumnOperation: 'Sum',
        VisibleRowsOnly: true,
        ChartProperties: {
          OthersCategoryThreshold: 2,
          OthersCategoryType: 'Percent',
          PieChartLabelPosition: 'BestFit',
          ShowAsDoughnut: true,
          SliceLabelsMapping: 'Name',
          SliceLegendMapping: 'ValueAndName',
          SliceValuesMapping: 'Value'
        }
      }
    ]
  }
};
