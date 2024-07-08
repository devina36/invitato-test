import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const LeftSide = () => {
  return (
    <Box
      width="calc(100% - 500px)"
      height="100%"
      position="fixed"
      bg="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539') center center / cover"
      borderRightWidth="8px"
      borderRightStyle="solid"
      borderRightColor={'blackAlpha.400'}
    >
      <Box height="100%" padding="42px">
        <div data-aos="fade-up" data-aos-duration="2000">
          <Text
            fontFamily="headingAlternative"
            fontSize="md"
            fontWeight="bold"
            letterSpacing={'2px'}
            color="alternativeColorText"
          >
            WEDDING ANNOUNCEMENT
          </Text>
        </div>
        <Box
          paddingTop="32px"
          letterSpacing={'4px'}
          color="alternativeColorText"
          textTransform="uppercase"
        >
          <Heading
            fontWeight={'light'}
            fontSize="7xl"
            lineHeight={1}
            textTransform="uppercase"
          >
            TIFFANY &
          </Heading>
          <Heading
            fontWeight={'light'}
            fontSize="7xl"
            textTransform="uppercase"
            marginTop="-15px"
            lineHeight={1.5}
          >
            JARED
          </Heading>
        </Box>
        <div data-aos="fade-up" data-aos-duration="2000">
          <Text
            fontWeight="light"
            letterSpacing={'1px'}
            maxWidth="800px"
            color="alternativeColorText"
            fontStyle={'italic'}
          >
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
            <br />— Sapardi Djoko Damono
          </Text>
        </div>
      </Box>
    </Box>
  );
};

export default LeftSide;
