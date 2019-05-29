import React, { ReactNode, HTMLAttributes } from 'react';

const GridLayout = ({
  children,
  ...props
}: {
  children: ReactNode;
  minBoxWidth?: number;
} & HTMLAttributes<HTMLElement>) => {
  const minBoxWidth = props.minBoxWidth || 220;

  return (
    <div
      {...props}
      style={{
        display: 'grid',
        padding: 20,
        gridGap: 20,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}px, 1fr))`,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
