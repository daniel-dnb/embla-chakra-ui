import { Button, ButtonProps } from "@chakra-ui/react";

export const EmblaCarouselButtonNext: React.FC<ButtonProps> = props => {
  return (
    <Button
      position="absolute"
      top="50%"
      right="10"
      translateY="-50%"
      {...props}
    >
      {props.children}
    </Button>
  );
};
