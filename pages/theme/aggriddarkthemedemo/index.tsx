import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggriddarkthemedemo')}
      pageTitle={'Dark Theme Demo'}
      description={
        <div>
          {' '}
          <p>
            This demo shows how you can theme AdapTable using the shipped 'Dark
            Theme'. You can select this as your theme in the Theme State.
          </p>
          <p>
            When you use this theme (or the Light Theme) AdapTable will
            automatically update the theme of the vendor grid to match your
            choice.
          </p>
          <p>
            AdapTable manages theming through{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              target="_blank"
            >
              CSS variables
            </a>
            ; we created the Dark Theme just by setting a few properties (mainly
            colours).
          </p>
          <p>
            You can create your own themes based on this or others (see the
            other demos in this section).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/theme-config"
            target="_blank"
          >
            Theme Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/theme-api"
            target="_blank"
          >
            Theme Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/theme-function"
            target="_blank"
          >
            Theme Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/theming-and-styling"
            target="_blank"
          >
            Adaptable Theming Guide
          </a>{' '}
        </div>
      }
    />
  );
};
