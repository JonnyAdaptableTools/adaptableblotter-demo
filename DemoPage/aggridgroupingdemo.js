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
            if (p === 'ask' || p === 'bid' || p === 'bloombergAsk' || p === 'bloombergBid' || p === 'price') {
                schema.push({ headerName: capitalize(p), field: p, cellClass: 'number-cell' });
            }
            // else if (p === 'price') {
            //     schema.push({ headerName: capitalize(p), field: p, filter: 'text', cellRenderer: 'animateShowChange' });
            // }
            else if (p === 'tradeId') {
                schema.push({ headerName: capitalize(p), field: p, cellClass: 'number-cell' });
            }
            else if (p === 'notional') {
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text', cellRenderer: notionalCellRenderer, aggFunc: 'sum', cellClass: 'number-cell' });
            }
            else if (p === 'country') {
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text', rowGroup: true });
            }
            else if (p === 'deskId' || p === 'changeOnYear' || p === 'bidOfferSpread' || p === 'bloombergBid' || p === 'percentChange') {
                schema.push({ headerName: capitalize(p), field: p, editable: true, cellClass: 'number-cell' });
            }
            else {
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text' });
            }
        }
    }
    return schema;
}
var currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
function notionalCellRenderer(params) {
    if (params.value) {
        return currencyFormatter.format(params.value)
    } else {
        return null;
    }
}
function InitBlotter() {
    var dataGen = new datagenerator.DataGenerator();
    var trades = dataGen.getTrades();

    // let the grid know which columns and what data to use
    var gridOptions = {
        columnDefs: getSchema(trades),
        rowData: trades,
        enableSorting: true,
        enableRangeSelection: true
    };
    var eGridDiv = document.getElementById('grid');
    var grid = new agGrid.Grid(eGridDiv, gridOptions);
    dataGen.startTickingDataagGrid(gridOptions);

    var container = document.getElementById('content');
    var gridcontainer = document.getElementById('grid');
    adaptableblotter = new adaptableblotteraggrid.AdaptableBlotter(gridOptions, container, gridcontainer, {
        primaryKey: "tradeId",
        userName: "Jonathan",
        enableAuditLog: false,
        enableRemoteConfigServer: false
    });
    //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
    adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(function () { ThemeChange(adaptableblotter); });
}
var themeName = "";
function ThemeChange(blotter, grid) {
    if (themeName != blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
        themeName = blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
        var container = document.getElementById('grid')
        if (themeName == "Slate" || themeName == "Cyborg" || themeName == "Darkly" || themeName == "Superhero") {
            container.classList = "ag-dark";
        }
        else {
            container.classList = "ag-blue";
        }
    }
}
