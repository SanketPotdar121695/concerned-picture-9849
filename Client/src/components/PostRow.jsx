import { Button, HStack, Td } from "@chakra-ui/react";
import React from "react";

const PostRow = ({ title, date, category, rating, updatePost, deletePost }) => {
  return (
    <>
      <Td>{title}</Td>
      <Td>{category}</Td>
      <Td>{rating}</Td>
      <Td>
        <HStack spacing={"3"}>
          <Button
            bg={"green"}
            color={"white"}
            _hover={{ bgColor: "green", color: "white" }}
          >
            Update
          </Button>
          <Button
            bg={"red"}
            color={"white"}
            _hover={{ bgColor: "red", color: "white" }}
          >
            Delete
          </Button>
        </HStack>
      </Td>
    </>
  );
};

export default PostRow;
