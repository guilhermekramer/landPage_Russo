import { motion } from "framer-motion";
import React from "react";

const AnimatedButton = ({ props }) => {
  return (
    <motion.button
      initial={{ opacity: props.opacity, scale: props.scale }} // Definindo o estado inicial da animação
      animate={{ opacity: props.opacity, scale: props.scale }} // Definindo o estado final da animação
      transition={{ duration: props.duration }} // Definindo a duração da animação
    >
      Meu Botão Animado
    </motion.button>
  );
};

export default AnimatedButton;
