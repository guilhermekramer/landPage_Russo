import { Box } from "@chakra-ui/react";

const BackgroundImage = ({ src, children }) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage={`url(${src})`}
        backgroundSize="cover"
        backgroundPosition="center"
        filter="blur(10px)"
        zIndex="-1"
      />
      {children}
    </Box>
  );
};

export default BackgroundImage;
