import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Feed />
    </ChakraProvider>
  );
}

export default App;
