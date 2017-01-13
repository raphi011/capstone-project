import React from 'react';

import Box from 'grommet/components/Box';
import HeaderBar from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import Actions from 'grommet/components/icons/base/Actions';

import NavAnchor from './NavAnchor';

const Header = () => (
  <HeaderBar colorIndex="neutral-1" pad="small">
    <Title>
      Beach
  </Title>
    <Box
      flex
      justify="end"
      direction="row"
      responsive={false}
      >
      <Menu
        inline
        direction="row"
        icon={<Actions />}
        dropAlign={{ right: 'right' }}
        >
        <NavAnchor path="/" activeOnIndexOnly>Home</NavAnchor>
        <NavAnchor path="/users">Users</NavAnchor>
        <NavAnchor path="/clubs">Clubs</NavAnchor>
        <NavAnchor path="/tournaments">Tournaments</NavAnchor>
      </Menu>
    </Box>
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

