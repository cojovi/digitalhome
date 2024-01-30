import React from 'react';
import { chakra, HTMLChakraProps } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  return (
    <chakra.img 
      src="/icon.png"  // Updated path
      alt="Logo"
      {...props}
    />
  );
};
