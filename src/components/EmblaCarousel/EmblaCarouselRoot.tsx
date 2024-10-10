import { Flex, FlexProps } from "@chakra-ui/react";

export const EmblaCarouselRoot: React.FC<FlexProps> = props => {
  return (
    <Flex
      w="full"
      minH="100vh"
      justify="center"
      align="center"
      direction="column"
      gap={4}
      {...props}
    >
      {props.children}
    </Flex>
  );
};
