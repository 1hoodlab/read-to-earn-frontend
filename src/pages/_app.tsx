import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import Header from "@/components/header";
import Menu from "@/components/menu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <Header />
      <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
