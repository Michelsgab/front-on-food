import type { NextPage } from "next";
import Head from "next/head";
import { Search, PageTemplate, Dishe } from "@/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate>
        <h1>Encontre opções em Delivery próximos à você.</h1>
        <Search />
        <h2>
          Descubra seu novo Delivery favorito. Milhares de opções em um clique.
        </h2>
        <Dishe />
        
      </PageTemplate>
    </>
  );
};

export default Home;