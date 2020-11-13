import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import exploreMenus from "../../config/exploreMenus";

const SearchView = props => {
    const appTitle = `Search`;
    return (
        <Layout>
            <NavBar NavBarMenus={exploreMenus} appTitle={appTitle}/>
            <div>
                Search
            </div>
        </Layout>
    );
}

export default SearchView;