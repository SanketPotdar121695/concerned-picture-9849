import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Icon, Img, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

export const PostCard = ({ title, image, category, rating, id }) => {
    const navigate = useNavigate();
    return (
        <Flex shadow={"lg"} borderRadius="1rem" mt="20px" mb="20px" width={"100%"}>
            <Img w="280px" borderLeftRadius="1rem" src={image} />
            <Flex direction="column" ml="50px" textAlign="start" pr="30px" mt="70px" width={"100%"}>
                <Text className='post-card-text' _hover={{
                    bg: 'green.500'
                }}>{category}</Text>
                <Heading _hover={{ color: "green" }} >{title}</Heading>
                <Flex alignItems={"center"}>
                    <Text size={"20px"}>Rating : {rating}</Text>
                    <Button onClick={() => navigate(`/singlepost/:${id}`)} mt="10px" ml="auto" mb="20px" colorScheme='teal' w="130px" variant='outline' _hover={{
                        bg: 'green.400', color: "white"
                    }} > Learn More  <br /> <Icon as={ArrowForwardIcon} /></Button></Flex>
            </Flex>
        </Flex>
    )
}


