import React from 'react';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    // <Flex justifyContent={'center'} alignItems={'center'} gap={32} pt={24}>
    <Box textAlign='center' pt={8}>
      <Heading fontSize={{ base: '3xl', sm: '4xl' }} color={'gray.700'}>
        Oops! Page not found
      </Heading>
      <Image
        src='https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg'
        alt='PageNotFount'
        w={{ base: '80%', md: '70%', lg: '60%' }}
        m='auto'
        py={8}
      />

      <Box w={{ base: '80%', md: '60%', lg: '30%' }} m='auto'>
        <Text color={'gray.800'} fontSize={'lg'}>
          We're sorry, the page you are looking for may have been moved,
          deleted, or possibly never existed.
        </Text>
        <Button colorScheme={'teal'} onClick={() => navigate('/')} my={6}>
          Return to home
        </Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
