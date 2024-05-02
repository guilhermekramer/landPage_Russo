import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }} // Define a opacidade ao passar o mouse sobre o botão
      whileTap={{ scale: 0.9 }} // Define a escala ao clicar no botão
      transition={{ duration: 0.2 }} // Define a duração da transição
    >
      <Button fontFamily="heading" fontSize="20" borderRadius="5" {...props}>
        {children}
      </Button>
    </motion.button>
  );
};

export default AnimatedButton;
