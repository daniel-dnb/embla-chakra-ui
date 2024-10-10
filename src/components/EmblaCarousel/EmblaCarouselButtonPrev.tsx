import { Button, ButtonProps } from "@chakra-ui/react";

export const EmblaCarouselButtonPrev: React.FC<ButtonProps> = props => {
  return (
    <Button
      position="absolute"
      top="50%"
      left="10"
      translateY="-50%"
      {...props}
    >
      {props.children}
    </Button>
  );
};
