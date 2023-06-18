import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallpostUser } from "../../redux/postReducer/action";
const Profile = () => {
  const data = useSelector((store) => store.postReducer.posts);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallpostUser());
  }, []);
  return (
    <Box>
      <Box>
        <Box> User Profile</Box>
        <Box>{/* Blog Posts */}</Box>
      </Box>
    </Box>
  );
};

export default Profile;
