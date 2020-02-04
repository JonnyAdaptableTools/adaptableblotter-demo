import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
const code = raw('./code.ts');

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  init();

  return {
    code,
  };
};
