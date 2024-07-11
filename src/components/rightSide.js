import React, { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Collapse,
  Stack,
  Link,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';
import ButtonClick from '../components/Button/button-click';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ChevronDown,
  MoveLeft,
  MoveRight,
  Volume2,
  VolumeX,
  Menu,
} from 'lucide-react';
import ButtonPrevNext from '../components/Button/button-prevnext';
import {
  images,
  detailBride,
  story,
  invitato,
  imgSincere,
} from '../utils/data';

const RightSide = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  let sliderRef = useRef(null);
  let slideStoryRef = useRef(null);
  const scrollRef = useRef(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePlayPause = () => {
    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.play();
      setMusicOn(true);
    }
  };

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleOpen = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(!isOpen);
      playAudio();
    }, 3000);
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleNextStory = () => {
    slideStoryRef.slickNext();
  };

  const handlePrevStory = () => {
    slideStoryRef.slickPrev();
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '90px',
    slidesToShow: 1,
    speed: 500,
    arrow: false,
  };

  const settingStory = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  const settingWhises = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    dots: true,
  };

  const renderAnnouncement = () => {
    return (
      <Stack
        minHeight={'100vh'}
        color="alternativeColorText"
        position="relative"
        bgColor={'bgPrimary'}
      >
        <div className="slide">
          {images.map((item, index) => (
            <Box
              key={index}
              bg={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${item})`}
            />
          ))}
        </div>
        <Box h="100vh" w="100%" p="2rem" zIndex={'2'} position="relative">
          <Flex
            justifyContent={'center'}
            alignItems="center"
            direction={'column'}
            height="100%"
            width="100%"
            position={'relative'}
          >
            <Box position={'absolute'} top="0" paddingTop={'60px'}>
              <Heading
                fontFamily="headingAlternative"
                fontSize="md"
                fontWeight="bold"
                letterSpacing={'2px'}
                color="alternativeColorText"
                textAlign={'center'}
              >
                WEDDING ANNOUNCEMENT
              </Heading>
            </Box>
            <Flex
              justifyContent={'center'}
              alignItems="center"
              direction={'column'}
            >
              <Heading
                fontWeight={'light'}
                color="alternativeColorText"
                fontSize={'4xl'}
              >
                TIFFANY & JARED
              </Heading>
              <Heading
                fontWeight={'light'}
                color="alternativeColorText"
                fontFamily={'body'}
                fontSize={'4xl'}
                fontStyle="italic"
              >
                #TImetoshaRE
              </Heading>
            </Flex>
            <Box position={'absolute'} bottom="0" right={'0'}>
              <Button
                fontFamily="headingAlternative"
                fontSize="md"
                fontWeight="bold"
                lineHeight={'1.2'}
                color="alternativeColorText"
                textTransform={'uppercase'}
                bg="transparent"
                px="0"
                onClick={executeScroll}
                _hover={{
                  background: 'transparent',
                }}
              >
                scroll to begin <ChevronDown color="#FEFEFE" />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Stack>
    );
  };

  const renderDetail = () => {
    return (
      <Stack
        padding="50px 0 25px"
        textAlign="center"
        bgColor={'bgPrimary'}
        color="mainColorText"
        position="relative"
        ref={scrollRef}
      >
        <div>
          <Text
            fontFamily={'headingAlternative'}
            fontWeight="bold"
            textTransform={'uppercase'}
            fontSize="md"
            letterSpacing={'2px'}
            textAlign="center"
          >
            DEAR MR-MRS-MS,
            <br />
            Family & Friends
          </Text>
        </div>
        <div>
          <Heading
            textAlign="center"
            fontWeight="medium"
            py={'20px'}
            lineHeight="1.33"
          >
            Welcome to
            <br />
            Tiffany & Jared
            <br />
            Wedding Website
          </Heading>
        </div>
        <div>
          <Text padding={'0 10% 24px'} marginBottom="18px" fontSize={'18px'}>
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
        </div>

        <div className="slider-container-center">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {images.map((item, index) => (
              <div
                key={index}
                style={{
                  width: '280px',
                }}
              >
                <img
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'cover cover',
                    height: '390px',
                    width: '280px',
                    borderWidth: '10px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                  }}
                  src={item}
                  alt={`pg-index`}
                />
              </div>
            ))}
          </Slider>
          <div style={{ textAlign: 'end', padding: '25px 0' }}>
            <ButtonPrevNext marginRight="10px" onClick={previous}>
              <MoveLeft color="rgb(26, 27, 29)" />
            </ButtonPrevNext>
            <ButtonPrevNext onClick={next} marginRight="50px">
              <MoveRight color="rgb(26, 27, 29)" />
            </ButtonPrevNext>
          </div>
        </div>
      </Stack>
    );
  };

  const renderDetailBride = () => {
    return (
      <Stack
        bgColor={'bgPrimary'}
        color="mainColorText"
        padding="1rem 2rem 2rem"
        textAlign={'center'}
        overflow="hidden"
        position={'relative'}
      >
        <Text
          fontFamily={'headingAlternative'}
          fontWeight="bold"
          textTransform={'uppercase'}
          fontSize="md"
          letterSpacing={'2px'}
          textAlign="center"
        >
          MEET THE BRIDE & GROOM
        </Text>
        <Box
          bg="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/4.%20Bride%20_%20Groom?updatedAt=1698223108396') center center / cover"
          position={'relative'}
          margin="40px auto 32px"
          className="box-detail-bride"
        >
          <Box className="element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="270px"
              height="330px"
              zoomAndPan="magnify"
              viewBox="0 0 810 1439.999935"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="2a26799b02">
                  <path
                    d="M 21 62.539062 L 785 62.539062 L 785 1377.289062 L 21 1377.289062 Z M 21 62.539062 "
                    clipRule="nonzero"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#2a26799b02)">
                <path
                  fill="#1a1b1d"
                  d="M 610.425781 1377.160156 L 609.371094 1372.570312 C 686.054688 1354.960938 771.871094 1277.570312 779.082031 1149.265625 C 784.902344 1045.742188 745.332031 974.140625 710.417969 910.96875 C 706.511719 903.898438 702.640625 896.890625 698.878906 889.925781 C 662.742188 930.75 612.726562 969.378906 555.667969 1000.261719 C 492.292969 1034.5625 427.167969 1055.925781 372.289062 1060.414062 C 344.054688 1062.726562 295.558594 1057.773438 251.800781 1036.199219 C 215.175781 1018.148438 170.007812 981.964844 162.832031 912.128906 C 157.683594 862.015625 169.0625 818.101562 197.617188 777.886719 C 222.46875 742.882812 257.253906 715.085938 287.945312 690.5625 C 326.902344 659.429688 360.546875 632.542969 368.785156 598.421875 C 384.960938 531.394531 323.566406 513.023438 245.839844 489.769531 C 150.15625 461.136719 31.074219 425.507812 22.398438 278.582031 C 20.167969 240.863281 25.808594 202.898438 39.152344 165.746094 C 51.855469 130.386719 71.542969 95.695312 97.675781 62.632812 L 101.371094 65.554688 C 48.511719 132.433594 22.828125 206 27.101562 278.304688 C 35.582031 421.941406 152.914062 457.046875 247.191406 485.253906 C 324.136719 508.277344 390.589844 528.160156 373.363281 599.527344 C 364.746094 635.214844 330.519531 662.570312 290.882812 694.242188 C 227.769531 744.675781 156.238281 801.839844 167.519531 911.648438 C 179.898438 1032.132812 310.570312 1060.746094 371.90625 1055.71875 C 481.332031 1046.765625 619.375 973.535156 696.503906 885.503906 C 678.796875 852.3125 663.980469 819.863281 660.203125 785.164062 C 653.914062 727.351562 678.144531 694.203125 700.808594 683.382812 C 712.511719 677.796875 725.851562 677.722656 736.488281 683.191406 C 745.085938 687.609375 756.242188 697.957031 760.546875 722.15625 C 764.933594 746.792969 762.796875 772.519531 754.199219 798.621094 C 746.238281 822.792969 732.738281 847.339844 714.066406 871.578125 C 710.3125 876.449219 706.347656 881.308594 702.191406 886.136719 C 706.203125 893.597656 710.351562 901.105469 714.542969 908.691406 C 749.761719 972.417969 789.683594 1044.652344 783.785156 1149.527344 C 780.371094 1210.261719 758.953125 1264.824219 721.839844 1307.324219 C 691.121094 1342.5 650.511719 1367.957031 610.425781 1377.160156 Z M 719.269531 683.847656 C 713.769531 683.847656 708.125 685.109375 702.835938 687.636719 C 681.566406 697.789062 658.863281 729.292969 664.886719 784.65625 C 668.511719 817.980469 682.707031 849.472656 699.808594 881.679688 C 703.464844 877.386719 706.980469 873.054688 710.335938 868.699219 C 748.335938 819.371094 764.097656 768.980469 755.910156 722.984375 C 752.769531 705.332031 745.308594 693.019531 734.335938 687.382812 C 729.75 685.023438 724.578125 683.847656 719.269531 683.847656 Z M 719.269531 683.847656 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </Box>
        </Box>
        {detailBride.map((item) => (
          <Box
            key={item.name}
            color={'mainColorText'}
            textAlign="center"
            mb="32px"
          >
            <Box px="14px">
              <div>
                <Heading
                  fontWeight={'light'}
                  lineHeight="1.33"
                  fontSize={'28px'}
                  marginTop="16px"
                  textAlign={'center'}
                  paddingLeft="0"
                  textTransform={'uppercase'}
                >
                  {item.name}
                </Heading>
              </div>
              <div>
                <Box my="6px">
                  <Link
                    fontFamily={'heading'}
                    fontWeight="light"
                    textDecoration="none"
                    fontSize={'xl'}
                    outlineOffset="2px"
                    outline="2px"
                    outlineColor={'transparent'}
                    href={item.link}
                    _focus={{ outlineColor: 'mainColorText' }}
                  >
                    {item.insta}
                  </Link>
                </Box>
              </div>
              <div>
                <Text fontSize={'18px'} fontStyle="italic">
                  {`The ${item.gander === 'male' ? 'Son' : 'Daughter'} of`}
                  <br />
                  {`Mr. ${item.dad} & Mrs. ${item.mom}`}
                </Text>
              </div>
            </Box>
          </Box>
        ))}
      </Stack>
    );
  };

  const renderTimePlace = () => {
    return (
      <Stack bgColor={'bgPrimary'}>
        <Box
          bgColor={'bgSecondary'}
          textAlign="center"
          color={'mainColorText'}
          padding="3rem 2rem 4rem"
          position={'relative'}
        >
          <Flex alignItems={'center'} justifyContent="center" mb="1rem">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#cdc1b1"
              font-size="2.8rem"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.58341 17.3211C3.55316 16.2275 3 15 3 13.0104C3 9.51092 5.45651 6.37372 9.03059 4.82324L9.92328 6.20085C6.58804 8.00545 5.93618 10.3461 5.67564 11.8221C6.21263 11.5444 6.91558 11.4467 7.60471 11.5106C9.40908 11.6778 10.8312 13.1591 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0096 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2275 13 15 13 13.0104C13 9.51092 15.4565 6.37372 19.0306 4.82324L19.9233 6.20085C16.588 8.00545 15.9362 10.3461 15.6756 11.8221C16.2126 11.5444 16.9156 11.4467 17.6047 11.5106C19.4091 11.6778 20.8312 13.1591 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0096 14.5834 17.3211Z"></path>
            </svg>
          </Flex>
          <div>
            <Text
              fontStyle={'italic'}
              fontSize="18px"
              color="secondaryColorText"
            >
              “And of His signs is that He created for you from yourselves mates
              that you may find tranquility in them, and He placed between you
              affection and mercy. Indeed in that are signs for a people who
              give thought.”
            </Text>
          </div>
          <div>
            <Text
              fontFamily={'headingAlternative'}
              fontWeight="bold"
              letterSpacing={'2px'}
              textTransform="uppercase"
              fontSize={'md'}
              textAlign="center"
              mt="1.5rem"
            >
              - Q.S. AR-RUM: 21
            </Text>
          </div>
        </Box>
        <Box py="3rem" px={'2rem'} position="relative">
          <div>
            <Heading
              fontFamily={'headingAlternative'}
              fontWeight="bold"
              textTransform={'uppercase'}
              fontSize="md"
              letterSpacing={'2px'}
              mb={'30px'}
              color="mainColorText"
            >
              PLACE & TIME
            </Heading>
          </div>
          <Box mt="-16px">
            <div>
              <Box color={'mainColorText'}>
                <Heading
                  fontWeight={'light'}
                  my="12px"
                  fontSize={'28px'}
                  lineHeight="1.33"
                >
                  Holy Matrimony
                </Heading>
                <Text fontSize={'18px'} mb="2px">
                  Date: Monday, 26 February 2024
                </Text>
                <Text fontSize={'18px'} mb="2px">
                  Time: 10.00 WIB
                </Text>
              </Box>
            </div>
          </Box>
        </Box>
      </Stack>
    );
  };

  const renderGift = () => {
    return (
      <Stack gap="0">
        <Flex
          w="100%"
          h="280px"
          bg="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/6.%20Wedding%20Gift?updatedAt=1698223189363') center center / cover"
          justifyContent={'center'}
          alignItems="center"
          position={'relative'}
          direction="column"
        >
          <Heading
            lineHeight={'1.33'}
            fontWeight={'light'}
            fontSize="28px"
            color="alternativeColorText"
          >
            Weddig Gift
          </Heading>
          <ButtonClick title={'Send Gift'} />
        </Flex>
        <Flex
          w="100%"
          h="280px"
          bg="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/8.%20Live%20Streaming?updatedAt=1698223271895') center center / cover"
          justifyContent={'center'}
          alignItems="center"
          position={'relative'}
          direction="column"
        >
          <Heading
            lineHeight={'1.33'}
            fontWeight={'light'}
            fontSize="28px"
            color="alternativeColorText"
          >
            Live Streaming
          </Heading>
          <ButtonClick title={'Open via Youtube'} />
        </Flex>
      </Stack>
    );
  };

  const renderStory = () => {
    return (
      <Stack bgColor={'bgPrimary'} p="3rem 0 2rem">
        <Heading
          lineHeight={'1.33'}
          fontWeight="md"
          fontSize={'28px'}
          textAlign="center"
          color={'mainColorText'}
        >
          Tiffany & Jared are
          <br />
          Getting Married!
        </Heading>
        <Box
          bg="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/9.%20Love%20Story?updatedAt=1698223306540') center center / cover"
          position={'relative'}
          margin="40px auto 32px"
          className="box-story"
        >
          <Box className="element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="270px"
              height="330px"
              zoomAndPan="magnify"
              viewBox="0 0 810 1439.999935"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="2a26799b02">
                  <path
                    d="M 21 62.539062 L 785 62.539062 L 785 1377.289062 L 21 1377.289062 Z M 21 62.539062 "
                    clipRule="nonzero"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#2a26799b02)">
                <path
                  fill="#1a1b1d"
                  d="M 610.425781 1377.160156 L 609.371094 1372.570312 C 686.054688 1354.960938 771.871094 1277.570312 779.082031 1149.265625 C 784.902344 1045.742188 745.332031 974.140625 710.417969 910.96875 C 706.511719 903.898438 702.640625 896.890625 698.878906 889.925781 C 662.742188 930.75 612.726562 969.378906 555.667969 1000.261719 C 492.292969 1034.5625 427.167969 1055.925781 372.289062 1060.414062 C 344.054688 1062.726562 295.558594 1057.773438 251.800781 1036.199219 C 215.175781 1018.148438 170.007812 981.964844 162.832031 912.128906 C 157.683594 862.015625 169.0625 818.101562 197.617188 777.886719 C 222.46875 742.882812 257.253906 715.085938 287.945312 690.5625 C 326.902344 659.429688 360.546875 632.542969 368.785156 598.421875 C 384.960938 531.394531 323.566406 513.023438 245.839844 489.769531 C 150.15625 461.136719 31.074219 425.507812 22.398438 278.582031 C 20.167969 240.863281 25.808594 202.898438 39.152344 165.746094 C 51.855469 130.386719 71.542969 95.695312 97.675781 62.632812 L 101.371094 65.554688 C 48.511719 132.433594 22.828125 206 27.101562 278.304688 C 35.582031 421.941406 152.914062 457.046875 247.191406 485.253906 C 324.136719 508.277344 390.589844 528.160156 373.363281 599.527344 C 364.746094 635.214844 330.519531 662.570312 290.882812 694.242188 C 227.769531 744.675781 156.238281 801.839844 167.519531 911.648438 C 179.898438 1032.132812 310.570312 1060.746094 371.90625 1055.71875 C 481.332031 1046.765625 619.375 973.535156 696.503906 885.503906 C 678.796875 852.3125 663.980469 819.863281 660.203125 785.164062 C 653.914062 727.351562 678.144531 694.203125 700.808594 683.382812 C 712.511719 677.796875 725.851562 677.722656 736.488281 683.191406 C 745.085938 687.609375 756.242188 697.957031 760.546875 722.15625 C 764.933594 746.792969 762.796875 772.519531 754.199219 798.621094 C 746.238281 822.792969 732.738281 847.339844 714.066406 871.578125 C 710.3125 876.449219 706.347656 881.308594 702.191406 886.136719 C 706.203125 893.597656 710.351562 901.105469 714.542969 908.691406 C 749.761719 972.417969 789.683594 1044.652344 783.785156 1149.527344 C 780.371094 1210.261719 758.953125 1264.824219 721.839844 1307.324219 C 691.121094 1342.5 650.511719 1367.957031 610.425781 1377.160156 Z M 719.269531 683.847656 C 713.769531 683.847656 708.125 685.109375 702.835938 687.636719 C 681.566406 697.789062 658.863281 729.292969 664.886719 784.65625 C 668.511719 817.980469 682.707031 849.472656 699.808594 881.679688 C 703.464844 877.386719 706.980469 873.054688 710.335938 868.699219 C 748.335938 819.371094 764.097656 768.980469 755.910156 722.984375 C 752.769531 705.332031 745.308594 693.019531 734.335938 687.382812 C 729.75 685.023438 724.578125 683.847656 719.269531 683.847656 Z M 719.269531 683.847656 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </Box>
        </Box>
        <Link
          href="https://www.youtube.com/watch?v=WEC5RezD5jU&feature=youtu.be"
          fontFamily={'headingAlternative'}
          letterSpacing="2px"
          textTransform={'uppercase'}
          fontSize="md"
          textDecoration={'underline'}
          color="mainColorText"
          mb={'30px'}
          textAlign="center"
        >
          Watch our Video
        </Link>
        <Box maxWidth={'300px'} margin="auto">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                slideStoryRef = slider;
              }}
              {...settingStory}
            >
              {story.map((item, index) => (
                <div key={index}>
                  <Heading
                    mb={'16px'}
                    fontWeight="bold"
                    textTransform={'uppercase'}
                    fontSize="lg"
                    color={'mainColorText'}
                    lineHeight="1.33"
                    textAlign={'center'}
                  >
                    {item.date}
                  </Heading>
                  <Text
                    color={'mainColorText'}
                    textAlign="center"
                    fontSize="lg"
                  >
                    {item.text}
                  </Text>
                </div>
              ))}
            </Slider>
            <div style={{ textAlign: 'center', padding: '25px 0' }}>
              <ButtonPrevNext marginRight="10px" onClick={handlePrevStory}>
                <MoveLeft color="rgb(26, 27, 29)" />
              </ButtonPrevNext>
              <ButtonPrevNext onClick={handleNextStory}>
                <MoveRight color="rgb(26, 27, 29)" />
              </ButtonPrevNext>
            </div>
          </div>
        </Box>
      </Stack>
    );
  };

  const renderWhises = () => {
    return (
      <Stack position={'relative'} py="3rem" px="2rem" bg="bgSecondary">
        <Box textAlign={'center'} color="secondaryColorText">
          <div>
            <Heading fontWeight={'light'} fontSize="32px" mb={'1rem'}>
              Prayers & Wishes
            </Heading>
          </div>
          <Text fontSize={'18px'}>
            Please leave your sincere prayers and wishes to us and our family:
          </Text>
        </Box>
        <div>
          <Box pt={2} width="280px" mx={'auto'}>
            <Input
              mt="12px"
              mb="18px"
              width="100%"
              fontWeight="light"
              color="mainColorText"
              fontFamily="body"
              borderColor="black"
              borderStyle="solid"
              borderWidth={'1px'}
              borderRadius="0"
              fontSize="md"
              fontStyle="italic"
              bg="gray.100"
              backgroundColor={'bgPrimary'}
              whiteSpace="nowrap"
              lineHeight={'1.2'}
              outline="2px solid transparent"
              outlineOffset={'2px'}
              placeholder="Name"
              _placeholder={{
                color: 'mainColorText',
              }}
            />
            <Input
              mb="18px"
              width="100%"
              fontWeight="light"
              color="mainColorText"
              fontFamily="body"
              borderColor="black"
              borderStyle="solid"
              borderWidth={'1px'}
              borderRadius="0"
              fontSize="md"
              fontStyle="italic"
              bg="gray.100"
              backgroundColor={'bgPrimary'}
              whiteSpace="nowrap"
              lineHeight={'1.2'}
              outline="2px solid transparent"
              outlineOffset={'2px'}
              placeholder="The Relationship"
              _placeholder={{
                color: 'mainColorText',
              }}
            />
            <Textarea
              mb="18px"
              width="100%"
              fontWeight="light"
              color="mainColorText"
              fontFamily="body"
              borderColor="black"
              borderStyle="solid"
              borderWidth={'1px'}
              borderRadius="0"
              fontSize="md"
              fontStyle="italic"
              bg="gray.100"
              backgroundColor={'bgPrimary'}
              whiteSpace="nowrap"
              lineHeight={'1.2'}
              outline="2px solid transparent"
              outlineOffset={'2px'}
              placeholder="Prayers & Whishes"
              _placeholder={{
                color: 'mainColorText',
              }}
            />
            <Box textAlign={'end'}>
              <Button
                fontWeight="light"
                color="alternativeColorText"
                fontFamily="body"
                padding="16px 32px"
                borderColor="#1A1B1D"
                borderStyle="solid"
                borderWidth={'1px'}
                borderRadius="0"
                fontSize="18px"
                fontStyle="italic"
                bg="gray.100"
                backgroundColor={'bgAlternative'}
                whiteSpace="nowrap"
                lineHeight={'1.2'}
                outline="2px solid transparent"
                outlineOffset={'2px'}
                height={8}
                minWidth={8}
                paddingInlineStart={3}
                paddingInlineEnd={3}
                mb="34px"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </div>
        <Box>
          <div className="slider-container">
            <Slider {...settingWhises}>
              {invitato.map((item, index) => (
                <div key={index}>
                  <Text
                    color={'secondaryColorText'}
                    fontStyle="italic"
                    pb="10px"
                    textAlign="center"
                    fontSize="lg"
                  >
                    {item.text}
                  </Text>
                  <Heading
                    mb={'16px'}
                    fontWeight="bold"
                    textTransform={'uppercase'}
                    fontSize="sm"
                    color={'secondaryColorText'}
                    textAlign={'center'}
                    fontFamily="headingAlternative"
                  >
                    {item.from}
                  </Heading>
                </div>
              ))}
            </Slider>
          </div>
        </Box>
      </Stack>
    );
  };

  const renderCount = () => {
    return (
      <Stack p="3rem" position={'relative'} bg="bgPrimary">
        <div>
          <Text
            fontSize={'lg'}
            color="mainColorText"
            textAlign={'center'}
            mb="1rem"
          >
            It will be a joy for us if you are still willing to give your
            blessing from afar. Thank you for all the words, prayers, and
            attention given.
          </Text>
        </div>
        <Flex py="16px" px="32px" justifyContent="center" alignItems="center">
          <Flex
            direction={'row'}
            maxWidth="300px"
            justifyContent="center"
            alignItems="center"
            gap="1px"
          >
            <div>
              <Box
                textAlign={'center'}
                color="secondaryColorText"
                m="4px"
                w={'60px'}
                p="8px 4px"
                h="65px"
                bgColor={'bgSecondary'}
                border="1px"
                borderStyle={'solid'}
                borderColor="blackAlpha.900"
              >
                <Text fontFamily={'heading'} fontSize={'2xl'}>
                  168
                </Text>
                <Text fontFamily={'serif'} fontSize="xs" fontStyle={'italic'}>
                  Days
                </Text>
              </Box>
            </div>
            <div>
              <Box
                textAlign={'center'}
                color="secondaryColorText"
                m="4px"
                w={'60px'}
                p="8px 4px"
                h="65px"
                bgColor={'bgSecondary'}
                border="1px"
                borderStyle={'solid'}
                borderColor="blackAlpha.900"
              >
                <Text fontFamily={'heading'} fontSize={'2xl'}>
                  4
                </Text>
                <Text fontFamily={'serif'} fontSize="xs" fontStyle={'italic'}>
                  Hours
                </Text>
              </Box>
            </div>
            <div>
              <Box
                textAlign={'center'}
                color="secondaryColorText"
                m="4px"
                w={'60px'}
                p="8px 4px"
                h="65px"
                bgColor={'bgSecondary'}
                border="1px"
                borderStyle={'solid'}
                borderColor="blackAlpha.900"
              >
                <Text fontFamily={'heading'} fontSize={'2xl'}>
                  49
                </Text>
                <Text fontFamily={'serif'} fontSize="xs" fontStyle={'italic'}>
                  Minutes
                </Text>
              </Box>
            </div>
            <div>
              <Box
                textAlign={'center'}
                color="secondaryColorText"
                m="4px"
                w={'60px'}
                p="8px 4px"
                h="65px"
                bgColor={'bgSecondary'}
                border="1px"
                borderStyle={'solid'}
                borderColor="blackAlpha.900"
              >
                <Text fontFamily={'heading'} fontSize={'2xl'}>
                  42
                </Text>
                <Text fontFamily={'serif'} fontSize="xs" fontStyle={'italic'}>
                  Seconds
                </Text>
              </Box>
            </div>
          </Flex>
        </Flex>
      </Stack>
    );
  };

  const renderSincere = () => {
    return (
      <Stack gap={'0'} position={'relative'} bgColor="bgPrimary">
        <Box p="0 18px 4rem" textAlign={'center'} color="mainColorText">
          <Heading
            fontFamily={'headingAlternative'}
            fontWeight="bold"
            textTransform={'uppercase'}
            fontSize="md"
            letterSpacing={'2px'}
          >
            OUR SINCERE,
          </Heading>
          <Heading
            fontWeight={'light'}
            lineHeight="1.33"
            fontSize={'32px'}
            mt="2rem"
            mb="0.8rem"
          >
            TIFFANY & JARED
          </Heading>
          <Heading
            fontWeight={'light'}
            lineHeight="1.33"
            fontFamily={'body'}
            fontSize={'32px'}
            fontStyle="italic"
          >
            #TImetoshaRE
          </Heading>
        </Box>
        <Grid
          templateColumns={'repeat(3, 1fr)'}
          position="relative"
          w="100%"
          h="160px"
          direction={'row'}
        >
          {imgSincere.map((item, index) => (
            <GridItem key={index} bg={`url(${item}}) center center / cover`} />
          ))}
        </Grid>
        <Flex
          bg={'bgSecondary'}
          color="mainColorText"
          py="24px"
          textAlign="center"
          position={'relative'}
          direction="column"
          justifyContent={'center'}
        >
          <Link
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
            href="https://invitato.net/"
          >
            <Image
              src="https://ik.imagekit.io/invitatoid/global-assets/invitato_hs3nyqsuwy_.png?updatedAt=1638541184695"
              alt="invitato"
              maxWidth="95px"
              mb="8px"
              filter={'invert(1)'}
            />
          </Link>
          <Link
            fontFamily={'body'}
            textDecoration="none"
            fontSize={'sm'}
            outlineOffset="2px"
            outline="2px"
            outlineColor={'transparent'}
            href={'https://invitato.net'}
            _focus={{ outlineColor: 'mainColorText' }}
          >
            Created with Love by Invitato
          </Link>
          <Link
            fontFamily={'body'}
            textDecoration="none"
            fontSize={'sm'}
            outlineOffset="2px"
            outline="2px"
            outlineColor={'transparent'}
            href={'https://www.youtube.com/watch?v=imq9Sea2uq0'}
            _focus={{ outlineColor: 'mainColorText' }}
          >
            Song by So Far, So Good - Don Williams
          </Link>
          <Text fontSize={'smd'}>
            © 2024 Tiffany & Jared. All Rights Reserved
          </Text>
        </Flex>
      </Stack>
    );
  };

  return (
    <Box boxShadow={'2xl'}>
      <Box>
        <audio ref={audioRef}>
          <source
            src="https://invitato.net/test-product-engineer/static/bg-sound-a2a8927862ee1aa412b3df1a7e46ff7c.mp3"
            type="audio/mpeg"
          />
        </audio>
        {!isOpen && (
          <Button
            position={'fixed'}
            borderRadius="50%"
            zIndex="3"
            bottom={'12px'}
            left="53px"
            p="0"
            bgColor={'rgb(153, 122, 94)'}
            onClick={handlePlayPause}
            _hover={{
              background: 'rgb(153, 122, 94)',
            }}
          >
            {musicOn ? (
              <Volume2 size={'14'} color="white" />
            ) : (
              <VolumeX size={'14'} color="white" />
            )}
          </Button>
        )}
      </Box>
      {!isOpen && (
        <Button
          position={'fixed'}
          borderRadius="50%"
          zIndex="3"
          bottom={'12px'}
          left="12px"
          p="0"
          bgColor={'rgb(153, 122, 94)'}
          _hover={{
            background: 'rgb(153, 122, 94)',
          }}
        >
          <Menu size={'14'} color="white" />
        </Button>
      )}
      <Collapse in={isOpen} animateOpacity>
        <Box
          minHeight={'100vh'}
          color="alternativeColorText"
          position="relative"
        >
          <Box
            height={'100vh'}
            width="100%"
            bg="linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920') center / cover"
            padding={'2rem'}
          >
            <Flex
              justifyContent={'center'}
              alignItems="center"
              direction={'column'}
              height="100%"
              width="100%"
              position={'relative'}
            >
              <Box position={'absolute'} top="0" paddingTop={'60px'}>
                <Heading
                  fontFamily="headingAlternative"
                  fontSize="md"
                  fontWeight="bold"
                  letterSpacing={'2px'}
                  color="alternativeColorText"
                  textAlign={'center'}
                >
                  WEDDING ANNOUNCEMENT
                </Heading>
              </Box>
              <Flex
                justifyContent={'center'}
                alignItems="center"
                direction={'column'}
              >
                <Heading
                  fontWeight={'light'}
                  color="alternativeColorText"
                  fontSize={'4xl'}
                >
                  TIFFANY & JARED
                </Heading>
                <Heading
                  fontWeight={'light'}
                  color="alternativeColorText"
                  fontFamily={'body'}
                  fontSize={'4xl'}
                >
                  #TImetoshaRE
                </Heading>
              </Flex>
              <Box position={'absolute'} bottom="25%">
                <ButtonClick
                  title={'Open'}
                  onClick={handleOpen}
                  className="pushDown"
                  isLoading={isLoading}
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Collapse>
      {!isOpen && (
        <Box>
          <>{renderAnnouncement()}</>
          <>{renderDetail()}</>
          <>{renderDetailBride()}</>
          <>{renderTimePlace()}</>
          <>{renderGift()}</>
          <>{renderStory()}</>
          <>{renderWhises()}</>
          <>{renderCount()}</>
          <>{renderSincere()}</>
        </Box>
      )}
    </Box>
  );
};

export default RightSide;
