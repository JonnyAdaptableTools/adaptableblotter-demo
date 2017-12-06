var webpack = require('webpack');
var path = require('path');
var failPlugin = require('webpack-fail-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PACKAGE = require('./package.json');

module.exports = {
    entry: {
        'index': ["./index.js"],
        hypergriddemo: "./src/HypergridDemo.ts",
        aggriddemo: "./src/agGridDemo.ts",
        kendodemo: "./src/KendoDemo.ts",
        aggridgroupingdemo: "./src/agGridGroupingDemo.ts",
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: "[name]",
        libraryTarget: 'umd'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "ag-grid": "agGrid",
        "ag-grid/main": "agGrid",

    },

    plugins: [
        failPlugin,
        new webpack.DefinePlugin({
            'process.env.packageVersion':  JSON.stringify(PACKAGE.version)
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "hypergriddemo.html",
            template: 'DemoPage/hypergriddemo.ejs',
            inject: false,
            // 'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.js",
            'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.min.js",
            'demoJs': "hypergriddemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "kendodemo.html",
            template: 'DemoPage/kendodemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotterkendo-bundle.min.js",
            'demoJs': "kendodemo.js"
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggriddemo.html",
            template: 'DemoPage/aggriddemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggriddemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridgroupingdemo.html",
            template: 'DemoPage/aggridgroupingdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridgroupingdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "index.html",
            template: 'DemoPage/index.ejs',
            inject: false,
            'version': PACKAGE.version,
            'versiondate': new Date().toISOString().slice(0, 10)
        }),
        //this makes sure we package it in the dist folder and make it available for the webpack dev server
        // new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist/adaptable-blotter-themes', from: '**/*', to: 'adaptable-blotter-themes' }]),
        new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist', from: '*', to: PACKAGE.version + '/' }]),
        new CopyWebpackPlugin([{ from: 'UserGuide/Adaptable_Blotter_User_Guide.pdf', to: '' }]),
        new CopyWebpackPlugin([{ from: 'ExtLibs/**/*', to: '' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/adaptableblotter/LICENSE.md', to: '' }]),
        new CopyWebpackPlugin([{ from: 'DemoPage/*', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'DataSets/Json/*.json', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'src/DataSets/**/*.json', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'app*.json', to: '', flatten: true }])
    ],
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            // note that babel-loader is configured to run after ts-loader
            {
                exclude: /node_modules/,
                test: /\.ts(x?)$/, loader: 'babel-loader?presets[]=es2015&plugins[]=transform-runtime!ts-loader'

            }
        ]
    },
    devServer: {
        proxy: {
            '/auditlog': {
                target: 'http://127.0.0.1:6767',
                secure: false
            },
            '/adaptableblotter-config': {
                target: 'http://127.0.0.1:3000',
                secure: false
            }
        }
    }
}