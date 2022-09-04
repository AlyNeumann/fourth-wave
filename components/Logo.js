import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
      <Image src="/images/FourthWaveNavLogo_Transparent.png" alt="Fourth Wave Logo" width="100%" height='50%' />
      </Text>
    </Box>
  );
}