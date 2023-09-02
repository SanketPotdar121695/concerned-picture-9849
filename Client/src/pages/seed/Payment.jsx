import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Select,
    VStack,
  } from "@chakra-ui/react";
  import {  useNavigate } from "react-router-dom";
  import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { useState } from "react";
  
  const Payment = () => {

    const [name, setName] = useState("");
    const [cvv, setCvv] = useState("");
    const [card, setCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate()
  
    const handleClick = () => {
     navigate("/");
    };
  
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(135deg, #FF5722 , #F4511E)"
      >
        <Box
          maxW="750px"
          height="600px"
          backgroundColor="white"
          display="flex"
          flexDirection="column"
          padding="40px"
          justifyContent="space-around"
          boxShadow="0 5px 10px rgba(0,0,0,0.15)"
        >
          <Heading fontSize="25px" fontWeight="500" mb="20px">
            Confirm your Payment
          </Heading>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>
                Name of the card holder <span className="star">*</span>
              </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                CVV<span className="star">*</span>
              </FormLabel>
              <Input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                Card Number <span className="star">*</span>
              </FormLabel>
              <Input
                type="text"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                Expiry Date <span className="star">*</span>
              </FormLabel>
              <Select
                name="months"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="Jan">Jan</option>
              </Select>
              <Select
                name="years"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2023">2023</option>
              </Select>
            </FormControl>
            <Button
              onClick={handleClick}
              colorScheme="blue"
              marginTop="20px"
              width="100%"
            >
              Confirm
            </Button>
          </VStack>

          <Box display="flex" justifyContent="space-around" marginTop="20px">
            <FaCcMastercard size={40} />
            <FaCcVisa size={40} />
            <FaCcPaypal size={40} />
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Payment;
  