import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
const code = raw('./code.ts');
console.log(1);
export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  await init();

  return {
    code,
  };
};
