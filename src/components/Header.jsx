import React from 'react';

import Box from 'grommet/components/Box';
import HeaderBar from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import Actions from 'grommet/components/icons/base/Actions';

import NavAnchor from './NavAnchor';

const Header = () => (
  <HeaderBar pad="small">
    <Title>
      Beach
  </Title>
    <Box
      flex
      justify="end"
      direction="row"
      responsive={false}
      >
      <Search
        inline
        fill
        size="medium"
        placeHolder="Search"
        dropAlign={{ right: 'right' }}
        />
      <Menu
        inline
        direction="row"
        icon={<Actions />}
        dropAlign={{ right: 'right' }}
        >
        <NavAnchor path="/" activeOnIndexOnly>Home</NavAnchor>
        <NavAnchor path="/users">Users</NavAnchor>
        <NavAnchor path="/teams">Teams</NavAnchor>
        <NavAnchor path="/tournaments">Tournaments</NavAnchor>
      </Menu>
    </Box>
  </HeaderBar>
);

export default Header;

