
import { IDataSetConfiguration } from './IDataSetConfiguration';
import * as fetch from 'isomorphic-fetch';


export function FormatDateColumns(datecols: number[], behavior: any) {
    datecols.forEach(d => {
        behavior.setColumnProperties(d, {
            format: 'shortDateFormat'
        });
    })
}

export function FormatCurrencyColumns(datecols: number[], behavior: any) {
    datecols.forEach(d => {
        behavior.setColumnProperties(d, {
            format: 'USDCurrencyFormat'
        });
    })
}

export function FormatDecimalColumns(datecols: number[], decimalPlaces: number, behavior: any) {
    datecols.forEach(d => {
        if (decimalPlaces == 2) {
            behavior.setColumnProperties(d, {
                format: 'twoDPFormat'
            });
        } else if (decimalPlaces == 4) {
            behavior.setColumnProperties(d, {
                format: 'fourDPFormat'
            });
        }


    })
}

