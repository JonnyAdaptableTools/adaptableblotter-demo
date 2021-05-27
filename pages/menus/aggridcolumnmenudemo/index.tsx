import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/menus/aggridcolumnmenudemo')}
      pageTitle={'Column Menu Demo'}
      description={
        <div>
          <p>
            AdapTable provides a Column Menu - accessible via the Column Header
            - which includes shortcuts to all the popup screens relevant to that
            column and its data type.
          </p>
          <p>
            The Column Menu is context sensitive so the menu items shown are
            dependent on the current column and the make up of the Grid.
          </p>
          <p>
            You can add your own bespoke{' '}
            <a
              href="https://docs.adaptabletools.com/docs/api/usermenuitem"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Column Menu, defining them in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
              target="_blank"
            >
              User Interface State
            </a>{' '}
            .{' '}
          </p>{' '}
          <p>
            When you define a UserMenuItem you can reference 3 User Functions:
          </p>
          <ul>
            <li>Clicked Function</li>
            <li>Show Predicate</li>
            <li>Label</li>
          </ul>
          <p>
            In this example we added 'Float Dashboard' and 'Set System Status'
            menu items (with the latter having sub menu items).
          </p>
          <p>
            You can also choose which - if any - of AdapTable's shipped Column
            Menu items are available by using the <b>showAdaptableColumnMenu</b>{' '}
            function property in{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
            </a>
          </p>
          <p>
            In this example we removed the <i>'Create Custom Sort'</i> and{' '}
            <i>'View as PieChart'</i> menu items for the 'Contact' column and we
            removed all AdapTable menu items for the 'Cust. Ref' column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/column-menu"
            target="_blank"
          >
            Column Menu Guide
          </a>{' '}
          |{' '}
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
            target="_blank"
          >
            Menu Options
          </a>{' '}
        </div>
      }
    />
  );
};
