import { Img, Box, Text, Heading, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import i1 from '../../assets/images/arrowhead-plant-leaves-lead-picture-00945875-florapress.jpg';
import i2 from '../../assets/images/pistachio-tree-pistachios-1073400154-istock.jpg';
import i3 from '../../assets/images/ixora-coccinea-flower-00921536-florapress.jpg';
import i4 from '../../assets/images/shrimp-plant-justicia-brandegeana-933680970-istock.jpg';
import i5 from '../../assets/images/kalanchoe-flaming-katy-2252484-blp-floradania.jpg';
import Cookies from 'js-cookie';

const Home = () => {
  const data = Cookies.get();
  return (
    <Box w={'80%'} margin={'auto'}>
      <Box mt={'30px'}>
        <Img
          src='https://www.mygarden.com/sites/default/files/styles/msg_teaser_full_1200/public/lavender-oil-istock-826296566.jpg?h=01990d67&itok=5HWQvw3I'
          borderRadius={'base'}
          m='auto'
        />
        <Flex
          direction='column'
          shadow={'xl'}
          p={'20px'}
          lineHeight='50px'
          textAlign='start'
          pl='40px'
        >
          <Heading size='xl' _hover={{ color: 'green' }} marginTop={'20px'}>
            Making lavender Oil :Preserve the Scent og the South
          </Heading>
          <Text size='20px'>
            Do you love lavender?You can process the fragrant in your garden
            into atomatic lavender oil,with this simple instruction
          </Text>
          <Box alignContent={'end'} w='100%' textAlign='end'>
            <Button
              colorScheme='teal'
              variant='outline'
              _hover={{
                bg: 'green.400',
                color: 'white'
              }}
            >
              {' '}
              Learn More <br /> <Icon as={ArrowForwardIcon} />
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box w='100%' p={'30px 0'} color='#6DB644' h='auto'>
        <Heading mb='15px'>Plants</Heading>
        <Flex gap='10px'>
          <Box w='62%'>
            <Img borderRadius='10px' src={i1}></Img>
          </Box>
          <Flex
            w='50%'
            className='plants'
            direction='row'
            flexWrap='wrap'
            gap='10px'
          >
            <Img borderRadius='10px' src={i2}></Img>
            <Img borderRadius='10px' src={i3}></Img>
            <Img borderRadius='10px' src={i4}></Img>
            <Img borderRadius='10px' src={i5}></Img>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
