import { CalendarIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SinglePostPage = () => {
  const data = [
    {
      _id: {
        $oid: "648eee337a317f302d43b736",
      },
      title: "Fall Flowers for Pots & Containers",
      author: "ganga dev",
      category: "Flower Garden",
      comments: [],
      content: {
        sub_headings: [
          "",
          "Asters",
          "Balloon Flower",
          "Blanket Flower/Gaillardia",
        ],
        descriptions: [
          "As the season makes its shift from the long, hot days of summer to the cooler days of fall, the landscape can feel void of color. However, there’s plenty of life left in fall gardens, and container gardening can revive even the most lackluster gardens, draw in essential pollinators, and welcomely adorn doorsteps.\n\nThere are lots of plants that work all summer and into the fall months to produce lovely, fragrant blooms and eye-catching colors to brighten up the landscape right up until winter’s first frost. Check out our robust list of fall flowers to plant in pots & containers that will warm, enhance, and refresh your transitioning landscape.",
          "Asters make fantastic fall flowers for pots & containers. Plant asters as thriller plants that provide showstopping color and unique texture in fall containers. These perennial favorites come in a wide array of species and produce white, purple, blue, and even pink.  Plants adjust well to dry conditions and thrive well in full sun to partial shade.",
          "Add the balloon flower’s intrigue to your fall garden landscape and enjoy splashes of blue, white, and pink that burst open from balloon-like pods. Balloon flowers do best in partial shade and attract bees and butterflies long after summer blooms have faded, which can help your fall gardens be more productive.",
          "Gaillardia flowers are unscented beauties that produce sunset-colored flowers into the fall. They thrive in the cooler months and make great fall flowers for pots & containers. Also known as blanket flowers, these perennial beauties lure tons of pollinators to the garden, from butterflies to bees, and even provide shelter for beetles. These low-maintenance plants require very little water and care and have extended bloom times to carry you right through the first frost.",
        ],
        images: [
          "",
          "",
          "https://kellogggarden.com/wp-content/uploads/2021/07/fall-flowers-for-pots.jpg",
        ],
        _id: {
          $oid: "648eee337a317f302d43b737",
        },
      },
      cover_image:
        "https://kellogggarden.com/wp-content/uploads/2021/07/fall-flowers-to-plant.jpg",
      subscribes: [
        {
          userID: "648ee1de5657ae12f8b5ac71",
          subscribed: false,
          _id: {
            $oid: "648eee337a317f302d43b738",
          },
        },
      ],
      likes: [
        {
          userID: "648ee1de5657ae12f8b5ac71",
          like: "neutral",
          _id: {
            $oid: "648eee337a317f302d43b739",
          },
        },
      ],
      rating: 2,
      date: "Sun Jun 18 2023 5:14:49 PM",
      userID: "648ee1de5657ae12f8b5ac71",
    },
  ];
  return (
    <Box w={"80%"} margin={"auto"} mt={"5%"}>
      <Stack>
        {data[0].title ? (
          <Heading textAlign={"left"} p={"10px"} as={"h1"}>
            {data[0].title}
          </Heading>
        ) : (
          <></>
        )}
        <HStack>
          {data[0].title ? <CalendarIcon /> : <></>}
          {data[0].date ? (
            <Text fontSize={"xl"} textAlign={"left"} p={"10px"}>
              {data[0].date}
            </Text>
          ) : (
            <></>
          )}
        </HStack>
        {data[0].cover_image ? (
          <Img
            src={data[0].cover_image}
            w={"80%"}
            borderRadius={"10px"}
            alt={data[0].title}
          />
        ) : (
          <></>
        )}
        {data[0].content.sub_headings[0] ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {data[0].content.sub_headings[0]}
          </Heading>
        ) : (
          <></>
        )}
        {data[0].content.images[0] ? (
          <Img
            src={data[0].content.images[0]}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${data[0].title}1`}
          />
        ) : (
          <></>
        )}

        {data[0].content.descriptions[0] ? (
          <Text textAlign={"left"} w={"60%"}>
            {data[0].content.descriptions[0]}
          </Text>
        ) : (
          <></>
        )}
        {data[0].content.sub_headings[1] ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {data[0].content.sub_headings[1]}
          </Heading>
        ) : (
          <></>
        )}
        {data[0].content.images[1] ? (
          <Img
            src={data[0].content.images[1]}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${data[0].title}2`}
          />
        ) : (
          <></>
        )}

        {data[0].content.descriptions[1] ? (
          <Text textAlign={"left"} w={"60%"}>
            {data[0].content.descriptions[1]}
          </Text>
        ) : (
          <></>
        )}
        {data[0].content.sub_headings[2] ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {data[0].content.sub_headings[2]}
          </Heading>
        ) : (
          <></>
        )}
        {data[0].content.images[2] ? (
          <Img
            src={data[0].content.images[2]}
            w={"60%"}
            borderRadius={"10px"}
            alt={`${data[0].title}3`}
          />
        ) : (
          <></>
        )}
        {data[0].content.descriptions[2] ? (
          <Text textAlign={"left"} w={"60%"}>
            {data[0].content.descriptions[2]}
          </Text>
        ) : (
          <></>
        )}
        {data[0].content.sub_headings[3] ? (
          <Heading textAlign={"left"} color={"#6db644"} as="h2">
            {data[0].content.sub_headings[3]}
          </Heading>
        ) : (
          <></>
        )}
        {data[0].content.descriptions[3] ? (
          <Text textAlign={"left"} w={"60%"}>
            {data[0].content.descriptions[3]}
          </Text>
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  );
};

export default SinglePostPage;
