// pages/explore.js

import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";

const ExploreView = props => {
    const appTitle = `Explore`;
    return (
        <Layout>
            <NavBar appTitle={appTitle}/>
            <div>
                Explore View
            </div>
        </Layout>
    );
}

export default ExploreView;
