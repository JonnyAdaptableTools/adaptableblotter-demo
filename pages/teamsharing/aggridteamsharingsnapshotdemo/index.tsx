import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/teamsharing/aggridteamsharingsnapshotdemo'
      )}
      pageTitle={'Team Sharing Snapshot Demo'}
      description={
        <div>
          <p>
            Team Sharing allows users to share - at run-time - Adaptable Objects
            between colleagues. It is configued in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/team-sharing-options"
              target="_blank"
            >
              Team Sharing Options
            </a>
            .
          </p>
          <p>
            It is designed for use cases where the same, newly-created Adaptable
            Object (e.g. a Layout, Conditional Style, Shared Query, Report etc.)
            will be required by multiple users.
          </p>
          <p>
            If the object being shared references other objects (e.g. a Layout
            references a Calculated Column which references a Named Query) then
            all the objects in the tree are shared.
          </p>{' '}
          <p>
            Team Sharing works by a User <b>uploading</b> an object to the Team
            Share from where it can then be <b>downloaded</b> by colleagues.
          </p>
          <p>There are 2 types of Team Sharing:</p>
          <ul>
            <li>
              <b>Snapshot</b>: The object is shared once and then any changes
              made (either by uploader or downloaders) are unique to that user
              only.
            </li>
            <li>
              <b>Active</b>: A "Live" Share which will get automatically updated
              with every local change (see{' '}
              <a href="./aggridteamsharingactivesharedemo">this demo</a> )
            </li>
          </ul>
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
          <a href="https://youtu.be/cBdTaIImNhw" target="_blank">
            Team Sharing Video
          </a>{' '}
        </div>
      }
    />
  );
};
