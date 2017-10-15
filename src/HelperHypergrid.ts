
import { IDataSetConfiguration } from './IDataSetConfiguration';
import * as fetch from 'isomorphic-fetch';


export function FormatColumns(cols: number[], behavior: any, formatName: string) {
    cols.forEach(c => {
        behavior.setColumnProperties(c, {
            format: formatName
        });
    })
}

