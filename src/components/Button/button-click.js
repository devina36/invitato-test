import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonClick = ({ title, isLoading = false, ...props }) => {
  return (
    <Button
      fontWeight="light"
      color="secondaryColorText"
      fontFamily="body"
      padding="0 2.4rem"
      borderColor="#1A1B1D"
      borderStyle="solid"
      borderWidth={'1px'}
      borderRadius="0"
      fontSize="18px"
      fontStyle="italic"
      bg="gray.100"
      backgroundColor={'bgSecondary'}
      whiteSpace="nowrap"
      lineHeight={'1.2'}
      outline="2px solid transparent"
      outlineOffset={'2px'}
      height={8}
      minWidth={8}
      paddingInlineStart={3}
      paddingInlineEnd={3}
      isLoading={isLoading}
      {...props}
    >
      {title}
    </Button>
  );
};

export default ButtonClick;
