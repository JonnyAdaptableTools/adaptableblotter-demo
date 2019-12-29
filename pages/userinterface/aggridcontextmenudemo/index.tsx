import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridcontextmenudemo')}
      pageTitle={'Context Menu Demo'}
      description={
        <div>
          <h4>Context Menu Demo</h4>
          <p>
            The Adaptable Blotter provides a Context Menu - accessible when you
            right-click in a cell - which includes shortcuts to functionality
            relevant to that cell (and what is selected).
          </p>
          <p>
            You can add your own{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_userinterfacestate_.usermenuitem.html"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Context Menu - through{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              User Interface State
            </a>
            ; in this example we added 'Minimise Dashboard' and 'Set System
            Status' menu items (with the latter having sub menu items).
          </p>
          <p>
            You can also choose which - if any - of the shipped Menu Items are
            available via the <b>showAdaptableContextMenu</b> property of{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_blotteroptions_userinterfaceoptions_.userinterfaceoptions.html#showadaptablecontextmenu"
              target="_blank"
            >
              User Interface Options
            </a>
            ; in this example we removed the <i>Column Chooser</i> menu item for
            the 'Employee' column and all the menu items for the 'Contact'
            column.
          </p>
          <p>
            The 2 arguments to the function are{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_common_menu_.adaptablemenuitem.html"
              target="_blank"
            >
              Adaptable Menu Item
            </a>{' '}
            (the menu item to show) and{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_common_menu_.menuinfo.html"
              target="_blank"
            >
              Menu Info
            </a>{' '}
            (which provides details of the current cell and cell selection).
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_userinterfaceapi_.userinterfaceapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_blotteroptions_userinterfaceoptions_.userinterfaceoptions.html"
              target="_blank"
            >
              User Interface Options
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004751-Look-and-Feel-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754438-UI-Elements"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
