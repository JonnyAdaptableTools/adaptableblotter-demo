import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggriddarkthemedemo')}
      pageTitle={'Dark Theme Demo'}
      description={
        <>
          <h4>Dark Theme Demo</h4>
          <p>
            This demo shows how you can theme the Adaptable Blotter using the
            shipped 'Dark Theme'. You can select this as your theme in the Theme
            State.
          </p>
          <p>
            When you use this theme (or the Light Theme) the Adaptable Blotter
            will automatically update the theme of the vendor grid to match your
            choice.
          </p>
          <p>
            The Adaptable Blotter manages theming through{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              target="_blank"
            >
              CSS variables
            </a>
            ; we created the Dark Theme just by setting a few properties (mainly
            colours). You can see the css code{' '}
            <a
              href="https://github.com/AdaptableTools/adaptableblotter/blob/dev/packages/adaptableblotter/App_Scripts/themes/dark.scss"
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
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_themestate_.themestate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_themeapi_.themeapi.html"
              target="_blank"
            >
              Adaptable API
            </a>{' '}
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005211-Theme-Picker-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </>
      }
    />
  );
};
