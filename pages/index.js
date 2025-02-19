
import Head from "next/head";
import Home from "./Home";


export default function Index() {
  return (
    <div>
      <Head>
        <title>Bucket List</title>
        <link rel="icon" href="/assets/logo/sub_mask1.png"/>
      </Head>
      <Home/>
    </div>
  );
}
