import { useEffect } from 'react';

import demo from './demo';
import React from 'react';

export default (props: { onReady?: (config: any) => void }) => {
  useEffect(() => {
    demo().then(result => {
      if (props.onReady) {
        props.onReady(result);
      }
    });
  }, []);
  return null;
};

export function renderCustomDiv(): any {
  return (
    <div style={{ display: 'flex' }}>
      <button
        className="ab-SimpleButton ab-SimpleButton--variant-outlined"
        onClick={() => {
          alert('clicked rendered button');
        }}
        style={{ marginRight: '3px' }}
      >
        Rendered Button
      </button>
      <select className="ab-Dropdown" style={{ marginRight: '3px' }}>
        <option>Rendered Dropdown 1</option>
        <option>Rendered Dropdown 2</option>
        <option>Rendered Dropdown 3</option>
      </select>
    </div>
  );
}
