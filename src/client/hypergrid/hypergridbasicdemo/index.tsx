import { useEffect } from 'react';

function saveData() {
  var datasetElement = document.getElementById('dataset_select');
  localStorage.setItem(datasetElement.id, datasetElement.value);
}

global.saveData = saveData;

import { Demo } from './demo';

console.log('dev');
export default () => {
  useEffect(() => {
    new Demo();
  }, []);

  return null;
};
