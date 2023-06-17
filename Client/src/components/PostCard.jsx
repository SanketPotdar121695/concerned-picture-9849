import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Icon, Img, Text } from '@chakra-ui/react'
import React from 'react'

export const PostCard = () => {
    return (
        <Flex width="100%" shadow={"2xl"} w="fit-content" borderRadius="1rem">
            <Img w="280px" borderLeftRadius="1rem" src='./images/kalanchoe-flaming-katy-2252484-blp-floradania.jpg' />
            <Flex direction="column" ml="50px" textAlign="start" pr="30px" mt="70px">
                <Text className='post-card-text'>test test</Text>
                <Heading>cahc j jc kj ajkcja kjca kjc akj ckjas c</Heading>
                <Button mt="auto" ml="auto" mb="20px" colorScheme='teal' w="130px" variant='outline' _hover={{
                    bg: 'green.400', color: "white"
                }} > Learn More  <br /> <Icon as={ArrowForwardIcon} /></Button>
            </Flex>
        </Flex>
    )
}


