import { Box, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
  return (
    <Box
      width='100%'
      display='flex'
      h='100vh'
      alignItems='flex-start'
      justifyContent='center'
      margin='auto'
      mt={12}
      // bg={'blackAlpha.900'}
    >
      <Heading color={'red.500'} size={{ base: 'md', sm: 'lg' }}>
        Oops! Something went wrong!
      </Heading>
    </Box>
  );
};

export default Error;
