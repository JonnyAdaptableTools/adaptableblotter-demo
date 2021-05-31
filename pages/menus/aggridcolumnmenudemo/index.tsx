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
              href="https://v9-0--docs-adaptabletools.netlify.app/api/adaptablemenuitem"
              target="_blank"
            >
              Menu Item(s)
            </a>{' '}
            to the Column Menu, defining them in the{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
            </a>{' '}
            section of Adaptable Options. .{' '}
          </p>{' '}
          <p>
            When you define a MenuItem you can provide 3 functions that will be
            invoked by AdapTable:
          </p>
          <ul>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/column-menu/#menu-item-onclick"
                target="_blank"
              >
                onClick
              </a>
              : What happens when the Menu Item is clicked
            </li>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/column-menu/#menu-item-render"
                target="_blank"
              >
                shouldRender
              </a>
              : Whether the Menu Item should appear or not
            </li>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/column-menu/#menu-item-label"
                target="_blank"
              >
                label
              </a>
              : What Label the Menu Item should have
            </li>
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
            In this example we removed the <i>Create Custom Sort</i> and{' '}
            <i> Create Format Column</i> menu items for the 'Contact' column and
            we removed all AdapTable Menu Items for the 'Cust. Ref' column.
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
