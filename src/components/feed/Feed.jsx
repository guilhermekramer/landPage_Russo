import style from "./style.module.css";
import russo1teste from "../../assets/russo1teste.jpeg";
import russo2 from "../../assets/russo2.jpg";

import { Container, Flex, Text, Box, Image } from "@chakra-ui/react";

const Feed = () => {
  return (
    <>
      <Container
        maxW="83%"
        p="1rem"
        mt="0.5rem"
        borderRadius="5"
        border="2px solid #ccc"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex alignItems="center" w="100%" py="1rem">
          <Box w="25%" maxW="50rem">
            <Image
              src={russo2}
              alt="Imagem de exemplo"
              objectFit="cover"
              mr="4"
              borderRadius="5"
            />
          </Box>
          <Box px="6" textAlign="flex-start">
            <Text fontFamily="mainTitle" fontSize="55" fontWeight="bold">
              Aprenda Russo com quem viveu na Rússia
            </Text>
            <Text mt="3" fontFamily="heading" maxW="70rem" fontSize="20">
              {/* Ajuste a largura máxima */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Text>
          </Box>
        </Flex>
      </Container>

      {/*  <div className={style.main}>
          <div className={style.imageContainer}>
            <img src={russo1teste} className={style.image1} />
          </div>

          <div className={style.titleContainer}>
            <h1 className={style.titleMain}>
              Aprenda Russo com quem viveu a Experiência
            </h1>
            <p className={style.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={style.sectionContainer}>
          <section className={style.section1}>
            <h1>Feed2</h1>
          </section>

          <section className={style.section2}>
            <h1>Feed2</h1>
          </section>
        </div> */}
    </>
  );
};

export default Feed;
