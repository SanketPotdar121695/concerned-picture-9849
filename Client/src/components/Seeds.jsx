import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SeedCard from './SeedCard';
import { Grid } from '@chakra-ui/react';

export const Seedslist = () => {
  const [products, setProducts] = useState([]);

  // console.log(products)
  useEffect(() => {
    
    axios.get(`https://easy-red-pigeon-tutu.cyclic.app/seeds`)
      .then(res => {
        // console.log(res.data)
        setProducts(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
     <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
      gap={{ base: 4, md: 6, lg: 8 }} 
      padding={{ base: 4, md: 6, lg: 8 }} 
    >
      {products.map(product => (
        <SeedCard key={product.id} product={product} />
      ))}
    </Grid>
    </>
  )
}
