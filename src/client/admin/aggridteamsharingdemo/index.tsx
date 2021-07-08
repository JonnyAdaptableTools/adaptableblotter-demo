import { useEffect } from 'react';

import demo from './demo';
import { v4 as uuidv4 } from 'uuid';
import * as ReactDOM from 'react-dom';

const FIREBASE_STATE_KEY = 'firebaseprefix-state';
const FIREBASE_TEAMSHARING_KEY = 'firebaseprefix-teamsharing';
const firebasePrefix = {
  [FIREBASE_STATE_KEY]: localStorage.getItem(FIREBASE_STATE_KEY) || uuidv4(),
  [FIREBASE_TEAMSHARING_KEY]:
    localStorage.getItem(FIREBASE_TEAMSHARING_KEY) || uuidv4(),
};

const updateFirebase = (
  key: typeof FIREBASE_STATE_KEY | typeof FIREBASE_TEAMSHARING_KEY,
  prefix: string
) => {
  localStorage.setItem(key, prefix);
  firebasePrefix[key] = prefix;
};

let user = localStorage.getItem('teamsharing-demo-user') || 'Demo User';
const updateUser = (username: string) => {
  localStorage.setItem('teamsharing-demo-user', username);
};

updateFirebase(FIREBASE_STATE_KEY, firebasePrefix[FIREBASE_STATE_KEY]);
updateFirebase(
  FIREBASE_TEAMSHARING_KEY,
  firebasePrefix[FIREBASE_TEAMSHARING_KEY]
);
updateUser(user);

const renderConfigInput = (props: {
  label: string;
  value: string;
  onValueChange: (v: string) => void;
}) => {
  return (
    <div>
      <label
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          marginTop: '0.5rem',
        }}
      >
        <span style={{ width: '15rem' }}>{props.label}:</span>
        <input
          style={{ marginLeft: '1rem', width: '25rem', padding: '0.5rem' }}
          defaultValue={props.value}
          onChange={e => props.onValueChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default (props: { onReady?: (config: any) => void }) => {
  useEffect(() => {
    demo().then(result => {
      if (props.onReady) {
        props.onReady(result);
      }
    });

    const nodeConfig = document.querySelector('.js-adaptable-config');

    if (!nodeConfig) {
      return;
    }

    ReactDOM.render(
      <>
        {renderConfigInput({
          label: 'Username',
          value: user,
          onValueChange: v => (user = v),
        })}
        {renderConfigInput({
          label: 'State Firebase Prefix',
          value: firebasePrefix[FIREBASE_STATE_KEY],
          onValueChange: v => (firebasePrefix[FIREBASE_STATE_KEY] = v),
        })}
        {renderConfigInput({
          label: 'Teamsharing Firebase Prefix',
          value: firebasePrefix[FIREBASE_TEAMSHARING_KEY],
          onValueChange: v => (firebasePrefix[FIREBASE_TEAMSHARING_KEY] = v),
        })}

        <div>
          <label
            style={{
              display: 'flex',
              flexFlow: 'row',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <span style={{ width: '15rem' }}></span>
            <button
              style={{ marginLeft: '1rem', padding: '0.5rem' }}
              onClick={() => {
                updateFirebase(
                  FIREBASE_STATE_KEY,
                  firebasePrefix[FIREBASE_STATE_KEY]
                );
                updateFirebase(
                  FIREBASE_TEAMSHARING_KEY,
                  firebasePrefix[FIREBASE_TEAMSHARING_KEY]
                );
                updateUser(user);
                window.location.href = window.location.href;
              }}
            >
              Update config & refresh
            </button>
            <button
              style={{ marginLeft: '1rem', padding: '0.5rem' }}
              onClick={() => {
                updateFirebase(FIREBASE_STATE_KEY, uuidv4());
                updateFirebase(FIREBASE_TEAMSHARING_KEY, uuidv4());
                updateUser('Demo User');
                window.location.href = window.location.href;
              }}
            >
              Reset & refresh
            </button>
          </label>
        </div>
      </>,
      nodeConfig
    );
  }, []);

  return null;
};
