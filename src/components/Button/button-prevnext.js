import { Button } from '@chakra-ui/react';
import React from 'react';

export default function ButtonPrevNext({ children, onClick, ...props }) {
  return (
    <Button
      height="30px"
      textAlign="center"
      width="70px"
      bg="bgSecondary"
      border="1px solid rgb(26,27,29)"
      padding="5px 10px"
      lineHeight="1"
      borderRadius={'0'}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
