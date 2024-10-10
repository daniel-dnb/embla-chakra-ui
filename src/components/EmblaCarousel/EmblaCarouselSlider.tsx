import { Flex, FlexProps } from "@chakra-ui/react";

export const EmblaCarouselSlider: React.FC<FlexProps> = props => {
  return (
    <Flex
      flex="0 0 100%"
      minW={0}
      bg="red.100"
      h="500px"
      align="center"
      justify="center"
      {...props}
    >
      {props.children}
    </Flex>
  );
};
