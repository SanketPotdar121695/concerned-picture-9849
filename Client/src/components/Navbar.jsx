import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useToast
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons';
import { Link as LinkNav, NavLink, useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../redux/authReducer/action';
import Cookies from 'js-cookie';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const { isAuth: auth, userDetails } = useSelector(
    (store) => store.authReducer
  );
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(Logout()).then((res) => {
      console.log(res);
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

  return (
    <Box boxShadow={'xl'} mt={'3px'}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          alignItems={'center'}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems={'center'}
        >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <LinkNav to={'/'}>
              <Image src={'./project_logo.jpeg'} w={'60px'} />
            </LinkNav>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Input type='search' w={'30%'} />
        </Flex>

        {auth ? (
          <Menu>
            <MenuButton>
              {/* Hi, {userDetails.username.split(' ')[0]} */}
              <Avatar bg='green.200' name={userDetails.username} />
            </MenuButton>
            <MenuList>
              <MenuItem bg={'none'} cursor='auto'>
                Hi, {userDetails.username.split(' ')[0]} !!!
              </MenuItem>
              <MenuItem onClick={() => navigate("/addpost")}>Create New Blog</MenuItem>
              <MenuItem onClick={() => navigate('/profile')}>
                Your Profile
              </MenuItem>
              {userDetails.isAdmin ? (
                <MenuItem onClick={() => navigate('/admin')}>
                  Admin Panel
                </MenuItem>
              ) : (
                <></>
              )}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>

            </MenuList>
          </Menu>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
              <LinkNav to={'/login'}>Sign In</LinkNav>
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              colorScheme={'whatsapp'}
            >
              <LinkNav to={'/signup'}>Sign Up</LinkNav>
            </Button>
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: 'green'
                }}
              >
                {/* _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}> */}

                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green' }}
            fontWeight={800}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      _hover={{
        textDecoration: 'none',
        color: 'green'
      }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} fontWeight={800} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          color: 'green'
        }}
      >
        <Text
          fontWeight={800}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Gardening Practise',
    children: [
      {
        label: 'Ornamental Garden',

        href: '#'
      },
      {
        label: 'Indoor',

        href: '#'
      }
    ]
  },
  {
    label: 'House Plant'
  },
  {
    label: 'Perennials',
    href: '#'
  },
  {
    label: 'Trees & Shrubs',
    href: '#'
  },
  {
    label: 'Seeds',
    href: '/seeds'
  }
];




