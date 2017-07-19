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
            if (p === 'ask' || p === 'bid' || p === 'bloombergAsk' || p === 'bloombergBid') {
                schema.push({ headerName: capitalize(p), field: p });
            }
            else if (p === 'price') {
                schema.push({ headerName: capitalize(p), field: p, filter: 'text', cellRenderer: 'animateShowChange' });
            }
            else if (p === 'notional') {
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text', cellRenderer: notionalCellRenderer });
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
    var dataGen = new harness.DataGenerator();
    var trades = dataGen.getTrades();

    // let the grid know which columns and what data to use
    var gridOptions = {
        columnDefs: getSchema(trades),
        rowData: trades,
        enableSorting: true,
        enableRangeSelection: true
    };
    var eGridDiv = document.getElementById('grid');
    agGrid.LicenseManager.setLicenseKey('Adaptive_Blotter_IntegrationLicense_5Devs27_March_2019__MTU1MzY0NDgwMDAwMA==9df2c70bc1f2f7f85362f118e62e456b')
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
}
