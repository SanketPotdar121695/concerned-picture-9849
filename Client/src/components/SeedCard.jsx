import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const SeedCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Image src={product.image} alt={product.title} />
      <Text mt={2} fontWeight="semibold">
        {product.title}
      </Text>
      <Text mt={1}>Price: ₹ {product.price}</Text>
      <Button mt={2} colorScheme="teal">
        Add to Cart
      </Button>
    </Box>
  );
};

export default SeedCard;
