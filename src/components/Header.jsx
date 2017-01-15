import React from 'react';

import Box from 'grommet/components/Box';
import HeaderBar from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import Actions from 'grommet/components/icons/base/Actions';

import NavAnchor from './NavAnchor';

const Header = () => (
  <HeaderBar colorIndex="neutral-1" pad="small" justify="between" fixed={false} >
    <Title>Beach</Title>
    <Menu
      direction="row"
      dropAlign={{ right: 'right' }}
      inline
      >
      {/* <NavAnchor path="/" activeOnIndexOnly>Home</NavAnchor>
      <NavAnchor path="/users">Users</NavAnchor>
      <NavAnchor path="/clubs">Clubs</NavAnchor> */}
      <NavAnchor path="/tournaments">Tournaments</NavAnchor>
    </Menu>
  </HeaderBar>
);

// <Search
//   inline
//   fill
//   size="medium"
//   placeHolder="Search"
//   dropAlign={{ right: 'right' }}
//   />

export default Header;

