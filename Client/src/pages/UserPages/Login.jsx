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
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as LinkNav, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/authReducer/action';
import { useNavigate, useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';

export default function SimpleCard() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, isLoading, isError } = useSelector(
    (store) => store.authReducer
  );

  // Cookies.remove("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      email,
      password
    };

    dispatch(Login(userDetails)).then((res) => {
      if (res.payload.status === 400) {
        toast({
          title: res.payload.data.error || res.payload.message || '',
          description: res.payload.data.description || '',
          status: 'error',
          duration: 5000,
          isClosable: false
        });
      } else {
        toast({
          title: res.payload.data.message,
          status: 'success',
          duration: 5000,
          isClosable: false
        });
        navigate('/');
      }
    });
  };

  // console.log(token);

  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
              mt={6}
              mb={10}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'green.400'}>Forgot password?</Link>
            </Stack>

            <Button
              w={'100%'}
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500'
              }}
              type='submit'
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
