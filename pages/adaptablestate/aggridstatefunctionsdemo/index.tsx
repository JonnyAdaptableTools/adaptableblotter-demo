import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptablestate/aggridstatefunctionsdemo'
      )}
      pageTitle={'State Functions Demo'}
      description={
        <div>
          {' '}
          <div>
            <p>
              By default all AdaptableState (both design time through Predefined
              Config and run-time through grid activity) is persisted in
              localStorage, and AdapTable manages the saving and fetching as
              required.
            </p>
            <p>
              However - as this example illustrates - by leveraging the{' '}
              <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options">
                State Options
              </a>{' '}
              you can persist state to a remote datastore (which we do here to
              Firebase).
            </p>
            <p>There are 4 methods in State Options that you can use:</p>

            <ul>
              <li>
                <b>
                  <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options#loadstate">
                    loadState
                  </a>
                </b>
                : Allows the customization of state loading.
              </li>
              <li>
                <b>
                  <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options#applystate">
                    applyState
                  </a>
                </b>
                : Allows hooking into AdaptableState hydration
              </li>
              <li>
                <b>
                  <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options#saveState">
                    saveState
                  </a>
                </b>
                : Allows the customization of the state that is going to be
                persisted
              </li>
              <li>
                <b>
                  {' '}
                  <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options#persistState">
                    persistState
                  </a>
                </b>
                : Allows the customization of state persistence
              </li>
            </ul>
            <p>
              In this demo we provide implementations for the <b>loadState</b>{' '}
              and <b>persistState</b> functions to save State in Firebase
              instead of localStorage.
            </p>
            <p>
              Note: The configuration below is shared with everyone who uses
              this page. So you can open another browser tab at this url and
              play around with the AdapTable instance below in one tab (e.g. add
              searches, change layout, etc). Then if you reload the other tab
              everything should be synchronized and pick things up from where
              they were in the initial tab.
            </p>
          </div>
          <div className="js-firebasePrefix"></div>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/state-guide"
            target="_blank"
          >
            Adaptable State Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/predefined-config-overview"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a href="https://docs.adaptabletools.com/docs/adaptable-options/state-options">
            State Options
          </a>{' '}
        </div>
      }
    />
  );
};
