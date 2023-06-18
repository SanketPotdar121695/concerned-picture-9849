import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Icon, Img, Text } from '@chakra-ui/react'
import React from 'react'

export const PostCard = ({ title, image, category }) => {
    return (
        <Flex width="100%" shadow={"dark-lg"} w="fit-content" borderRadius="1rem" mt="20px" mb="20px">
            <Img w="280px" borderLeftRadius="1rem" src={image} />
            <Flex direction="column" ml="50px" textAlign="start" pr="30px" mt="70px">
                <Text className='post-card-text'>{category}</Text>
                <Heading _hover={{ color: "green" }} >{title}</Heading>
                <Button mt="10px" ml="auto" mb="20px" colorScheme='teal' w="130px" variant='outline' _hover={{
                    bg: 'green.400', color: "white"
                }} > Learn More  <br /> <Icon as={ArrowForwardIcon} /></Button>
            </Flex>
        </Flex>
    )
}


