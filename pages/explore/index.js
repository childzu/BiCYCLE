// pages/explore.js

import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import exploreMenus from "../../config/exploreMenus";

const ExploreView = props => {
    const appTitle = `Explore`;
    return (
        <Layout>
            <NavBar NavBarMenus={exploreMenus} appTitle={appTitle}/>
            <div>
                Explore View
            </div>
        </Layout>
    );
}

export default ExploreView;
