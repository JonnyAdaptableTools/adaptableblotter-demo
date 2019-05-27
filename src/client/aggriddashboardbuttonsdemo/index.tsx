import { useEffect } from 'react';

import { Demo } from './demo';

/**
 * render and empty react component, and on mount, initialize the demo
 */
export default () => {
  useEffect(() => {
    /* this will be called when this component is mounted */
    /* so we can start the demo */
    new Demo();
  }, [
    /* no dependencies here */
  ]);

  return null;
};
