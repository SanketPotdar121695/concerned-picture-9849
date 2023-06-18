import { Box, HStack, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CalendarIcon } from "@chakra-ui/icons";
const PreviewPost = ({ blogpost }) => {
  const {
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
  } = blogpost;
  console.log(
    "Preview Post Data",
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
    heroimgURL
  );
  return (
    <Box>
      <Stack>
        {title ? <Heading textAlign={"left"}>{title}</Heading> : <></>}
        <HStack>
          {title ? <CalendarIcon /> : <></>}
          {title ? (
            <Text
              fontSize={"xl"}
              textAlign={"left"}
            >{`${new Date().toDateString()} ${new Date().toLocaleTimeString(
              "en-US"
            )}`}</Text>
          ) : (
            <></>
          )}
        </HStack>
        {heroimgURL ? (
          <Img src={heroimgURL} w={"80%"} borderRadius={"10px"} alt={title} />
        ) : (
          <></>
        )}
        {headingOne ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {headingOne}
          </Heading>
        ) : (
          <></>
        )}
        {blogimgURL ? (
          <Img
            src={blogimgURL}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${title}1`}
          />
        ) : (
          <></>
        )}

        {contentOne ? (
          <Text textAlign={"left"} w={"60%"}>
            {contentOne}
          </Text>
        ) : (
          <></>
        )}
        {headingTwo ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {headingTwo}
          </Heading>
        ) : (
          <></>
        )}
        {blogimgURLTwo ? (
          <Img
            src={blogimgURLTwo}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${title}2`}
          />
        ) : (
          <></>
        )}

        {contentTwo ? (
          <Text textAlign={"left"} w={"60%"}>
            {contentTwo}
          </Text>
        ) : (
          <></>
        )}
        {headingThree ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {headingThree}
          </Heading>
        ) : (
          <></>
        )}
        {blogimgURLThree ? (
          <Img
            src={blogimgURLThree}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${title}3`}
          />
        ) : (
          <></>
        )}
        {contentThree ? (
          <Text textAlign={"left"} w={"60%"}>
            {contentThree}
          </Text>
        ) : (
          <></>
        )}
        {headingFour ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {headingFour}
          </Heading>
        ) : (
          <></>
        )}
        {contentFour ? (
          <Text textAlign={"left"} w={"60%"}>
            {contentFour}
          </Text>
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  );
};

export default PreviewPost;
