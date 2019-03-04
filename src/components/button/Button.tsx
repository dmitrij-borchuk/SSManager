import * as React from 'react';
import { ReactNode } from 'react';
// import styled from 'styled-components';

export interface IMenuProps {
  children: ReactNode;
}

export const Button = (props: IMenuProps) => {
  const {
    children,
  } = props;

  return (
    <button>
      {children}
    </button>
  );
};
