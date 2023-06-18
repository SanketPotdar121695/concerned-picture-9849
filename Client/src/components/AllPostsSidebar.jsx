import React from 'react'
import { Checkbox, Radio, RadioGroup, Text, Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'

import styled from 'styled-components';

export const AllPostsSidebar = () => {
    const [searchParams, setSearchParam] = useSearchParams();
    const initialCat = searchParams.getAll("category")
    const [category, setCategory] = useState(initialCat || "")
    const initRate = searchParams.get("orderRating")
    const [orderRating, setOrderRating] = useState(initRate || "")


    const handleCategory = (e) => {
        const { value } = e.target
        let newOwner = [...category]
        if (newOwner.includes(value)) {
            newOwner = newOwner.filter((el) => el !== value)
        }
        else {
            newOwner.push(value)
        }
        setCategory(newOwner);


    }




    return (
        <div >
            <Box mt={"30px"} shadow={"xl"} >

                <Box border='1px' borderColor="#c4d3e8" p={"10px"} shadow={"xl"} >

                    <Heading fontSize={20} p={"5px"} _hover={{ color: "green" }} padding={"10px"}>Filter by Category</Heading>
                    <Checkbox type='checkbox' value={category}
                        size='lg' colorScheme='green'>xyz</Checkbox>
                    <br />
                    <br />


                    <Checkbox type='checkbox'
                        size='lg' colorScheme='green' >zyz</Checkbox>

                    <br />

                </Box >
                <Box border='1px' borderColor="#c4d3e8" p={"10px"} mt={"50px"} shadow={"xl"} >

                    <Heading fontSize={20} p={"5px"} _hover={{ color: "green" }} padding={"10px"}>Sort by Rating</Heading>

                    <RadioGroup onChange={setOrderRating} value={orderRating}>
                        <Radio data-testid="sort-asc" value={"asc"} colorScheme='green' size='lg'>Ascending
                        </Radio>
                        <br />
                        <Radio
                            data-testid="sort-desc"

                            value={"desc"}
                            colorScheme='green' size='lg'
                        >Descending</Radio>
                    </RadioGroup>


                </Box>
            </Box>

        </div>
    )
}
