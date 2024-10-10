import { Box, Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarousel } from "./components/EmblaCarousel";
import { useDotButton } from "./hooks/useDotButton";
import { usePrevNextButtons } from "./hooks/usePrevNextButtons";

const IMAGES = [
  "https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png",
  "https://cdn.pixabay.com/photo/2024/09/07/02/34/penguins-9028827_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/02/05/18/14/passenger-ship-8555025_1280.jpg",
];

function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: "auto",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <EmblaCarousel.Root>
      <EmblaCarousel.Container ref={emblaRef}>
        <EmblaCarousel.SliderContainer>
          {IMAGES.map((src, i) => (
            <EmblaCarousel.Slider key={i}>
              <Box h="full" w="full">
                <Image
                  src={src}
                  objectFit="cover"
                  objectPosition="center"
                  aspectRatio="16/9"
                  w="full"
                  h="full"
                />
              </Box>
            </EmblaCarousel.Slider>
          ))}
        </EmblaCarousel.SliderContainer>

        <EmblaCarousel.ButtonPrev
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        >
          Prev
        </EmblaCarousel.ButtonPrev>
        <EmblaCarousel.ButtonNext
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        >
          Next
        </EmblaCarousel.ButtonNext>
      </EmblaCarousel.Container>

      <EmblaCarousel.Dots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        onDotButtonClick={onDotButtonClick}
      />
    </EmblaCarousel.Root>
  );
}

export default App;
