import React, { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
const Posts = () => {
  const [title, setTitle] = useState("");
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
      cover_image: heroimgURL,
      date: `${new Date().toDateString()} ${new Date().toLocaleTimeString(
        "en-US"
      )}`,
    };
    console.log(payload);
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
        padding={"5px"}
        mt={"10px"}
      >
        {/* Heading */}
        <Heading as={"h1"}>Add a Blog Post</Heading>
        <Editable defaultValue="New Blog Title Here..." fontSize="4xl">
          <EditablePreview />
          <EditableInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Editable>
        {/* Hero Image URL */}
        <Editable defaultValue="Blog Hero Image URl">
          <EditablePreview />
          <EditableInput
            value={heroimgURL}
            onChange={(e) => setHeroImgURL(e.target.value)}
          />
        </Editable>
        {/* Blog Sub-Heading-1 */}
        <Editable defaultValue="Blog Sub-Heading-1">
          <EditablePreview textAlign={"left"} />
          <EditableInput
            value={headingOne}
            onChange={(e) => setHeadingOne(e.target.value)}
          />
        </Editable>
        {/* Blog Content-1 */}
        <Editable defaultValue="Blog Content-1">
          <EditablePreview />
          <EditableTextarea
            value={contentOne}
            onChange={(e) => setContentOne(e.target.value)}
          />
        </Editable>
        {/* Blog Sub-Heading-2 */}
        <Editable defaultValue="Blog Sub-Heading-2">
          <EditablePreview />
          <EditableInput
            value={headingTwo}
            onChange={(e) => setHeadingTwo(e.target.value)}
          />
        </Editable>
        {/* Blog Content-2 */}
        <Editable defaultValue="Blog Content-2">
          <EditablePreview />
          <EditableTextarea
            value={contentTwo}
            onChange={(e) => setContentTwo(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Image URl-2">
          <EditablePreview />
          <EditableInput
            value={blogimgURL}
            onChange={(e) => setblogImgURL(e.target.value)}
          />
        </Editable>{" "}
        <Editable defaultValue="Blog Sub-Heading-3">
          <EditablePreview />
          <EditableInput
            value={headingThree}
            onChange={(e) => setHeadingThree(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Content-3">
          <EditablePreview />
          <EditableInput
            value={contentThree}
            onChange={(e) => setContentThree(e.target.value)}
          />
        </Editable>{" "}
        <Editable defaultValue="Blog Sub-Heading-4">
          <EditablePreview />
          <EditableInput
            value={headingFour}
            onChange={(e) => setHeadingFour(e.target.value)}
          />
        </Editable>
        <Editable defaultValue="Blog Content-4">
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
