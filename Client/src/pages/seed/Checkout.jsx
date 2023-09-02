import { Button, Box, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payment");
  };

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center" padding="10px" background="linear-gradient(135deg, #FF5722 , #F4511E)">
      <Box maxW="800px" height="100%" backgroundColor="#fff" p="25px 30px" borderRadius="5px" boxShadow="0 5px 10px rgba(0,0,0,0.15)">
        <Heading fontSize="25px" fontWeight="500">Address Details</Heading>
        <VStack as="form" spacing={4} mt="20px" onSubmit={handleClick}>
          <FormControl>
            <FormLabel>Flat No./House Name <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Enter your House Name" required />
          </FormControl>
          <FormControl>
            <FormLabel>Locality <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Enter Locality" required />
          </FormControl>
          <FormControl>
            <FormLabel>City <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Enter City" required />
          </FormControl>
          <FormControl>
            <FormLabel>District <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Enter your password" required />
          </FormControl>
          <FormControl>
            <FormLabel>State <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Confirm your State" required />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number <span className="star">*</span></FormLabel>
            <Input type="text" placeholder="Confirm your mob. Number" required />
          </FormControl>
          <Button type="submit" colorScheme="blue">Proceed to Payment</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Checkout;
