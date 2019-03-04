import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../button/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export interface IMenuItem {
  label: string;
  key: string;
}
export interface IMenuProps {
  items: IMenuItem[];
}

export const Menu = (props: IMenuProps) => {
  const {
    items,
  } = props;

  return (
    <Wrapper>
      <div>
        {items.map(item => (
          <Button key={item.key}>{item.label}</Button>
        ))}
      </div>
    </Wrapper>
  );
};
