import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import exploreMenus from "../../config/exploreMenus";

const MyCart = props => {
    const appTitle = `Search`;
    return (
        <Layout>
            <NavBar NavBarMenus={exploreMenus} appTitle={appTitle}/>
            <div>
                My bicycle
            </div>
        </Layout>
    );
}

export default MyCart;