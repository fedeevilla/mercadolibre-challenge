import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Header } from "../components/header";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Stack backgroundColor="gray.100">
          <Component {...pageProps}></Component>
        </Stack>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
