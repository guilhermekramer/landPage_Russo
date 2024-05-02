import style from "./style.module.css";
import { Box, styled } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box className={style.header}>
      <Box className={style.nav}>
        <Box className={style.logo}>Logo do Jorge</Box>
        <Box className={style.menu}>
          <Box className={style.menuButton}>Quem sou</Box>
          <Box className={style.menuButton}>Curso </Box>
          <Box className={style.menuButton}>Contato </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
