import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <Box
      width='100%'
      display='flex'
      h='100vh'
      alignItems='center'
      justifyContent='center'
      margin='auto'
      // bg={'blackAlpha.900'}
    >
      <Spinner
        thickness='5px'
        speed='2s'
        emptyColor='white'
        color='blue.500'
        size='lg'
        boxSize='100px'
      />
    </Box>
  );
};

export default Loading;
