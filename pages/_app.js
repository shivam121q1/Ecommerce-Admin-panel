import "@/styles/globals.css";
import Home from "./index"
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: {session,...pageProps} }) {
  return (
  <SessionProvider session={session}>
    <Component {...pageProps}/>
  </SessionProvider>
  );
}
