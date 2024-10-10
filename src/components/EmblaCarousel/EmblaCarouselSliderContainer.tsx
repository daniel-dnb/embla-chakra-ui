import { Flex, FlexProps } from "@chakra-ui/react";

export const EmblaCarouselSliderContainer: React.FC<FlexProps> = props => {
  return (
    <Flex color="blackAlpha.900" {...props}>
      {props.children}
    </Flex>
  );
};
