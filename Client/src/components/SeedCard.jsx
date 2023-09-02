import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import axios from "axios"

const SeedCard = ({ product }) => {

  const handleAdd = () => {
    // console.log(product)
  
    axios.post("https://easy-red-pigeon-tutu.cyclic.app/seeds/cartadd", {
      image: product.image,
      title:product.title,
      price:product.price 
    })
      .then(res => {
        // console.log("Added to cart", res.data);
        alert("Product added to the cart")
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Image src={product.image} alt={product.title} 

      />
      <Text mt={2} fontWeight="semibold">
        {product.title}
      </Text>
      <Text mt={1}>Price: ₹ {product.price}</Text>
      <Button mt={2} colorScheme="teal" 
      onClick={handleAdd}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default SeedCard;
