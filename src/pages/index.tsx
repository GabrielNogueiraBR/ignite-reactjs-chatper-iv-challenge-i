import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <meta
          name="description"
          content="Repository created to save the worldtrip project develop during the React course on Rocketseat."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main><Text>Olá mundo!</Text></main>
    </>
  );
}
