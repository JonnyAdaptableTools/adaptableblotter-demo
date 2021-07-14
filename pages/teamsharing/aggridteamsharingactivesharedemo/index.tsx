import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/teamsharing/aggridteamsharingactivesharedemo'
      )}
      pageTitle={'Team Sharing Active Share Demo'}
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

          <p>There are 2 types of Team Sharing:</p>
          <ul>
            <li>
              <b>Snapshot</b>: The object is shared once and then any changes
              made (either by uploader or downloaders) are unique to that user
              only - see <a href="./aggridteamsharingsnapshotdemo">this demo</a>
            </li>
            <li>
              <b>Active</b>: A "Live" Share which will get automatically updated
              with every local change
            </li>
          </ul>
          <p>
            Active Team Sharing ensures that any object which is shared remains
            'live'.
          </p>
          <p>
            Any change which any user makes (whether intial uploader or a
            downloader) is available to the rest of the team{' '}
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
