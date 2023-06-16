import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,

} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as LinkNav, NavLink } from "react-router-dom";
import axios from "axios"

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")


  const handleSubmit = () => {
    let payload = { first_name, last_name, email, password, age, city, gender, isAdmin: false }
    // console.log(payload)
    axios.post("https://garden-guru.cyclic.app/users/register", payload).then((res) => {
      console.log(res)
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={3}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPass(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </FormControl>
            <FormControl id="City" isRequired>
              <FormLabel>City</FormLabel>
              <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </FormControl>
            <FormControl id="City" isRequired>
              <FormLabel></FormLabel>
              <Select placeholder='Gender' onChange={(e) => setGender(e.target.value)}>
                <option value='option1' >male</option>
                <option value='option2'>female</option>
                <option value='option3'>other</option>
              </Select>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                <LinkNav color={'green.400'} to={"/login"}> Sign up</LinkNav>

              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <LinkNav color={'green.400'} to={"/login"}>Login</LinkNav>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}