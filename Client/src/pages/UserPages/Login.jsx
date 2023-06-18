import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios"
import { Link as LinkNav, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from '../../redux/authReducer/action';
import { useNavigate, useLocation } from "react-router-dom";

export default function SimpleCard() {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const auth = useSelector((store) => store.authReducer.isAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      first_name,
      last_name,
      email,
      password
    }
    console.log("auth before ", auth)
    dispatch(Login(userDetails)).then((res) => {
      if (res.payload) {
        localStorage.setItem("token", res.payload.token)
        if (location.state) {
          navigate(location.state)
        } else {
          navigate("/")
        }
      } else {
        alert("please Sign up")
      }
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Box hidden="true">
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
              </FormControl>
            </Box>
            <Box hidden='true'>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
              </FormControl>
            </Box>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'green.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={handleSubmit}
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500'
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}