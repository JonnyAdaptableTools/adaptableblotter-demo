
import { IDataSetConfiguration } from './IDataSetConfiguration';
import * as fetch from 'isomorphic-fetch';


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
export var shortDateRendereragGrid = (columnId: string) => function (params: any) {
    try {
        if (params.data[columnId]) {
            return shortDateFormatter.format(params.data[columnId])
        } else {
            return null;
        }
    }
    catch (ex) {
        console.error("Error formatting the date for value: " + params.data[columnId] + " and node : ", params.node)
    }
}

export function dateParseragGrid(params: any) {
    try {
        return stringToDate(params.newValue,"dd/mm/yyyy", "/");
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
        var fourDecimalPlaceFormatter = new Intl.NumberFormat('en-GB', {
            minimumFractionDigits:minDigits,
            maximumFractionDigits: maxDigits
        });        
        return fourDecimalPlaceFormatter.format(params.value)     
    }
}
        

