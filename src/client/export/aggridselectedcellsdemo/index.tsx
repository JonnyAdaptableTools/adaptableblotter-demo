import { useEffect } from 'react';

import demo from './demo';

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
