import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/menus/aggridcontextmenudemo')}
      pageTitle={'Context Menu Demo'}
      description={
        <div>
          <p>
            AdapTable provides a Context Menu - accessible when you right-click
            in a cell - which includes shortcuts to functionality relevant to
            that cell (and what is selected).
          </p>
          <p>
            You can add your own bespoke{' '}
            <a
              href="https://docs.adaptabletools.com/api/adaptablemenuitem"
              target="_blank"
            >
              Menu Item(s)
            </a>{' '}
            to the Context Menu - through{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
            </a>{' '}
            section of Adaptable Options.{' '}
          </p>
          <p>
            AdapTable provides you with full details of the cell which was
            clicked allowing you provide different menu items for when the grid
            is grouped or the current cell is a grouped node.
          </p>

          <p>
            When you define a MenuItem you can provide 3 functions that will be
            invoked by AdapTable:
          </p>
          <ul>
            <li>
              {' '}
              <a
                href="https://docs.adaptabletools.com/docs/user-interface/context-menu/#menu-item-onclick"
                target="_blank"
              >
                onClick
              </a>
              : What happens when the Menu Item is clicked
            </li>
            <li>
              {' '}
              <a
                href="https://docs.adaptabletools.com/docs/user-interface/context-menu/#menu-item-render"
                target="_blank"
              >
                shouldRender
              </a>
              : Whether the Menu Item should appear or not
            </li>
            <li>
              {' '}
              <a
                href="https://docs.adaptabletools.com/docs/user-interface/context-menu/#menu-item-label"
                target="_blank"
              >
                label
              </a>
              : What Label the Menu Item should have
            </li>
          </ul>
          <p>
            In this example we provided 3 Context Menu Items:
            <ul>
              <li>Float Dashboard</li>
              <li>
                Set System Status - which has a sub/menu containing other menu
                items
              </li>
              <li>
                Expand / Close Group - where the label changes based on the
                state of the row and which only appears in Grouped Rows
              </li>
            </ul>{' '}
          </p>
          <p>
            You can also choose which - if any - of the shipped Menu Items are
            available via the <b>showAdaptableContextMenu</b> property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
            </a>
            ; in this example we removed the <i>Filter</i> menu item for the
            'Employee' column and all the menu items for the 'Contact' column.
          </p>
          <p>
            The 2 arguments to the function are <i>AdaptableMenuItem</i> (the
            menu item to show) and <i>MenuContext</i> (which provides details of
            the current cell and cell selection).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/context-menu"
            target="_blank"
          >
            Context Menu Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/menu-options"
            target="_blank"
          >
            Menu Options
          </a>{' '}
        </div>
      }
    />
  );
};
