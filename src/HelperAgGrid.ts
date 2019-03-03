import * as Helper from './Helper';

var currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
export function currencyRendereragGrid(params: any) {
    try {
        if (params.value) {
            return currencyFormatter.format(params.value)
        } else {
            return null;
        }
    }
    catch (ex) {
        console.error("Error formatting the currency for value: " + params.value + " and node : ", params.node)
    }
}

var shortDateFormatter = new Intl.DateTimeFormat('en-GB');
export function shortDateFormatteragGrid(params: any) {
    try {
        if (params.value) {
            return shortDateFormatter.format(params.value)
        } else {
            return null;
        }
    }
    catch (ex) {
        console.error("Error formatting the date for value: " + params.value + " and node : ", params.node)
    }
}

export function boolParseragGrid(params: any) {
    try {
        return `<input type='checkbox'   ${params.value ? 'checked' : ''} />`;
    }
    catch (ex) {
        console.error("Error parsing the date value: " + params.newValue + " and node : ", params.node)
    }
}

export function numberToBool(params: any) {
    if (params.value === 0) {
        return 'false';
    } else {
        return 'true';
    }
}

export function dateParseragGrid(params: any) {
    try {
        return stringToDate(params.newValue, "dd/mm/yyyy", "/");
    }
    catch (ex) {
        console.error("Error parsing the date value: " + params.newValue + " and node : ", params.node)
    }
}



function stringToDate(date: string, format: string, delimiter: string) {
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = date.split(delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(parseInt(dateItems[yearIndex]), month, parseInt(dateItems[dayIndex]));
    return formatedDate;
}

export var decimalPlaceRendereragGrid = (minDigits: number, maxDigits: number) => function (params: any) {
    if (params.value) {
        var decimalPlaceFormatter = new Intl.NumberFormat('en-GB', {
            minimumFractionDigits: minDigits,
            maximumFractionDigits: maxDigits
        });
        return decimalPlaceFormatter.format(params.value)
    }
}

export function startTickingDataagGrid(gridOptions: any) {
    setInterval(() => {
        let orderId = Helper.generateRandomInt(11020, 11060);
        if (gridOptions != null && gridOptions.api != null) {
            gridOptions.api.forEachNode((rowNode: any, index: number) => {
                if (rowNode.group) {
                    return;
                }
                let rowOrderId = gridOptions.api.getValue("OrderId", rowNode);
                if (rowOrderId != orderId) { return; }

                let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
                let trade = rowNode;
                let columnName = "ItemCost";
                let initialItemCost = gridOptions.api.getValue(columnName, trade);
                let newItemCost = Helper.roundTo4Dp(initialItemCost + numberToAdd);

                trade.setDataValue(columnName, newItemCost);

                let itemCount = gridOptions.api.getValue("ItemCount", trade);
                let newOrderCost = (itemCount * newItemCost)
                trade.setDataValue("OrderCost", newOrderCost)
            });
        }
    }, 500)

}


export function getBasicNorthwindColumnSchema(): any[] {
    var schema = []
    schema.push({ headerName: "Order Id", field: "OrderId", editable: true, cellClass: 'number-cell', filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Customer Reference", field: "CustomerReference", editable: true, filter: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Company Name", field: "CompanyName", editable: true, filter: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Contact Name", field: "ContactName", filter: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Order Date", field: "OrderDate", editable: true, cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true, type: 'abColDefDate', });
    schema.push({ headerName: "Required Date", field: "RequiredDate", editable: true, cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true, type: 'abColDefDate', });
    schema.push({ headerName: "Invoiced Cost", field: "InvoicedCost", cellClass: 'number-cell', cellRenderer: currencyRendereragGrid, editable: true, filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Order Cost", field: "OrderCost", cellClass: 'number-cell', cellRenderer: currencyRendereragGrid, editable: true, filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Item Cost", field: "ItemCost", cellClass: 'number-cell', editable: true, filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Item Count", field: "ItemCount", cellClass: 'number-cell', editable: true, filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Change On Order", field: "ChangeOnOrder", cellClass: 'number-cell', editable: true, filter: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Employee", field: "Employee", filter: 'text', editable: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Ship Via", field: "ShipVia", filter: 'text', editable: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Freight", field: "Freight", cellClass: 'number-cell', cellRenderer: currencyRendereragGrid, editable: true, sortable: true, type: 'abColDefNumber', });
    schema.push({ headerName: "Ship Name", field: "ShipName", columnGroupShow: 'open', editable: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Ship Address", field: "ShipAddress", editable: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Ship City", field: "ShipCity", sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Ship Postal Code", field: "ShipPostalCode", sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Ship Country", field: "ShipCountry", filter: 'text', editable: true, sortable: true, type: 'abColDefString', });
    schema.push({ headerName: "Shipped Date", field: "ShippedDate", editable: true, cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true, type: 'abColDefDate', });
    return schema;
}

export function getGroupingNorthwindColumnSchema(): any[] {
    var schema = []
    // do a column group for Customer
    schema.push({
        headerName: "Customer Info",
        marryChildren: true,
        children: [
            { headerName: "Customer Reference", field: "CustomerReference", columnGroupShow: 'open', editable: true, filter: true, sortable: true },
            { headerName: "Company Name", field: "CompanyName", columnGroupShow: 'closed', editable: true, filter: true, sortable: true },
            { headerName: "Contact Name", field: "ContactName", columnGroupShow: 'closed', filter: true, sortable: true },
        ]
    })

    // do a column group for Order
    schema.push({
        headerName: "Order",
        marryChildren: true,
        children: [
            { headerName: "Order Id", field: "OrderId", editable: true, columnGroupShow: 'open', cellClass: 'number-cell', filter: true, sortable: true },
            { headerName: "Order Date", field: "OrderDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true },
            { headerName: "Required Date", field: "RequiredDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true },
            { headerName: "Shipped Date", field: "ShippedDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: dateParseragGrid, valueFormatter: shortDateFormatteragGrid, filter: true, sortable: true },
            { headerName: "OrderCost", field: "OrderCost", cellClass: 'number-cell', cellRenderer: currencyRendereragGrid, columnGroupShow: 'closed', editable: true, enableValue: true, filter: true, sortable: true },
        ]
    })
    schema.push({ headerName: "Item Cost", field: "ItemCount", cellClass: 'number-cell', columnGroupShow: 'closed', editable: true, enableValue: true, filter: true, sortable: true });
    schema.push({ headerName: "Item Count", field: "ItemCount", cellClass: 'number-cell', columnGroupShow: 'closed', editable: true, enableValue: true, filter: true, sortable: true });
    schema.push({ headerName: "Employee", field: "Employee", filter: 'text', editable: true, enableRowGroup: true, hide: true, sortable: true });
    schema.push({ headerName: "Ship Via", field: "ShipVia", filter: 'text', editable: true, enableRowGroup: true, hide: true, sortable: true });
    schema.push({ headerName: "Freight", field: "Freight", cellClass: 'number-cell', cellRenderer: currencyRendereragGrid, editable: true, enableValue: true, sortable: true });

    // do a column group for shipping
    schema.push({
        headerName: "Shipping Details",
        children: [
            { headerName: "Ship Name", field: "ShipName", columnGroupShow: 'open', editable: true, sortable: true },
            { headerName: "Ship Address", field: "ShipAddress", columnGroupShow: 'closed', editable: true, sortable: true },
            { headerName: "Ship City", field: "ShipCity", columnGroupShow: 'closed', sortable: true },
            { headerName: "Ship Postal Code", field: "ShipPostalCode", columnGroupShow: 'closed', sortable: true },
        ]
    })
    schema.push({ headerName: "Ship Country", field: "ShipCountry", filter: 'text', editable: true, rowGroup: true, enableRowGroup: true, hide: true, sortable: true });

    return schema;
}


