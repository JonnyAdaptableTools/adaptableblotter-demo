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
            colours). You can see the css code{' '}
            <a
              href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/src/themes/dark.scss "
              target="_blank"
            >
              here
            </a>
            .
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_themestate_.themestate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_themeapi_.themeapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
        </div>
      }
    />
  );
};
