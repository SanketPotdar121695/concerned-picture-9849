import { Img, Box, } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box w={"80%"} margin={"auto"} mt={"30px"}  >

      <Img src="https://www.mygarden.com/sites/default/files/styles/msg_teaser_full_1200/public/lavender-oil-istock-826296566.jpg?h=01990d67&itok=5HWQvw3I"
        borderRadius={"base"} />
      <Box>
        <h1>Making lavender Oil :Preserve the Scent og the South</h1>
      </Box>

    </Box>
  )
};

export default Home;
