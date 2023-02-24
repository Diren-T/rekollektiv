import GlobalStyle from "@/styles";
import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const BgImage = dynamic(() => import("@/components/BGImage"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>rekollektiv</title>w
      </Head>
      <BgImage />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
