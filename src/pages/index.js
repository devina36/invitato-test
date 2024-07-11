import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';
import Layout from '../components/layout';
import LeftSide from '../components/leftSide';
import RightSide from '../components/rightSide';

const IndexPage = () => {
  const [isLargerThan1028] = useMediaQuery('(min-width: 1028px)');

  return (
    <Layout>
      <Flex width="100vw" height="100vh" overflowX={'hidden'} direction={'row'}>
        <Box className="left-side">{isLargerThan1028 && <LeftSide />}</Box>
        <Box className="right-side">
          <RightSide />
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <title>The Wedding of Tiffany & Jared by Invitato</title>
);
