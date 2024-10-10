import { Box, BoxProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const EmblaCarouselContainer = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => {
    return (
      <Box ref={ref} overflow="hidden" w="80vw" position="relative" {...props}>
        {props.children}
      </Box>
    );
  }
);
