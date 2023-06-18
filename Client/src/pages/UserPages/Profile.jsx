import {
  Box,
  HStack,
  Heading,
  Text,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { RiHome4Line } from "react-icons/ri";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallpostUser } from "../../redux/postReducer/action";
import PostRow from "../../components/PostRow";
const Profile = () => {
  const data = useSelector((store) => store.postReducer.posts);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallpostUser());
  }, []);

  const deletePost = () => {};
  const updatePost = () => {};
  return (
    <Box>
      <HStack p={"20px"} alignItems={"center"}>
        <RiHome4Line size={"20px"} />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/profile">Proflie</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <Box>
        <HStack
          p={"10px"}
          alignItems={"center"}
          w={"100%"}
          h={"30vh"}
          justifyContent={"left"}
          gap={"20px"}
        >
          {" "}
          {data[0]?.author ? (
            <Avatar size="xl" name={data[0]?.author} />
          ) : (
            <></>
          )}
          {data[0]?.author ? (
            <Heading as={"h3"}>{data[0]?.author}</Heading>
          ) : (
            <></>
          )}
        </HStack>
        <Box>
          {/* table */}
          <Heading as={"h2"} p={"10px"}>
            Your Blogs
          </Heading>
          <Box>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Category</Th>
                    <Th>Rating</Th>

                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.length > 0 &&
                    data?.map((el, i) => {
                      return (
                        <Tr key={el.id}>
                          <PostRow
                            {...el}
                            i={i}
                            updatePost={updatePost}
                            deletePost={deletePost}
                          />
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
