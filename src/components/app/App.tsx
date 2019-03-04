import * as React from 'react';
import styled from 'styled-components';
import { Menu, IMenuItem } from '../menu/Menu';

const AppWrapper = styled.div`
  height: 100%;
`;

export const App = () => {
  const items: IMenuItem[] = [{
    label: 'Generate map',
    key: 'generate',
  }];

  return (
    <AppWrapper>
      <Menu
        items={items}
      />
    </AppWrapper>
  );
};
