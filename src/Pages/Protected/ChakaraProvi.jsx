import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const ChakaraProvi = () => {
  return (
    <ChakraProvider>
      <Outlet />
    </ChakraProvider>
  );
};

export default ChakaraProvi;
