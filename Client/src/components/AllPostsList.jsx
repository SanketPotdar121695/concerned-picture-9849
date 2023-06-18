import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from './PostCard';
import { getPostFn } from '../redux/postReducer/action';
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useEffect } from 'react';
import styled from "styled-components";
import { AllPostsSidebar } from './AllPostsSidebar';
import { useSearchParams } from 'react-router-dom';


function AllPostList() {
    const posts = useSelector((store) => store.postReducer.posts);
    const token = useSelector((store) => store.authReducer.token);
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    let limit = 3;

    let obj = {
        params: {
            category: searchParams.getAll("category"),
            _sort: searchParams.get("orderRating") && "rating",
            _order: searchParams.get("orderRating")
        }
    }

    useEffect(() => {
        dispatch(getPostFn(searchParams.toString(), token))
    }, [searchParams])

    return (
        <div>



            <Flex gap={"80px"}>

                <Box w={"22%"}  >
                    <AllPostsSidebar />
                </Box>

                <Box w={"78%"}>
                    <DIV>
                        {posts?.map((item) => {
                            return <PostCard key={item.id} title={item.title} rating={item.rating} category={item.category} image={item.cover_image} />
                        })}
                    </DIV>

                </Box>




            </Flex>
        </div>
    )
}

export default AllPostList;

const DIV = styled.div`
margin:auto;
margin-top:20px;
margin-left: 0;
width: 80%;
/* display:grid;
grid-template-columns:repeat(2,1fr);
gap: 5px;
grid-template-rows:auto; */

@media  all and (max-width: 425.5px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and  (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}

`
