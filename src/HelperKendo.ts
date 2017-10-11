import { IDataSetConfiguration } from './IDataSetConfiguration';
import * as fetch from 'isomorphic-fetch';


export function DecimalsEditorWith4DecimalsKendo(container: any, options: any) {
    $("<input name='" + options.field + "'/>")
        .appendTo(container)
        .kendoNumericTextBox({ decimals: 4 });
}

