import Head from "next/head";

import TopBar from "../Topbar";
import NavBar from "../NavBar";

import "./Layout.scss";
import "../index.scss";

import navButtons from "../../config/buttons";

const Layout = props => {
  const appTitle = `BiCYCLE`;

  return (
    <div className="Layout">
      <Head>
        <title>BiCYCLE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <TopBar navButtons={navButtons} appTitle={appTitle}/>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
