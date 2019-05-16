import { IDataSetConfiguration } from './IDataSetConfiguration';
import * as fetch from 'isomorphic-fetch';

export function capitalize(input: string) {
  return (/[a-z]/.test(input) ? input : input.toLowerCase())
    .replace(/[\s\-_]*([^\s\-_])([^\s\-_]+)/g, replacer)
    .replace(/[A-Z]/g, ' $&')
    .trim();
}
export function replacer(a: string, b: string, c: string) {
  return b.toUpperCase() + c;
}

export async function getDataFromJson(url: string) {
  let getContent = await fetch(url)
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => console.error(err));
  return getContent;
}

const checkStatus = (response: Response) => {
  const error = new Error(response.statusText);

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  //error.response = response;
  throw error;
};

export function ConvertExcelDate(dateToConvert: number) {
  if (dateToConvert.toString() == '') {
    return null;
  }
  var result = new Date();
  result.setTime((dateToConvert - 25569) * 24 * 3600 * 1000);
  return result;
}

export function MakeAllRecordsColumnsDateProperDates(data: any[]) {
  data.forEach(record => {
    for (let prop in record) {
      //we convert all columns where there is date in the name header to proper Date objects
      if (record.hasOwnProperty(prop) && prop.match(/date/i)) {
        record[prop] = ConvertExcelDate(record[prop]);
      }
    }
    // record.MaturityDate = Helper.ConvertExcelDate(record.MaturityDate);
  });
}

export function manageDomDataSetSelectAndReturnSelectDataset(
  AvailableDatasetConfigs: Map<string, IDataSetConfiguration>
) {
  let select: HTMLSelectElement = document.getElementById(
    'dataset_select'
  ) as HTMLSelectElement;
  AvailableDatasetConfigs.forEach(x => {
    let c = document.createElement('option');
    c.text = x.name;
    c.value = x.name;
    select.options.add(c);
  });

  let currentDataSet = localStorage.getItem('dataset_select');
  if (!currentDataSet || currentDataSet == 'Select') {
    return null;
  }
  select.value = currentDataSet;
  let selectedConfig: IDataSetConfiguration = AvailableDatasetConfigs.get(
    currentDataSet
  );
  return selectedConfig;
}

export function generateRandomInt(minValue: number, maxValue: number): number {
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

export function generateRandomDouble(): number {
  return Math.random();
}
export function roundTo4Dp(val: number): number {
  return Math.round(val * 10000) / 10000;
}
export function getRandomItem(array: any[], max?: number): any {
  if (max) {
    return array[generateRandomInt(0, Math.min(max, array.length - 1))];
  } else {
    return array[generateRandomInt(0, array.length - 1)];
  }
}

// bit of a hack function to ensure that we dont get negtive prices which looks stupid...
export function checkPriceIsPostive(numberToCheck: number): number {
  if (numberToCheck <= 0) {
    numberToCheck = numberToCheck + 2;
  }
  return numberToCheck;
}

export function getdemolicencekey(): any {
  return process.env.VALID_BLOTTER_LICENSE;
}
