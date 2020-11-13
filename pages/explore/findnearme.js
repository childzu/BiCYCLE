import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import exploreMenus from "../../config/exploreMenus";

const NearMe = props => {
    const appTitle = `Search`;
    return (
        <Layout>
            <NavBar NavBarMenus={exploreMenus} appTitle={appTitle}/>
            <div>
                Near me
            </div>
        </Layout>
    );
}

export default NearMe;