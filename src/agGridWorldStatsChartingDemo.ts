import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridWorldStatsChartingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {

        let data: any[]
        Helper.getDataFromJson("worldstats.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {

                var columndefs = HelperAgGrid.getWorldStatsSchema();
                var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
              var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);
             ///   let configUrl = 'src/configs/worldstatscharts.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions, "Country", "World Stats Charting Demo", json);
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })


            let json = {
                "Theme": {
                    "CurrentTheme": "Light Theme"
                },
                "Dashboard": {
                    "VisibleToolbars": [
                        "SmartEdit",
                        "Export",
                        "Chart",
                        "Theme"
                    ],
                    "VisibleButtons": [
                        "About",
                        "Dashboard",
                        "QuickSearch",
                        "ColumnChooser",
                        "AdvancedSearch"
                    ],
                    "Zoom": "0.9"
                },
                "Chart": {
                    "CurrentChartName": "",
                    "ChartDefinitions": [
                        {
                            "Description": "For Most Populated Countries",
                            "Name": "Population Total",
                            "XAxisColumnId": "Code",
                            "XAxisExpression": {
                                "ColumnValueExpressions": [{}],
                                "FilterExpressions": [{}],
                                "RangeExpressions": [{}]
                            },
                            "YAxisColumnIds": [
                                "Population Total"
                            ],
                            "YAxisTotal": "Sum",
                            "ChartProperties": {
                                "CalloutsInterval": 1,
                                "CalloutsType": "None",
                                "ChartType": "Column",
                                "CrosshairAnnotationEnabled": true,
                                "CrosshairDisplayMode": "Both",
                                "CrosshairSnapToData": true,
                                "EnableCategoryHighlighting": false,
                                "EnableFinalValueAnnotations": false,
                                "EnableItemHighlighting": false,
                                "EnableSeriesHighlighting": true,
                                "EnableTransitions": false,
                                "MarkerType": "Default",
                                "SeriesThickness": 1,
                                "SubTitleAlignment": "Center",
                                "TitleAlignment": "Center",
                                "ToolTipType": "Item",
                                "XAxisAngle": "Horizontal",
                                "XAxisGap": 0.5,
                                "XAxisInverted": true,
                                "XAxisLabelColor": "",
                                "XAxisLabelLocation": "OutsideBottom",
                                "XAxisLabelVisibility": "visible",
                                "XAxisOverlap": 1,
                                "XAxisTitle": " ",
                                "XAxisTitleColor": "",
                                "YAxisInverted": false,
                                "XAxisIntervalValue": 1,
                                "YAxisIsLogarithmic": false,
                                "YAxisLabelColor": "",
                                "YAxisLabelLocation": "OutsideRight",
                                "YAxisLabelScale": "Linear",
                                "YAxisLabelVisibility": "visible",
                                "YAxisTitle": "",
                                "YAxisTitleColor": ""
                            }
                        },
                        {
                            "Description": "By Country",
                            "Name": "Population Stats",
                            "XAxisColumnId": "Code",
                            "XAxisExpression": {
                                "ColumnValueExpressions": [{}],
                                "FilterExpressions": [{}],
                                "RangeExpressions": [{}]
                            },
                            "YAxisColumnIds": [
                                "Population Urban (%)",
                                "Birth Rate",
                                "Death Rate",
                                "Life Expectancy"
                            ],
                            "YAxisTotal": "Sum",
                            "ChartProperties": {
                                "CalloutsInterval": 1,
                                "CalloutsType": "None",
                                "ChartType": "Line",
                                "CrosshairAnnotationEnabled": false,
                                "CrosshairDisplayMode": "None",
                                "CrosshairSnapToData": false,
                                "EnableCategoryHighlighting": false,
                                "EnableFinalValueAnnotations": false,
                                "EnableItemHighlighting": false,
                                "EnableSeriesHighlighting": false,
                                "EnableTransitions": false,
                                "MarkerType": "Circle",
                                "SeriesThickness": 1,
                                "SubTitleAlignment": "Center",
                                "TitleAlignment": "Center",
                                "ToolTipType": "Item",
                                "XAxisAngle": "Horizontal",
                                "XAxisGap": 0.5,
                                "XAxisInverted": false,
                                "XAxisIntervalValue": 1,
                                "XAxisLabelColor": "",
                                "XAxisLabelLocation": "OutsideBottom",
                                "XAxisLabelVisibility": "visible",
                                "XAxisOverlap": 1,
                                "XAxisTitle": " ",
                                "XAxisTitleColor": "",
                                "YAxisInverted": false,
                                "YAxisIsLogarithmic": false,
                                "YAxisLabelColor": "",
                                "YAxisLabelLocation": "OutsideRight",
                                "YAxisLabelScale": "Linear",
                                "YAxisLabelVisibility": "visible",
                                "YAxisTitle": "",
                                "YAxisTitleColor": ""
                            }
                        },
                        {
                            "Description": "GDP vs. Debt per Capita for Biggest Countries",
                            "Name": "Global Finances",
                            "XAxisColumnId": "Code",
                            "XAxisExpression": {
                                "ColumnValueExpressions": [{}],
                                "FilterExpressions": [{}],
                                "RangeExpressions": [{}]
                            },
                            "YAxisColumnIds": [
                                "GDP per Capita",
                                "Debt per Capita"
                            ],
                            "YAxisTotal": "Sum",
                            "ChartProperties": {
                                "CalloutsInterval": 1,
                                "CalloutsType": "None",
                                "ChartType": "Column",
                                "CrosshairAnnotationEnabled": false,
                                "CrosshairDisplayMode": "None",
                                "CrosshairSnapToData": false,
                                "EnableCategoryHighlighting": true,
                                "EnableFinalValueAnnotations": false,
                                "EnableItemHighlighting": false,
                                "EnableSeriesHighlighting": false,
                                "EnableTransitions": false,
                                "MarkerType": "Default",
                                "SeriesThickness": 1,
                                "SubTitleAlignment": "Center",
                                "TitleAlignment": "Center",
                                "ToolTipType": "Category",
                                "XAxisAngle": "Horizontal",
                                "XAxisGap": 0.5,
                                "XAxisInverted": false,
                                "XAxisIntervalValue": 1,
                                "XAxisLabelColor": "",
                                "XAxisLabelLocation": "OutsideBottom",
                                "XAxisLabelVisibility": "visible",
                                "XAxisOverlap": 0,
                                "XAxisTitle": " ",
                                "XAxisTitleColor": "",
                                "YAxisInverted": false,
                                "YAxisIsLogarithmic": true,
                                "YAxisLabelColor": "",
                                "YAxisLabelLocation": "OutsideRight",
                                "YAxisLabelScale": "Linear",
                                "YAxisLabelVisibility": "visible",
                                "YAxisTitle": "",
                                "YAxisTitleColor": ""
                            }
                        },
                        {
                            "Description": "By Source: Oil, Nuclear, Renewable, Coal and Water",
                            "Name": "Electricity Production",
                            "XAxisColumnId": "Code",
                            "XAxisExpression": {
                                "ColumnValueExpressions": [
                                    {
                                        "ColumnId": "Country",
                                        "ColumnDisplayValues": [
                                            "Poland",
                                            "Australia",
                                            "Spain",
                                            "Mexico",
                                            "Italy",
                                            "United Kingdom",
                                            "Brazil",
                                            "France",
                                            "Germany",
                                            "Canada",
                                            "Japan",
                                            "India",
                                            "Russian",
                                            "United States",
                                            "China",
                                        ],
                                        "ColumnRawValues": [
                                            "Poland",
                                            "Australia",
                                            "Spain",
                                            "Mexico",
                                            "Italy",
                                            "United Kingdom",
                                            "Brazil",
                                            "France",
                                            "Germany",
                                            "Canada",
                                            "Japan",
                                            "India",
                                            "Russian",
                                            "United States",
                                            "China",
                                        ]
                                    }
                                ],
                                "FilterExpressions": [{}],
                                "RangeExpressions": [{}]
                            },
                            "YAxisColumnIds": [
                                "Electricity Oil",
                                "Electricity Renewable",
                                "Electricity Nuclear",
                                "Electricity Coal (kWh)",
                                "Electricity Water"
                            ],
                            "YAxisTotal": "Sum",
                            "ChartProperties": {
                                "CalloutsInterval": 1,
                                "CalloutsType": "None",
                                "ChartType": "Column",
                                "CrosshairAnnotationEnabled": false,
                                "CrosshairDisplayMode": "None",
                                "CrosshairSnapToData": false,
                                "EnableCategoryHighlighting": true,
                                "EnableFinalValueAnnotations": false,
                                "EnableItemHighlighting": false,
                                "EnableSeriesHighlighting": false,
                                "EnableTransitions": false,
                                "MarkerType": "Default",
                                "SeriesThickness": 1,
                                "SubTitleAlignment": "Center",
                                "TitleAlignment": "Center",
                                "ToolTipType": "Item",
                                "XAxisAngle": "Horizontal",
                                "XAxisGap": 0.5,
                                "XAxisInverted": false,
                                "XAxisIntervalValue": 1,
                                "XAxisLabelColor": "",
                                "XAxisLabelLocation": "OutsideBottom",
                                "XAxisLabelVisibility": "visible",
                                "XAxisOverlap": 0,
                                "XAxisTitle": " ",
                                "XAxisTitleColor": "",
                                "YAxisInverted": false,
                                "YAxisIsLogarithmic": false,
                                "YAxisLabelColor": "",
                                "YAxisLabelLocation": "OutsideRight",
                                "YAxisLabelScale": "Linear",
                                "YAxisLabelVisibility": "visible",
                                "YAxisTitle": " Electricity (Billion of kWh)",
                                "YAxisTitleColor": ""
                            }
                        }
                    ]
                }
            }
        }
    }