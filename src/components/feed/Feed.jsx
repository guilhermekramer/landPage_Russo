import russo2 from "../../assets/russo2.jpg";

import { Button, Container, Flex, Text, Box, Image } from "@chakra-ui/react";

const Feed = () => {
  return (
    <>
      <Container
        maxW="83%"
        p="1rem"
        mt={{ base: "1rem", sm: "2rem", md: "3rem" }}
        borderRadius="5"
        border={{
          base: "none",
          sm: "none",
          md: "2px solid #ccc",
          lg: "2px solid #ccc",
        }}
        boxShadow={{
          base: "none", // Remove a sombra em dispositivos móveis
          sm: "none", // Remove a sombra em tablets
          md: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adiciona a sombra em telas maiores (desktop)
          lg: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adiciona a sombra em telas ainda maiores
        }}
      >
        <Flex alignItems="center" w="100%" py="1rem">
          <Box w={{ base: "25%", sm: "0", md: "400px" }} maxW="50rem">
            <Image
              src={russo2}
              alt="Imagem de exemplo"
              objectFit="cover"
              mr="4"
              borderRadius="5"
              display={{
                base: "none", // Oculta a imagem em dispositivos móveis
                sm: "none", // Oculta a imagem em tablets
                md: "block", // Exibe a imagem na web (desktop)
                lg: "block", // Exibe a imagem em telas grandes (desktop)
                xl: "block", // Exibe a imagem em telas extra grandes (desktop)
                "2xl": "block", // Exibe a imagem em telas muito grandes (desktop)
              }}
            />
          </Box>

          <Box
            px={{ base: "0", xl: "2rem" }}
            my={{
              base: "0",
              sm: "2rem",
              md: "0",
              lg: "0",
              xl: "0",
              "2xl": "0",
            }}
            textAlign={{
              base: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
              "2xl": "left",
            }}
          >
            <Text
              fontFamily="mainTitle"
              fontSize={{ base: "40", sm: "40", md: "50" }}
              fontWeight="bold"
              color="primaryWhite"
            >
              Aprenda Russo com quem viveu na Rússia
            </Text>
            <Text
              mt="3"
              fontFamily="heading"
              maxW="70rem"
              fontSize="20"
              color="primaryWhite"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Text>
          </Box>

          <Button>Bora</Button>
        </Flex>
      </Container>
    </>
  );
};

export default Feed;
