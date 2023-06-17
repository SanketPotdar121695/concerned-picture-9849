import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { postPostFn } from "../../redux/postReducer/action";

import PreviewPost from "./../../components/PreviewPost";
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

  useEffect(
    () => {
      console.log("form useEffect=>", blogpost);
    },
    [
      // headingOne,
      // headingTwo,
      // headingThree,
      // headingFour,
      // contentOne,
      // contentTwo,
      // contentThree,
      // contentFour,
      // blogimgURL,
      // blogimgURLTwo,
      // blogimgURLThree,
      // category,
      // title,
      // heroimgURL,
    ]
  );
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
   // setBlogpost(payload);
    console.log(payload);
     dispatch(postPostFn(payload));
  };

  return (
    <Box>
      <Box w={"90%"} margin={"auto"}>
        <Tabs>
          <TabList>
            <Tab>Edit</Tab>
            <Tab>Show</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Form */}
              <Box
                //border={"1px solid black"}
                w={"50%"}
                margin={"auto"}
                display={"flex"}
                gap={"5px"}
                flexDirection={"column"}
                padding={"25px"}
                mt={"10px"}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }
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
                <Editable placeholder="Blog Hero Image URL" textAlign={"left"}>
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
                <Editable
                  textAlign={"left"}
                  placeholder="Blog Sub-Heading-1"
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingOne}
                    onChange={(e) => setHeadingOne(e.target.value)}
                  />
                </Editable>
                <Editable defaultValue="Blog Image URL-1" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURL}
                    onChange={(e) => setblogImgURL(e.target.value)}
                  />
                </Editable>{" "}
                {/* Blog Content-1 */}
                <Editable defaultValue="Blog Content-1" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentOne}
                    onChange={(e) => setContentOne(e.target.value)}
                  />
                </Editable>
                {/* Blog Sub-Heading-2 */}
                <Editable
                  defaultValue="Blog Sub-Heading-2"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingTwo}
                    onChange={(e) => setHeadingTwo(e.target.value)}
                  />
                </Editable>
                <Editable defaultValue="Blog Image URL-2" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURLTwo}
                    onChange={(e) => setblogImgURLTwo(e.target.value)}
                  />
                </Editable>{" "}
                {/* Blog Content-2 */}
                <Editable defaultValue="Blog Content-2" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentTwo}
                    onChange={(e) => setContentTwo(e.target.value)}
                  />
                </Editable>
                <Editable
                  defaultValue="Blog Sub-Heading-3"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingThree}
                    onChange={(e) => setHeadingThree(e.target.value)}
                  />
                </Editable>
                <Editable defaultValue="Blog Image URL-3" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURLThree}
                    onChange={(e) => setblogImgURLThree(e.target.value)}
                  />
                </Editable>{" "}
                <Editable defaultValue="Blog Content-3" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentThree}
                    onChange={(e) => setContentThree(e.target.value)}
                  />
                </Editable>{" "}
                <Editable
                  defaultValue="Blog Sub-Heading-4"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingFour}
                    onChange={(e) => setHeadingFour(e.target.value)}
                  />
                </Editable>
                <Editable defaultValue="Blog Content-4" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentFour}
                    onChange={(e) => setContentFour(e.target.value)}
                  />
                </Editable>
                <Button
                  onClick={handlePostBlog}
                  colorScheme="teal"
                  variant="outline"
                  _hover={{
                    bg: "green.400",
                    color: "white",
                  }}
                >
                  Post Blog
                </Button>
              </Box>
            </TabPanel>
            <TabPanel>
              {/* <p>two!</p> */}
              <PreviewPost
                blogpost={{
                  headingOne,
                  headingTwo,
                  headingThree,
                  headingFour,
                  contentOne,
                  contentTwo,
                  contentThree,
                  contentFour,
                  blogimgURL,
                  blogimgURLTwo,
                  blogimgURLThree,
                  category,
                  title,
                  heroimgURL,
                  
                }}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Posts;
