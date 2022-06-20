import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchShows } from '../services/tmdb-api';
import TitleList from '../components/TitleList';
import { getShowsByProviderId } from '../services/tmdb-api';

const ProviderShows = ({ watchList, toggle}) => {
    const [titles, setTitles] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('id');

    let render;
    if (titles === undefined ||  titles === null) {
      render = false;
    } else if (titles.length === 0){
      render = false;
    } else {
      render = true;
    }

    useEffect(() => {
        getShowsByProviderId(query).then((titles) => setTitles(titles))
      }, []);


    return ( 
      <>
        {render === true ? (
           <TitleList
             name={`shows matching your search: "${query}"`}
             titles={titles}
             watchList={watchList}
             toggle={toggle}
           />
         ) : (
           <h2>No matching results</h2>
         )}
      </>
    );
}
 
export default ProviderShows;
