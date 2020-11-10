import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";

const SearchView = props => {
    const appTitle = `Search`;
    return (
        <Layout>
            <NavBar appTitle={appTitle}/>
            <div>
                Search
            </div>
        </Layout>
    );
}

export default SearchView;