import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "fill",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader",
    ].includes(prop),
  baseStyle: {
    fill: "true",
  },
});

export default ChakraNextImage;
