import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LookAtMe</title>
        <meta
          property="og:lookatme"
          content="2030 심리상담 커뮤니티 룩앳미"
        ></meta>
        <meta
          property="og:description"
          content="온라인 커뮤니티를 통해 심리적 고민, 문제를 공유해보세요. 장소 구애없이 채팅으로 상담도 받을 수 있습니다."
        ></meta>
        <meta
          property="og:image"
          content="https://storage.googleapis.com/lookatme-storage/2022/9/21/13dd1314-332c-4482-8d42-65ae7ee88356/origin/title-logo.png"
        ></meta>
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
