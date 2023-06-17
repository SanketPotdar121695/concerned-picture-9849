import React, { useState } from "react";
import { Box, Button, Heading, Select } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { postPostFn } from "../../redux/postReducer/action";
const Posts = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  //Headings
  const [headingOne, setHeadingOne] = useState("");
  const [headingTwo, setHeadingTwo] = useState("");
  const [headingThree, setHeadingThree] = useState("");
  const [headingFour, setHeadingFour] = useState("");
  //content
  const [contentOne, setContentOne] = useState("");
  const [contentTwo, setContentTwo] = useState("");
  const [contentThree, setContentThree] = useState("");
  const [contentFour, setContentFour] = useState("");
  //Images
  const [heroimgURL, setHeroImgURL] = useState("");
  const [blogimgURL, setblogImgURL] = useState("");
  const [blogimgURLTwo, setblogImgURLTwo] = useState("");
  const [blogimgURLThree, setblogImgURLThree] = useState("");

  const [blogpost, setBlogpost] = useState({});
  const data = useSelector((store) => store.postReducer);
  // console.log(data);
  const dispatch = useDispatch();

  const handlePostBlog = () => {
    /**
     {
    "title": "Redux",
    "author": "Sohel", //realation ship realted
    "content": {
        "sub_headings": ["heading1", "heading2", "heading3"],
        "descriptions": ["desc1", "desc2", "desc3"],
        "images": ["img1", "img2", "img3"]
    },
    "cover_image": "String",
    "likes": 0,
    "rating": 0,
    "date": "Date"
}
     */
    const payload = {
      title,
      content: {
        sub_headings: [headingOne, headingTwo, headingThree, headingFour],
        descriptions: [contentOne, contentTwo, contentThree, contentFour],
        images: [blogimgURL, blogimgURLTwo, blogimgURLThree],
      },
      category,
      cover_image: heroimgURL,
      date: `${new Date().toDateString()} ${new Date().toLocaleTimeString(
        "en-US"
      )}`,
    };
    setBlogpost(payload);
    console.log(blogpost);
     dispatch(postPostFn(payload));
  };

  return (
    <Box>
      {/* Form */}
      <Box
        border={"1px solid black"}
        w={"50%"}
        margin={"auto"}
        display={"flex"}
        gap={"5px"}
        flexDirection={"column"}
        padding={"25px"}
        mt={"10px"}
      >
        {/* Heading */}
        <Heading as={"h1"}>Add a Blog Post</Heading>
        <Editable
          // defaultValue="New Blog Title Here..."
          placeholder="New Blog Title Here..."
          fontSize="4xl"
          textAlign={"left"}
        >
          <EditablePreview />
          <EditableInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Editable>
        {/* Hero Image URL */}
        <Editable placeholder="Blog Hero Image URl" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={heroimgURL}
            onChange={(e) => setHeroImgURL(e.target.value)}
          />
        </Editable>
        {/* Blog Category */}
        <Select
          placeholder="Select Blog Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Houseplants">Houseplants</option>
          <option value="Perennials">Perennials</option>
          <option value="Indoor">Indoor </option>
        </Select>
        {/* Blog Sub-Heading-1 */}
        <Editable textAlign={"left"} placeholder="Blog Sub-Heading-1">
          <EditablePreview />
          <EditableInput
            value={headingOne}
            onChange={(e) => setHeadingOne(e.target.value)}
          />
        </Editable>
        {/* Blog Content-1 */}
        <Editable defaultValue="Blog Content-1" textAlign={"left"}>
          <EditablePreview />
          <EditableTextarea
            value={contentOne}
            onChange={(e) => setContentOne(e.target.value)}
          />
        </Editable>
        {/* Blog Sub-Heading-2 */}
        <Editable defaultValue="Blog Sub-Heading-2" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={headingTwo}
            onChange={(e) => setHeadingTwo(e.target.value)}
          />
        </Editable>
        {/* Blog Content-2 */}
        <Editable defaultValue="Blog Content-2" textAlign={"left"}>
          <EditablePreview />
          <EditableTextarea
            value={contentTwo}
            onChange={(e) => setContentTwo(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Image URl-2" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={blogimgURL}
            onChange={(e) => setblogImgURL(e.target.value)}
          />
        </Editable>{" "}
        <Editable defaultValue="Blog Sub-Heading-3" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={headingThree}
            onChange={(e) => setHeadingThree(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Content-3" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={contentThree}
            onChange={(e) => setContentThree(e.target.value)}
          />
        </Editable>{" "}
        <Editable defaultValue="Blog Sub-Heading-4" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={headingFour}
            onChange={(e) => setHeadingFour(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Content-4" textAlign={"left"}>
          <EditablePreview />
          <EditableInput
            value={contentFour}
            onChange={(e) => setContentFour(e.target.value)}
          />
        </Editable>
        <Button onClick={handlePostBlog}>Post Blog</Button>
      </Box>
    </Box>
  );
};

export default Posts;
