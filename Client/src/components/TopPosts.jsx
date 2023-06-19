import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopPosts } from "../redux/postReducer/action";
import { PostCard } from "./PostCard";
import { Box, Text } from "@chakra-ui/react";

function TopPosts() {
  const posts = useSelector((store) => store.postReducer.posts);
  const token = useSelector((store) => store.authReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopPosts(token));
  }, []);

  return (
    <div style={{ width: "70%" }}>
      {posts.map((item) => {
        return (
          <PostCard
            title={item.title}
            category={item.category}
            image={item.cover_image}
            rating={item.rating}

          />
        );
      })}
    </div>
  );
}

export default TopPosts;
