import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridhotkeysdemo')}
      pageTitle={'Hot Keys Demo'}
      description={
        <div>
          <p>
            It is easy to set up 'Hot Key's in Adaptable - whereby you can
            define actions to be taken in reaction to a given set of keystrokes.
          </p>
          <p>
            This can be done either through a third party library (like{' '}
            <a
              href="https://github.com/JonWallsten/mousetrap-ts"
              target="_blank"
            >
              Mousetrap
            </a>
            ) or through listening to the native 'keydown' event.
          </p>
          <p>
            In this demo we have set 4 Hot Keys (each of which is tied to a
            different method in the Adaptable API - there are thousands to
            choose from! - to perform an action):
          </p>
          <ul>
            <li>'alt+shift+s'- opens the Schedule popup (using Mousetrap)</li>
            <li>
              'alt+shift+c'- opens the Calculated Column popup (using Mousetrap)
            </li>
            <li>
              'metaKey+shiftKey+l'- opens the Layout popup (using the keydown
              event)
            </li>
            <li>
              'metaKey+shiftKey+q'- opens the Quick Search popup (using the
              keydown event)
            </li>
          </ul>
        </div>
      }
    />
  );
};
