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
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text', cellRenderer: notionalCellRenderer, cellClass: 'number-cell' });
            }
            else if (p === 'tradeDate' || p === 'settlementDate' || p === 'lastUpdated') {
                schema.push({ headerName: capitalize(p), field: p, editable: true, filter: 'text', cellRenderer: shortDateCellRenderer/*Datepicker*/ });
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
var shortDateFormatter = new Intl.DateTimeFormat('en-GB');
function notionalCellRenderer(params) {
    if (params.value) {
        return currencyFormatter.format(params.value)
    } else {
        return null;
    }
}
function shortDateCellRenderer(params) {
    if (params.value) {
        if (typeof params.value === "string") {
            return shortDateFormatter.format(params.value.toDate("dd/mm/yyyy","/"))
        }
        return shortDateFormatter.format(params.value)
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
        enableRangeSelection: true,
        enableFilter: true
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
    gridOptions.columnApi.autoSizeAllColumns();
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

// function to act as a class
function Datepicker() { }

// gets called once before the renderer is used
Datepicker.prototype.init = function (params) {
    // create the cell
    this.eInput = document.createElement('input');
    this.eInput.value = $.datepicker.formatDate("dd/mm/yy", params.value);
    this.params = params;
    var stopEditing = params.api.stopEditing;

    // https://jqueryui.com/datepicker/
    $(this.eInput).datepicker({
        dateFormat: "dd/mm/yy"
    });
};

// gets called once when grid ready to insert the element
Datepicker.prototype.getGui = function () {
    return this.eInput;
};

// focus and select can be done after the gui is attached
Datepicker.prototype.afterGuiAttached = function () {
    this.eInput.focus();
    this.eInput.select();
};

// returns the new value after editing
Datepicker.prototype.getValue = function () {
    return this.eInput.value;
};

// any cleanup we need to be done here
Datepicker.prototype.destroy = function () {
    // but this example is simple, no cleanup, we could
    // even leave this method out as it's optional
};

// if true, then this editor will appear in a popup
Datepicker.prototype.isPopup = function () {
    // and we could leave this method out also, false is the default
    return false;
};

String.prototype.toDate = function(format, delimiter) {
    var date = this;
    var formatedDate = null;
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = date.split(delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var monthNameIndex = formatItems.indexOf("mmm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var d = dateItems[dayIndex];
    if (d < 10) {
    	d = "0"+ d;
    }
    if (monthIndex > -1) {
        var month = parseInt(dateItems[monthIndex]);
        month -= 1;
        if (month < 10) {
            month = "0" + month;
        }
        formatedDate = new Date(dateItems[yearIndex], month, d);
    } else if (monthNameIndex > -1) {
        var monthName = dateItems[monthNameIndex];
        month = getMonthIndex(monthName);
        if (month < 10) {
            month = "0" + month;
        }
        formatedDate = new Date(dateItems[yearIndex], month, d);
    }
    return formatedDate;
};

function getMonthIndex(name) {
    name = name.toLowerCase();
    if (name == "jan" || name == "january") {
        return 0;
    } else if (name == "feb" || name == "february") {
        return 1;
    } else if (name == "mar" || name == "march") {
        return 2;
    } else if (name == "apr" || name == "april") {
        return 3;
    } else if (name == "may" || name == "may") {
        return 4;
    } else if (name == "jun" || name == "june") {
        return 5;
    } else if (name == "jul" || name == "july") {
        return 6;
    } else if (name == "aug" || name == "august") {
        return 7;
    } else if (name == "sep" || name == "september") {
        return 8;
    } else if (name == "oct" || name == "october") {
        return 9;
    } else if (name == "nov" || name == "november") {
        return 10;
    } else if (name == "dec" || name == "december") {
        return 11;
    }
}