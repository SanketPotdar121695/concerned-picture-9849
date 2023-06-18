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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  useToast,
} from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { RiHome4Line } from "react-icons/ri";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
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
  const toast = useToast();
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

    toast({
      title: "Blog has been created.",
      description: "Yeah..! Soon will be Live.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <HStack p={"20px"} alignItems={"center"}>
        <RiHome4Line size={"20px"} />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/addpost">Add Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <Box w={"90%"} margin={"auto"}>
        <Tabs align="end" variant="enclosed">
          <TabList>
            <Tab
              _selected={{ bg: "green.400", color: "white" }}
              fontWeight={"bold"}
              gap={"4px"}
            >
              <EditIcon />
              Edit
            </Tab>
            <Tab
              _selected={{ bg: "green.400", color: "white" }}
              fontWeight={"bold"}
              gap={"4px"}
            >
              <ViewIcon />
              Preview
            </Tab>
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
                <Heading as={"h1"} align="center" p={"10px"}>
                  Add a Blog Post
                </Heading>
                <Editable
                  // placeholder="New Blog Title Here..."
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
                <Editable
                  placeholder="Add a cover Image URL"
                  textAlign={"left"}
                >
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
                  <option value="Vegetable Garden">Vegetable Garden</option>
                  <option value="Herb Garden">Herb Garden</option>
                  <option value="Flower Garden">Flower Garden</option>
                  <option value="Fruit Orchard">Fruit Orchard</option>
                  <option value="Medicinal Garden">Medicinal Garden </option>
                  <option value="Aromatic Garden">Aromatic Garden</option>
                  <option value="Butterfly Garden">Butterfly Garden</option>
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
                <Editable placeholder="Blog Image URL-1" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURL}
                    onChange={(e) => setblogImgURL(e.target.value)}
                  />
                </Editable>{" "}
                {/* Blog Content-1 */}
                <Editable placeholder="Blog Content-1" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentOne}
                    onChange={(e) => setContentOne(e.target.value)}
                  />
                </Editable>
                {/* Blog Sub-Heading-2 */}
                <Editable
                  placeholder="Blog Sub-Heading-2"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingTwo}
                    onChange={(e) => setHeadingTwo(e.target.value)}
                  />
                </Editable>
                <Editable placeholder="Blog Image URL-2" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURLTwo}
                    onChange={(e) => setblogImgURLTwo(e.target.value)}
                  />
                </Editable>{" "}
                {/* Blog Content-2 */}
                <Editable placeholder="Blog Content-2" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentTwo}
                    onChange={(e) => setContentTwo(e.target.value)}
                  />
                </Editable>
                <Editable
                  placeholder="Blog Sub-Heading-3"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingThree}
                    onChange={(e) => setHeadingThree(e.target.value)}
                  />
                </Editable>
                <Editable placeholder="Blog Image URL-3" textAlign={"left"}>
                  <EditablePreview />
                  <EditableInput
                    value={blogimgURLThree}
                    onChange={(e) => setblogImgURLThree(e.target.value)}
                  />
                </Editable>{" "}
                <Editable placeholder="Blog Content-3" textAlign={"left"}>
                  <EditablePreview />
                  <EditableTextarea
                    value={contentThree}
                    onChange={(e) => setContentThree(e.target.value)}
                  />
                </Editable>{" "}
                <Editable
                  placeholder="Blog Sub-Heading-4"
                  textAlign={"left"}
                  fontSize="2xl"
                >
                  <EditablePreview />
                  <EditableInput
                    value={headingFour}
                    onChange={(e) => setHeadingFour(e.target.value)}
                  />
                </Editable>
                <Editable placeholder="Blog Content-4" textAlign={"left"}>
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
