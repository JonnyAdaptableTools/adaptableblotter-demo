import React from 'react';
import Link from 'next/link';

const loadImage = (src: string) => {
  const image = typeof Image !== 'undefined' ? new Image() : { src: '' };
  image.src = src;
};

const light = '/images/Adaptable.png';
const dark = '/images/AdaptableWhite.png';
loadImage(light);
loadImage(dark);

export default (props: { dark: boolean }) => {
  return (
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
          src={props.dark ? dark : light}
          // src={'/images/AdaptableWhite.png'}
          style={{
            padding: 0,

            height: 60,
          }}
        />
      </a>
    </Link>
  );
};
