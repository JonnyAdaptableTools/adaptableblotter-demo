import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'
import { IRangeExpression } from 'adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IRangeExpression';
import { IFilterExpression } from 'adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IFilterExpression';
import { IColumnValueExpression } from 'adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IColumnValueExpression';

export class agGridWorldStatsChartingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {

        let data: any[]
        Helper.getDataFromJson("worldstats.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                HelperAgGrid.setUpAgGridLicence();
                var columndefs = HelperAgGrid.getWorldStatsSchema();
                var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
                var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);
                ///   let configUrl = 'src/configs/worldstatscharts.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions, "Country", "World Stats Charting Demo", json);
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })

    }
}


let json = {
    Theme: {
        CurrentTheme: "Light Theme"
    },
    Dashboard: {
        VisibleToolbars: [
            "SmartEdit",
            "Export",
            "Chart",
            "Theme"
        ],
        VisibleButtons: [
            "About",
            "Dashboard",
            "QuickSearch",
            "ColumnChooser",
            "AdvancedSearch"
        ],
        Zoom: "0.9"
    },
    Chart: {
        CurrentChartName: "Population Stats",
        ChartDefinitions: [
            {
                ChartType: "CategoryChart",
                Description: "For Most Populated Countries",
                Name: "Population Total",
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [] as IColumnValueExpression[],
                    FilterExpressions: [] as IFilterExpression[],
                    RangeExpressions: [] as IRangeExpression[]
                },
                YAxisColumnIds: [
                    "Population"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CalloutsInterval: 1,
                    CalloutsType: "None",
                    ChartType: "Column",
                    CrosshairAnnotationEnabled: true,
                    CrosshairDisplayMode: "Both",
                    CrosshairSnapToData: true,
                    EnableCategoryHighlighting: false,
                    EnableFinalValueAnnotations: false,
                    EnableItemHighlighting: false,
                    EnableSeriesHighlighting: false,
                    EnableTransitions: false,
                    MarkerType: "Default",
                    SeriesThickness: 1,
                    SubTitleAlignment: "Center",
                    TitleAlignment: "Center",
                    ToolTipType: "Item",
                    XAxisAngle: "Horizontal",
                    XAxisGap: 0.5,
                    XAxisInverted: true,
                    XAxisLabelColor: "",
                    XAxisLabelLocation: "OutsideBottom",
                    XAxisLabelVisibility: "visible",
                    XAxisOverlap: 1,
                    XAxisTitle: " ",
                    XAxisTitleColor: "",
                    YAxisInverted: false,
                    XAxisIntervalValue: 1,
                    YAxisIsLogarithmic: false,
                    YAxisLabelColor: "",
                    YAxisLabelLocation: "OutsideRight",
                    YAxisLabelScale: "Linear",
                    YAxisLabelVisibility: "visible",
                    YAxisTitle: "",
                    YAxisTitleColor: ""
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "By Country",
                Name: "Population Stats",
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [],
                    FilterExpressions: [],
                    RangeExpressions: []
                },
                YAxisColumnIds: [
                    "Urbanization (%)",
                    "Birth Rate",
                    "Death Rate",
                    "Life Expectancy"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CalloutsInterval: 1,
                    CalloutsType: "None",
                    ChartType: "Line",
                    CrosshairAnnotationEnabled: false,
                    CrosshairDisplayMode: "None",
                    CrosshairSnapToData: false,
                    EnableCategoryHighlighting: false,
                    EnableFinalValueAnnotations: false,
                    EnableItemHighlighting: false,
                    EnableSeriesHighlighting: false,
                    EnableTransitions: false,
                    MarkerType: "Circle",
                    SeriesThickness: 1,
                    SubTitleAlignment: "Center",
                    TitleAlignment: "Center",
                    ToolTipType: "Item",
                    XAxisAngle: "Horizontal",
                    XAxisGap: 0.5,
                    XAxisInverted: false,
                    XAxisIntervalValue: 1,
                    XAxisLabelColor: "",
                    XAxisLabelLocation: "OutsideBottom",
                    XAxisLabelVisibility: "visible",
                    XAxisOverlap: 1,
                    XAxisTitle: " ",
                    XAxisTitleColor: "",
                    YAxisInverted: false,
                    YAxisIsLogarithmic: false,
                    YAxisLabelColor: "",
                    YAxisLabelLocation: "OutsideRight",
                    YAxisLabelScale: "Linear",
                    YAxisLabelVisibility: "visible",
                    YAxisTitle: " ",
                    YAxisTitleColor: ""
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "GDP per Capita (K) vs. Debt per Capita (K)",
                Name: "Global Finances",
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [] as IColumnValueExpression[],
                    FilterExpressions: [] as IFilterExpression[],
                    RangeExpressions: [] as IRangeExpression[]
                },
                YAxisColumnIds: [
                    "GDP per Capita (K)",
                    "Debt per Capita (K)"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CalloutsInterval: 1,
                    CalloutsType: "None",
                    ChartType: "Column",
                    CrosshairAnnotationEnabled: false,
                    CrosshairDisplayMode: "None",
                    CrosshairSnapToData: false,
                    EnableCategoryHighlighting: true,
                    EnableFinalValueAnnotations: false,
                    EnableItemHighlighting: false,
                    EnableSeriesHighlighting: true,
                    EnableTransitions: false,
                    MarkerType: "Default",
                    SeriesThickness: 1,
                    SubTitleAlignment: "Center",
                    TitleAlignment: "Center",
                    ToolTipType: "Category",
                    XAxisAngle: "Horizontal",
                    XAxisGap: 0.5,
                    XAxisInverted: false,
                    XAxisIntervalValue: 1,
                    XAxisLabelColor: "",
                    XAxisLabelLocation: "OutsideBottom",
                    XAxisLabelVisibility: "visible",
                    XAxisOverlap: 0,
                    XAxisTitle: " ",
                    XAxisTitleColor: "",
                    YAxisInverted: false,
                    YAxisIsLogarithmic: true,
                    YAxisLabelColor: "",
                    YAxisLabelLocation: "OutsideRight",
                    YAxisLabelScale: "Linear",
                    YAxisLabelVisibility: "visible",
                    YAxisTitle: " Thousands of USA Dollars",
                    YAxisTitleColor: ""
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "By Source: Coal, Renewable, Nuclear, Water, and Gas",
                Name: "Electricity Production",
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [
                        {
                            ColumnId: "Country",
                            ColumnDisplayValues: [
                                "United States",
                                "China",
                                "Russian",
                                "India",
                                "Japan",
                                "Canada",
                                "Germany",
                                "France",
                                "Brazil",
                                "United Kingdom",
                                "Italy",
                                "Mexico",
                                "Spain",
                                "Australia",
                                "Poland",
                            ],
                            ColumnRawValues: [
                                "United States",
                                "China",
                                "Russian",
                                "India",
                                "Japan",
                                "Canada",
                                "Germany",
                                "France",
                                "Brazil",
                                "United Kingdom",
                                "Italy",
                                "Mexico",
                                "Spain",
                                "Australia",
                                "Poland",
                            ]
                        }
                    ],
                    FilterExpressions: [] as IFilterExpression[],
                    RangeExpressions: [] as IRangeExpression[]
                },
                YAxisColumnIds: [
                    "Coal %",
                    "Renewable %",
                    "Nuclear %",
                    "Water %",
                    "Gas %"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CalloutsInterval: 1,
                    CalloutsType: "None",
                    ChartType: "Column",
                    CrosshairAnnotationEnabled: false,
                    CrosshairDisplayMode: "None",
                    CrosshairSnapToData: false,
                    EnableCategoryHighlighting: true,
                    EnableFinalValueAnnotations: false,
                    EnableItemHighlighting: false,
                    EnableSeriesHighlighting: false,
                    EnableTransitions: false,
                    MarkerType: "Default",
                    SeriesThickness: 1,
                    SubTitleAlignment: "Center",
                    TitleAlignment: "Center",
                    ToolTipType: "Category",
                    XAxisAngle: "Horizontal",
                    XAxisGap: 0.25,
                    XAxisInverted: false,
                    XAxisIntervalValue: 1,
                    XAxisLabelColor: "",
                    XAxisLabelLocation: "OutsideBottom",
                    XAxisLabelVisibility: "visible",
                    XAxisOverlap: 0,
                    XAxisTitle: " ",
                    XAxisTitleColor: "",
                    YAxisInverted: false,
                    YAxisIsLogarithmic: false,
                    YAxisLabelColor: "",
                    YAxisLabelLocation: "OutsideRight",
                    YAxisLabelScale: "Linear",
                    YAxisLabelVisibility: "visible",
                    YAxisTitle: " % of Electricity Production",
                    YAxisTitleColor: ""
                }
            }
        ]
    }
}

