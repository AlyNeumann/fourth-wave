import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";

const ChakraNextLink = React.forwardRef(({ href, children, ...props }, ref ) => {
  return (
    <Link href={href} passHref>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});

export default ChakraNextLink;