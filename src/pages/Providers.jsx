import { useEffect, useState } from "react";
import ProviderList from "../components/ProviderList";
import { getProviders } from "../services/tmdb-api";

const ProvidersPage = ({watchList, toggle}) => {
    const [providers, setProviders] = useState(null);
    

    // Call popular movies based on the provider that is passed in
    useEffect(() => {
        getProviders().then((providers) => setProviders(providers))
        //console.log(providers)
    }, [])
    //console.log(providers)

    return ( 
        // <h1>this works</h1>
        <ProviderList providers={providers} watchList={watchList} toggle={toggle} />
     );
}
 
export default ProvidersPage;