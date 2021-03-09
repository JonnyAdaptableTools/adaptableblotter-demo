import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggridcssthemedemo')}
      pageTitle={'CSS Theme Demo'}
      className="custom-css-rules"
      description={
        <div>
          <p>
            This demo illustrates a few ways in which CSS can be used to change
            the look and feel of AdapTable.
          </p>
          <p>
            Every button, toolbar, panel, container and window in AdapTable is
            given a logical and easy to find name which can then be updated via
            css.
          </p>
          <p>
            In this demo we show a few examples of what can be achieved (taken
            from requests recieved by our users). We have:
          </p>

          <ul>
            <li>Hidden the 'Schedule' button from the Export toolbar</li>
            <li>
              Moved the Close button in the Popup window from Left to Right
            </li>
            <li>Underlined the title in the Toolbar</li>
          </ul>
          <p>
            The tiny amount of css required to do this is printed below the grid
          </p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};

/*
<p>
            Note that the new icon appears not only in the toolbar but also in
            the functions menu dropdown and anywhere else where the icon is
            referenced.
          </p>

          */
