import { useEffect, useState } from "react";
import ProviderList from "../components/ProviderList";
import { getProviders } from "../services/tmdb-api";

const ProvidersPage = ({watchList, toggle}) => {
    const [providers, setProviders] = useState(null);
    
    useEffect(() => {
        getProviders().then((providers) => setProviders(providers))
    }, [])

    return ( 
        <ProviderList providers={providers} watchList={watchList} toggle={toggle} />
     );
}
 
export default ProvidersPage;