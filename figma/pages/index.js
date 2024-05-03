import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Certificate from "./certificate";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap')
</style>
      </Head>
      <Certificate/>
      

    </>
  );
}
