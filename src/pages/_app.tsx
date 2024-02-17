import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapJs from "@/components/bootstrap-js/BootstrapJs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-3 pt-5">
        <Component {...pageProps} />
      </div>
      <BootstrapJs />
      <div>
        <Footer />
      </div>
      ̥̥
    </>
  );
}
