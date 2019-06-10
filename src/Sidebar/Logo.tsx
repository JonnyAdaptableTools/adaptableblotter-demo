import React from 'react';
import Link from 'next/link';
import logo from '../../images/AdaptableBlotter.png';

export default () => (
  <div
    style={{ position: 'relative', paddingBottom: 120, background: 'white' }}
  >
    <Link href="/">
      <a
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          style={{
            padding: 10,
            maxWidth: '100%',
            maxHeight: '100%',

            position: 'absolute',
            top: 0,
          }}
        />
      </a>
    </Link>
  </div>
);
