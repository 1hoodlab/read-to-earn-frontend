import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import LoadingPageProvider from "@/context/loading.context";
import { ConnectKitProvider } from "connectkit";
import Footer from "@/components/footer";

const { chains, provider, webSocketProvider } = configureChains(
  [bscTestnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  logger: {
    warn: (message) => console.log(message),
  },
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({ chains }),
  ],
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <LoadingPageProvider>
            <DefaultSeo {...NEXT_SEO_DEFAULT} />
            <Header />
            <Menu />

            <Component {...pageProps} />
            <Footer/>
          </LoadingPageProvider>
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
