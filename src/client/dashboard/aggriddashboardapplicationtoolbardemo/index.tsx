import { useEffect } from 'react';

import demo from './demo';
import React from 'react';

export default (props: { onReady?: (config: any) => void }) => {
  useEffect(() => {
    const result = demo();

    if (props.onReady) {
      props.onReady(result);
    }
  }, []);
  return null;
};

export function renderCustomDiv(): any {
  return (
    <div style={{ display: 'flex' }}>
      <button
        className="ab-SimpleButton ab-SimpleButton--variant-outlined"
        onClick={() => {
          alert('creating trade');
        }}
        style={{ marginRight: '3px' }}
      >
        Create New Trade
      </button>
      <select className="ab-Dropdown" style={{ marginRight: '3px' }}>
        <option>Book 1</option>
        <option>Book 2</option>
        <option>Book 3</option>
      </select>
    </div>
  );
}
