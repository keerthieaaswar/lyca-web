import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import ToolBar from "@/components/toolbar";
import CarouselBar from "@/components/carousel";
import Body from "@/components/Body/body";
import {useState} from "react";
import Cart from "./cart/cart-page";

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false); //use state for more than one conditions| here, to show or not show carts
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <Head>
        <title>Lyca Mobile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <ToolBar onClick={() => setCartIsShown(!cartIsShown)} />
        <CarouselBar />
        {!cartIsShown ? (
          <Body onShowPopUp={showCartHandler} />
        ) : (
          <Cart onClose={hideCartHandler} />
        )}
      </main>
    </>
  );
}
