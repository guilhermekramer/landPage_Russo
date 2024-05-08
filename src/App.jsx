import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import BackgroundImage from "./components/background/ImageBackground";
import background1 from "../src/assets/backgroundBandeira.jpg";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <BackgroundImage src={background1}>
        <Feed />
      </BackgroundImage>
    </ChakraProvider>
  );
}

export default App;
