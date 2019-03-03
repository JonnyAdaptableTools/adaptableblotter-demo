import * as Helper from './Helper';

export function FormatColumns(cols: number[], behavior: any, formatName: string) {
    cols.forEach(c => {
        behavior.setColumnProperties(c, {
            format: formatName
        });
    })
}

export function getSchema(data: any): any {
    let schema = [],
        firstRow = Array.isArray(data) && data[0];

    firstRow = (typeof firstRow === 'object') ? firstRow : {};
    for (let p in firstRow) {
        if (firstRow.hasOwnProperty(p)) {
            schema.push({ name: p, header: Helper.capitalize(p) });
        }
    }
    return schema;
}

export function setNorthwindHyperGridProperties(grid: any): void {
    let behavior = grid.behavior;

    //For all columns except primarykey we enable the editor
    behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
        let editorName = declaredEditorName;
        if (options.column.name !== 'OrderId') {
            editorName = 'textfield';
        }
        return grid.cellEditors.create(editorName, options);
    }


    var shortDateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    grid.localization.add('shortDateFormat', new grid.localization.DateFormatter('en-EN', shortDateOptions));

    var longDateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
    grid.localization.add('longDateFormat', new grid.localization.DateFormatter('en-EN', longDateOptions));

    grid.localization.add('USDCurrencyFormat', new grid.localization.NumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }));

    grid.localization.add('twoDPFormat', new grid.localization.NumberFormatter('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }));

    grid.localization.add('fourDPFormat', new grid.localization.NumberFormatter('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    }));

    grid.addProperties({ renderFalsy: true });
    grid.addProperties({ editOnKeydown: false });

    FormatColumns([10, 11, 12], behavior, "shortDateFormat")

    FormatColumns([5, 7, 9], behavior, "fourDPFormat")
}