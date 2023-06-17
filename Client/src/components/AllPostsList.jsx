import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from './PostCard';
import { getPostFn } from '../redux/postReducer/action';
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from 'react';
import styled from "styled-components";


function AllPostList() {
    const data = useSelector((store) => store.postReducer
        .posts);
    const dispatch = useDispatch()
    let limit = 3;

    useEffect(() => {
        dispatch(getPostFn(limit))

    }, [])

    return (
        <div>
            <Box bg='green.200' width={'98%'} margin={'auto'}>
                <Text color={'red'} fontSize={"25px"} ml='3px' mt={"20px"} fontFamily={'monospace'} >Popular Posts</Text>
            </Box>

            <DIV>
                {data?.map((item) => {
                    return <PostCard key={item.id} {...item} />
                })}


            </DIV>
        </div>
    )
}

export default AllPostList;

const DIV = styled.div`
margin-top:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:auto;
gap:8px;
 `