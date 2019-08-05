import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridactioncolumnsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Action Columns Demo'}
      description={
        <div>
          <h4>
            <h4>Action Columns Demo</h4>
          </h4>
          <p>
            The Adaptable Blotter provides an Action Column function that allows
            you to specify a button to placed in a column.
          </p>
          <p>
            When the button is clicked an{' '}
            <a
              href="//api.adaptableblotter.com/interfaces/_api_interface_ieventapi_.ieventapi.html#onactioncolumnclicked"
              target="_blank"
            >
              onActionColumnClicked
            </a>{' '}
            event fires, providing details of column clicked and current data in
            the row; subscribe to this event and perform any additional logic
            that is required.
          </p>
          <p>
            You are also able to provider a render function (specify it in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_blotteroptions_advancedoptions_.advancedoptions.html"
              target="_blank"
            >
              Advanced Options
            </a>
            ) that will replace the default button with one that matches the
            look and feel that you specify.
          </p>
          <p>
            In this example we have created Action Columns <b>Plus</b> and{' '}
            <b>Minus</b> and in the onActionColumnClicked event handler we
            update the <i>Item Count</i> column (though we do also have a{' '}
            <a href="../edit/aggridplusminusdemo" target="_blank">
              Plus/Minus Function
            </a>
            ).
          </p>
          <p>
            We also created a <b>Multiply</b> Action Column which doubles or
            trebles the <i>Item Cost</i> column. We've applied our own rendering
            function for the button, with logic to say it shouldn't appear if
            Employee is Margaret.
          </p>
        </div>
      }
    />
  );
};
