import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridteamsharingdemo')}
      pageTitle={'Team Sharing Demo'}
      description={
        <div>
          <p>
            Team Sharing allows users to share - at run-time - Adaptable Objects
            between colleagues.
          </p>
          <p>
            It is designed for use cases where the same, newly-created Adaptable
            Object (e.g. a Layout, Conditional Style, Shared Query, Report etc.)
            will be required by multiple users.
          </p>
          <p>
            Team Sharing is based on a based pull-based workflow as the
            following example demonstrates:
          </p>
          <ol>
            <li>A User creates a new Layout </li>
            <li>
              In the Layouts Popup an orange Team Share button will appear in
              the row for the Layout (if <i>enableTeamSharing</i> is set to true
              in{' '}
              <a
                href="https://docs.adaptabletools.com/docs/adaptable-options/team-sharing-options"
                target="_blank"
              >
                Team Sharing Options
              </a>
              ){' '}
            </li>
            <li>
              After this button is clicked, the Layout will be in the Team
              Sharing collection (available for download by colleagues){' '}
            </li>
            <li>
              Any colleague can now open the Team Sharing Popup (which lists all
              available Adaptable Objects that have been shared) and click to
              download the Layout created in Step 1.{' '}
            </li>
          </ol>
          <p>
            Setting up Team Sharing requires the provision at design-time of 2
            functions (both of which return Promises, and both of which are
            supplied through Team Sharing Options):
            <ul>
              <li>
                <b>
                  {' '}
                  <a
                    href="https://docs.adaptabletools.com/docs/api/teamsharingoptions#getsharedentities"
                    target="_blank"
                  >
                    getSharedEntities
                  </a>
                </b>
                : retrieves any available Shared Entities that the user is able
                to download (and which AdapTable will then merge automatically
                with his Adaptable State)
              </li>
              <li>
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/api/teamsharingoptions#setsharedentities"
                    target="_blank"
                  >
                    setSharedEntities
                  </a>
                </b>
                : saves (essentially uploads) Shared Entities so they can be
                downloaded (and re-used) by other members of the team
              </li>
            </ul>
          </p>
          <div className="js-adaptable-config"></div>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/team-sharing"
            target="_blank"
          >
            Team Sharing Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/team-sharing-options"
            target="_blank"
          >
            Team Sharing Options
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/bPb1PQtyjlQ" target="_blank">
            Team Sharing Video
          </a>{' '}
        </div>
      }
    />
  );
};
