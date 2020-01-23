import React from 'react';
import Link from 'next/link';

export default () => (
  <Link href="/">
    <a
      style={{
        // position: 'absolute',
        // height: '100%',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={'/images/Adaptable.png'}
        style={{
          padding: 0,

          height: 60,
        }}
      />
    </a>
  </Link>
);
