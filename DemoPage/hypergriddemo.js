function ThemeChange(blotter, grid) {
    if (themeName != blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
        themeName = blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme
        if (themeName == "Slate" || themeName == "Cyborg" || themeName == "Darkly" || themeName == "Superhero") {
            grid.addProperties(darkTheme);
        }
        else {
            grid.addProperties(lightTheme);
        }
    }
}
var themeName = ""
var adaptableblotter
function capitalize(string) {
    return (/[a-z]/.test(string) ? string : string.toLowerCase())
        .replace(/[\s\-_]*([^\s\-_])([^\s\-_]+)/g, replacer)
        .replace(/[A-Z]/g, ' $&')
        .trim();
}
function replacer(a, b, c) {
    return b.toUpperCase() + c;
}

function getSchema(data) {
    var schema = [],
        firstRow = Array.isArray(data) && data[0];

    firstRow = (typeof firstRow === 'object') ? firstRow : {};
    for (var p in firstRow) {
        if (firstRow.hasOwnProperty(p)) {
            if (p === 'notional' || p === 'ask' || p === 'bid') {
                schema.push({ name: p, header: capitalize(p), type: 'number' });
            }
            else if (p === 'tradeDate') {
                schema.push({ name: p, header: capitalize(p), type: 'date' });
            }
            else {
                schema.push({ name: p, header: capitalize(p) });
            }
        }
    }
    return schema;
}
function InitBlotter() {
    //Generate the dumy data
    var dataGen = new harness.DataGenerator();
    var trades = dataGen.getTrades();

    //create the Hypergrid
    var grid = new fin.Hypergrid('#grid', { data: trades, schema: getSchema(trades) });

    dataGen.startTickingDataHypergrid(grid)
    //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells.
    grid.addProperties({ renderFalsy: true })
    grid.addProperties({ editOnKeydown: false })
    //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells
    grid.addProperties({ renderFalsy: true })

    grid.localization.add('USDCurrencyFormat', new grid.localization.NumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }));

    var shortDateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    grid.localization.add('shortDateFormat', new grid.localization.DateFormatter('en-EN', shortDateOptions));

    let behavior = grid.behavior;
    //Add Edit for Notional column
    behavior.setColumnProperties(1, {
        editor: 'textfield',
        format: 'USDCurrencyFormat'
    });

    //Add Edit for DeskId column
    behavior.setColumnProperties(2, {
        editor: 'textfield',
        format: 'number'
    });

    //Add Edit for counterparty column
    behavior.setColumnProperties(3, {
        editor: 'textfield'
    });

    //Add Edit for Currency column
    behavior.setColumnProperties(4, {
        editor: 'textfield'
    });

    //Add Edit for Country column
    behavior.setColumnProperties(5, {
        editor: 'textfield'
    });

    //Add Edit for b/o spread column
    behavior.setColumnProperties(10, {
        editor: 'Number'
    });

    //Add Edit for moodys column
    behavior.setColumnProperties(12, {
        editor: 'textfield'
    });

    //Add Edit for fitch column
    behavior.setColumnProperties(13, {
        editor: 'textfield'
    });

    //Add Edit for snp column
    behavior.setColumnProperties(14, {
        editor: 'textfield'
    });

    //Add Edit for Trade Date column
    behavior.setColumnProperties(15, {
        editor: 'textfield',
        format: 'shortDateFormat'
    });

    //Add Edit for Settlement Date column
    behavior.setColumnProperties(16, {
        editor: 'textfield',
        format: 'shortDateFormat'
    });

    //create Adaptable Blotter
    var container = document.getElementById('content');
    //tradeId is the primary for the datasource
    //Jonathan is the username for the demo. Can be plugged to an authent service if required
    adaptableblotter = new adaptableblotterhypergrid.AdaptableBlotter(
        grid,
        container,
        {
            primaryKey: "tradeId",
            userName: "Jonathan",
            enableAuditLog: false,
            enableRemoteConfigServer: false
        });
    //alternate rows
    var origgetCell = grid.behavior.dataModel.getCell;
    grid.behavior.dataModel.getCell = (config, declaredRendererName) => {
        if (config.isDataRow) {
            var y = config.dataCell.y;
            if (y % 2) {
                config.backgroundColor = config.altbackground;
            }
        }
        return origgetCell(config, declaredRendererName);
    };
    //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
    adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => this.ThemeChange(adaptableblotter, grid))
    grid.addProperties(lightTheme);
}

var lightTheme = {
    font: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#003f59',
    backgroundColor: 'white',
    altbackground: '#e6f2f8',
    foregroundSelectionColor: 'white',
    backgroundSelectionColor: 'rgba(13, 106, 146, 0.5)',

    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    columnHeaderColor: '#00435e',
    columnHeaderBackgroundColor: '#d9ecf5',
    columnHeaderForegroundSelectionColor: 'rgb(25, 25, 25)',
    columnHeaderBackgroundSelectionColor: 'rgb(255, 220, 97)',

    rowHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    rowHeaderColor: '#00435e',
    rowHeaderBackgroundColor: '#d9ecf5',
    rowHeaderForegroundSelectionColor: 'rgb(25, 25, 25)',
    rowHeaderBackgroundSelectionColor: 'rgb(255, 220, 97)',

    backgroundColor2: 'rgb(201, 201, 201)',
    lineColor: '#bbdceb',
    voffset: 0,
    scrollbarHoverOver: 'visible',
    scrollbarHoverOff: 'visible',
    scrollingEnabled: true,

    fixedRowAlign: 'center',
    fixedColAlign: 'center',
    cellPadding: 15,
    gridLinesH: false,
    gridLinesV: true,

    defaultRowHeight: 30,
    defaultFixedRowHeight: 15,
    showRowNumbers: false,
    editorActivationKeys: ['alt', 'esc'],
    columnAutosizing: true,
    readOnly: false
}

var darkTheme = {
    font: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    color: 'white',
    backgroundColor: '#07071E',
    altbackground: '#07071E',
    foregroundSelectionColor: 'white',
    backgroundSelectionColor: 'rgba(61, 119, 254, 0.5)',

    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    columnHeaderColor: 'white',
    columnHeaderBackgroundColor: '#07071E',
    columnHeaderForegroundSelectionColor: 'white',
    columnHeaderBackgroundSelectionColor: '#3D77FE',

    rowHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    rowHeaderColor: 'white',
    rowHeaderBackgroundColor: '#07071E',
    rowHeaderForegroundSelectionColor: 'white',
    rowHeaderBackgroundSelectionColor: '#3D77FE',

    backgroundColor2: 'rgb(201, 201, 201)',
    lineColor: 'rgb(199, 199, 199)',
    voffset: 0,
    scrollbarHoverOver: 'visible',
    scrollbarHoverOff: 'visible',
    scrollingEnabled: true,

    fixedRowAlign: 'center',
    fixedColAlign: 'center',
    cellPadding: 15,
    gridLinesH: false,
    gridLinesV: false,

    defaultRowHeight: 30,
    defaultFixedRowHeight: 15,
    showRowNumbers: false,
    editorActivationKeys: ['alt', 'esc'],
    columnAutosizing: true,
    readOnly: false
};