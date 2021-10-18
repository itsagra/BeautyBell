import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar
        title={props.title}
        search={props.search}
        setData={props.setData}
        data={props.data}
      />
      {props.children}
    </div>
  );
}
