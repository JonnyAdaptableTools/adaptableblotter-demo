import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridcolumninfodemo')}
      pageTitle={'Column Info Demo'}
      description={
        <div>
          <p>
            Column Info function provides quick at a glance summary of any
            objects (e.g. sorts, filters or styles) associated with any Column.
            You can add, edit and delete all these objects.
          </p>
          <p>
            The function is aware of the datatype of the column and will provide
            the list of available functions accordingly (e.g. Flashing Cell only
            availalbe for numeric columns).
          </p>
          <p>
            In this example we created a format column, conditinal style and
            custom sort for the 'Employee' column. Click on Column Info in the
            header menu to see all these objects and add / edit as required.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/column-info-function.md"
            target="_blank"
          >
            Column Info Function Read Me
          </a>
          .
        </div>
      }
    />
  );
};
