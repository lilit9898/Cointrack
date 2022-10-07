import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../components/AppHeader/AppHeader';

const MainLayout: React.FC<BoxProps> = ({ children, ...style }) => {

  const { exchangeList} = useSelector()

  return (
    <Box>
      <AppHeader />
      {children}
      {/* <AppFooter /> */}
    </Box>
  );
};

export default MainLayout