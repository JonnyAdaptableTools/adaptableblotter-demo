var adaptableblotter
function InitBlotter() {
    var dataGen = new harness.DataGenerator();
    var trades = dataGen.getTrades();

    $("#grid")
        .kendoGrid({
            dataSource: {
                //  pageSize: 100,
                data: trades,
                schema: {
                    model: {
                        fields: {
                            tradeId: { type: "number" },
                            notional: { type: "number" },
                            counterparty: { type: "string" },
                            currency: { type: "string" },
                            country: { type: "string" },
                            changeOnYear: { type: "number" },
                            price: { type: "number" },
                            bidOfferSpread: { type: "number" },
                            bid: { type: "number", editable: false },
                            ask: { type: "number", editable: false },
                            tradeDate: { type: "date" },
                            isLive: { type: "boolean" },
                            fitchRating: { type: "string" },
                            moodysRating: { type: "string" },
                            settlementDate: { type: "date" },
                            bloombergAsk: { type: "number" },
                            bloombergBid: { type: "number" },
                            percentChange: { type: "number" },
                            bookingGuid: { type: "string" },
                            lastUpdated: { type: "date" },
                            lastUpdatedBy: { type: "string" }
                        }
                    }
                }
            },
            columns:
            [
                { field: "tradeId", title: "ID" },
                { field: "notional", title: "Notional", format: "{0:c0}", attributes: { style: "text-align:right;" } },
                { field: "counterparty", title: "Counterparty", filterable: { multi: true, search: true } },
                { field: "currency", title: "Currency", width: 100 },
                { field: "country", title: "Country", filterable: { multi: true, search: true }, width: 200 },
                { field: "tradeDate", title: "Trade Date", format: "{0:dd MMM yyyy}", width: 200 },
                { field: "settlementDate", title: "Settlement Date", format: "{0:dd MMM yyyy}" },
                { field: "fitchRating", title: "Fitch Rating", filterable: { multi: true, search: true, search: true } },
                { field: "moodysRating", title: "Moodys Rating" },
                { field: "price", title: "Price", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "bidOfferSpread", title: "Bid Offer Spread", format: "{0:n}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "bid", title: "Bid", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "ask", title: "Ask", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "bloombergBid", title: "Bloomberg Bid", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "bloombergAsk", title: "Bloomberg Ask", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "isLive", title: "Is Live" },
                { field: "changeOnYear", title: "Change On Year", format: "{0:n4}", attributes: { class: "numberColumn" }, editor: setEditDecimals },
                { field: "percentChange", title: "Percent Change", format: "{0:p}", attributes: { class: "numberColumn" } },
                { field: "lastUpdated", title: "Last Update", format: "{0:dd MMM yyyy}", width: "450px" },
                { field: "lastUpdatedBy", title: "Last Updated By" }
            ],
            selectable: "multiple cell",
            sortable: true,
            reorderable: true,
            navigatable: true,
            resizable: true,
            scrollable: false,
            filterable: true,
            editable: true,
            columnMenu: false,
        });

    var grid = $("#grid").data("kendoGrid");
    var container = document.getElementById('content');
    //tradeId is the primary for the datasource
    //Jonathan is the username for the demo. Can be plugged to an authent service if required
    adaptableblotter = new adaptableblotterkendo.AdaptableBlotter(grid, container, {
        primaryKey: "tradeId",
        userName: "Jonathan",
        enableAuditLog: false,
        enableRemoteConfigServer: false
    });
    //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
    adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => this.ThemeChange(adaptableblotter))
}

function setEditDecimals(container, options) {
    $("<input name='" + options.field + "'/>")
        .appendTo(container)
        .kendoNumericTextBox({ decimals: 4 });
}
var themeName = ""
function ThemeChange(blotter, grid) {
    if (themeName != blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
        themeName = blotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme
        if (themeName == "Slate" || themeName == "Cyborg" || themeName == "Darkly" || themeName == "Superhero") {
            var a_href = $('#kendotheme').attr('href')
            $('#kendotheme').attr('href', a_href.replace('blueopal', 'black'));
        }
        else {
            var a_href = $('#kendotheme').attr('href')
            $('#kendotheme').attr('href', a_href.replace('black', 'blueopal'));
        }
    }
}