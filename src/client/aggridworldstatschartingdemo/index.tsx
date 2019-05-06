import { useEffect } from 'react';

import { Demo } from './demo';

export default () => {
  useEffect(() => {
    new Demo();
  }, []);

  return null;
};
