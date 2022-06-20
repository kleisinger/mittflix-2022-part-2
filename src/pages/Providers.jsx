import { useEffect, useState } from "react";
import { getProviders } from "../services/tmdb-api";

const ProvidersPage = () => {
    const [shows, setShows] = useState(null);
    

    // Call popular movies based on the provider that is passed in
    useEffect(() => {
        getProviders().then((shows) => setShows(shows))
        console.log(shows)
    }, [])
    console.log(shows)

    return ( 
        <h1>this works</h1>
     );
}
 
export default ProvidersPage;