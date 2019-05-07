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
                VisibleRowsOnly: true,
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [] ,
                    FilterExpressions: [] ,
                    RangeExpressions: [] 
                },
                YAxisColumnIds: [
                    "Population"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CategoryChartType: "Column",
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "By Country",
                Name: "Population Stats",
                VisibleRowsOnly: true,
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [] ,
                    FilterExpressions: [] ,
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
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "GDP per Capita (K) vs. Debt per Capita (K)",
                Name: "Global Finances",
                VisibleRowsOnly: true,
                XAxisColumnId: "Code",
                XAxisExpression: {
                    ColumnValueExpressions: [] ,
                    FilterExpressions: [] ,
                    RangeExpressions: [] 
                },
                YAxisColumnIds: [
                    "GDP per Capita (K)",
                    "Debt per Capita (K)"
                ],
                YAxisTotal: "Sum",
                ChartProperties: {
                    CategoryChartType: "Column",
                }
            },
            {
                ChartType: "CategoryChart",
                Description: "By Source: Coal, Renewable, Nuclear, Water, and Gas",
                Name: "Electricity Production",
                VisibleRowsOnly: true,
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
                    FilterExpressions: [] ,
                    RangeExpressions: [] 
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
                    CategoryChartType: "Column",
                }
            },
            {
                ChartType: "PieChart",
                Description: "",
                Name: "Population Pie Chart",
                PrimaryColumnId: "Country",
                SecondaryColumnId: "Population",
                SecondaryColumnOperation: "Sum",
                VisibleRowsOnly: true,
                ChartProperties: {
                }
            },
            {
                ChartType: "PieChart",
                Description: "Land Area by Region",
                Name: "Continental Land Mass",
                PrimaryColumnId: "Region",
                SecondaryColumnId: "Land Area",
                SecondaryColumnOperation: "Sum",
                VisibleRowsOnly: true,
                ChartProperties: {
                    ShowAsDoughnut: false,
                }
            }
        ]
    }
}

