import { Circle, Flex } from "@chakra-ui/react";

interface EmblaCarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
}

export const EmblaCarouselDots: React.FC<EmblaCarouselDotsProps> = ({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
}) => {
  return (
    <Flex align="center" justify="center" gap={2}>
      {scrollSnaps.map((_, index) => (
        <Circle
          key={index}
          onClick={() => onDotButtonClick(index)}
          transition="all 0.2s ease-in-out"
          cursor="pointer"
          size="20px"
          borderRadius="50%"
          borderWidth="3px"
          borderColor="gray.100"
          bg="blackAlpha.900"
          color="white"
          _hover={{
            bg: "gray.200",
          }}
          {...(index === selectedIndex && {
            transform: "scale(1.2)",
            bg: "gray.100",
          })}
        />
      ))}
    </Flex>
  );
};
