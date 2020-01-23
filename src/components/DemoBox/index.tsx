import React, { ReactNode } from 'react';
import Link from 'next/link';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img
            src={'/images/Adaptable.png'}
            style={{ maxWidth: '80%', marginBottom: '5%' }}
          />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default DemoBox;
