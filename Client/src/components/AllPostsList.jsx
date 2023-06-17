import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from './PostCard';
import { getPostFn } from '../redux/postReducer/action';
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from 'react';
import styled from "styled-components";


function AllPostList() {
    const posts = useSelector((store) => store.postReducer.posts);
    const token = useSelector((store) => store.authReducer.token);
    const dispatch = useDispatch()
    let limit = 3;

    useEffect(() => {
        dispatch(getPostFn(limit, token))
    }, [])

    return (
        <div>


            <DIV >

                {posts?.map((item) => {
                    return <PostCard key={item.id} {...item} />
                })}


            </DIV>
        </div>
    )
}

export default AllPostList;

const DIV = styled.div`
width: 70%;
/* margin-top:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:auto;
gap:8px; */
 `