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
    //console.log(query)

    useEffect(() => {
        getShowsByProviderId(query).then((titles) => setTitles(titles));
      }, []);

      //console.log(titles)

    return ( 
        // <h1>this works</h1>
        <>
         {titles ? (
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

// {shows ? (
//     shows.map((showProvider) => {
//       return (
//         <TitleList
//           key={showProvider[0]}
//           name={showProvider[0]}
//           titles={showProvider[1]}
//           toggle={toggle}
//           watchList={watchList}
//         />
//       );
//     })
//   ) : (
//     <p>Loading... </p>
//   )}

// {titles ? (
//     <TitleList
//       name={`shows matching your search: "${query}"`}
//       titles={titles}
//       watchList={watchList}
//       toggle={toggle}
//     />
//   ) : (
//     <h2>No matching results</h2>
//   )}